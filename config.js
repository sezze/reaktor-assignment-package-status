module.exports = {

  // General ------------------------------------------------------------------

  statusPath: process.env.STATUS_PATH || 'status',

  // Parsing ------------------------------------------------------------------

  parsing: {
    // Matches multiple empty lines that are followed by a non empty line
    // to separate packages.
    packageSeparator: /\n{2,}(?=\S)/,
    // Matches package fields by finding formatted key value pairs.
    fieldSeparator: /\n(?=\w)/,
    // Matches with the divider in key-value pairs in package fields.
    fieldEntrySeparator: /(?<=^\S+):\s/,

    include: ['package', 'description', 'depends']
  },

  // Server -------------------------------------------------------------------

  server: {
    // If you modify the port, make sure to also modify the proxy port in the
    // client's package.json file.
    apiPort: process.env.PORT || 8816
  }
}
