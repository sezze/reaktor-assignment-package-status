import React from 'react'
import PackageReferenceList from './PackageReferenceList'
import ReactMarkdown from 'react-markdown'

function PackageOverview ({ pkg: { package: name, depends = [], dependents = [], description = '' }, packages, onPackageSelect }) {
  return (
    <div className='text'>
      <h2>{name}</h2>
      <ReactMarkdown source={description} />

      {/* ---- Dependencies ---- */}
      {depends.length > 0 ? (
        <div>
          <h3>Dependencies</h3>
          <PackageReferenceList packages={depends} allPackages={packages} onPackageSelect={onPackageSelect} />
        </div>
      ) : null}

      {/* ---- Dependants ---- */}
      {dependents.length > 0 ? (
        <div>
          <h3>Dependents</h3>
          <PackageReferenceList packages={dependents} allPackages={packages} onPackageSelect={onPackageSelect} />
        </div>
      ) : null}
    </div>
  )
}

export default PackageOverview
