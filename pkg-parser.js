const fromEntries = require('object.fromentries')
const camelCase = require('camelcase')
const { parsing } = require('./config')

/**
 * Parse a status file string into a JS object.
 * Only includes the needed fields specified in the config file.
 */
function parse (str) {
  // Use regex to parse the string
  const packages = str.split(parsing.packageSeparator) // Separate packages
    .map(str => str.split(parsing.fieldSeparator)) // Separate fields
    .map(field => fromEntries(
      // Separate field entries, then format
      field.map(str => formatField(str.split(parsing.fieldEntrySeparator)))
        .filter(([key]) => parsing.include.includes(key)) // Filter out unneeded fields
    ))

  // ---- Add reverse dependencies (aka dependents) ----

  // Create reverse lookup table to get index from name
  const nameToIndex = fromEntries(packages.map((pkg, i) => [pkg.package, i]))

  // Add initial dependents list
  packages.forEach(pkg => { pkg.dependents = [] })

  // For each package, get its dependencies and add the
  // package name to the dependency's dependants list.
  packages.forEach(({ depends = [], dependents, package: name }) => {
    depends.forEach(group => {
      group.forEach(dependency => {
        if (nameToIndex[dependency]) {
          packages[nameToIndex[dependency]].dependents.push([name])
        }
      })
    })
  })

  // Sort alphabetically by package name
  packages.sort(({ package: a }, { package: b }) => a > b ? 1 : a < b ? -1 : 0)

  return packages
}

/**
 * formatField makes keys camelCase applies special
 * formatting to certain field values.
 */
function formatField ([key, value]) {
  // Make key ~camelCase~
  key = camelCase(key)

  // Format values of depends and description fields
  switch (key) {
    case 'depends': value = formatDepends(value); break
    case 'description': value = formatDescription(value); break
  }

  // Return new formatted values
  return [key, value]
}

/**
 * formatDepends formats package lists to separate
 * packages into arrays.
 */
function formatDepends (value) {
  return Array.from(
    // This one is long.. the first part matches with all package names.
    // The second part (after the first parentheses) matches with the
    // '|' character followed by an optional second package if there are
    // alternative dependencies.
    value.matchAll(/([a-z][a-z0-9-_.]+)(?:(?:[^|]+\|\s+)([a-z][a-z0-9-_.]+))?/g)
  ).map(v => v.filter((v, i) => i !== 0 && v)) // Filter out full match and empty values
}

/**
 * formatDescription makes descriptions markdown compliant.
 */
function formatDescription (value) {
  // First, remove trailing whitespace on new lines.
  // Second, add new empty line before bullet lists for markdown formatting.
  return value.replace(/^\s+\.*/gm, '').replace(/(?<=^[^*].*\n)(?=\*)/gm, '\n')
}

module.exports = { parse }
