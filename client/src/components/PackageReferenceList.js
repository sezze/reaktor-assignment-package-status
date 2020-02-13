import React from 'react'
import styled from 'styled-components'

function PackageReferenceList ({ packages = [], allPackages = [], onPackageSelect }) {
  const packageNames = allPackages.map(v => v.package)

  return (
    <div>
      {/* Loop through packages */}
      {packages.map((group, i) => (
        <span key={i}>
          {i > 0 ? ', ' : null}
          {/* Loop through package alternatives (eg. debconf | cdebconf) */}
          {group.map((name, j) => {
            const listIndex = packageNames.indexOf(name)
            return (
              <span key={j}>
                {j > 0 ? ' or ' : null}
                <Link
                  onClick={() => { if (listIndex > -1) onPackageSelect(allPackages[listIndex]) }}
                  className={`link ${listIndex > -1 ? '' : 'disabled'}`}
                >{name}
                </Link>
              </span>
            )
          })}
        </span>
      ))}
    </div>
  )
}

const Link = styled.span`
  display: inline-block;
`

export default PackageReferenceList
