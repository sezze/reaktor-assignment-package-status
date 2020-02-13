import React, { useState, useEffect } from 'react'
import './App.scss'
import styled from 'styled-components'
import Header from './components/Header'
import PackageList from './components/PackageList'
import Modal from './components/Modal'
import PackageOverview from './components/PackageOverview'

function App () {
  const [packages, setPackages] = useState([])
  const [activePackage, setActivePackage] = useState(null)

  useEffect(() => {
    (async function () {
      setPackages(await (
        await window.fetch('/status')
      ).json())
    })()
  }, [])

  return (
    <div>
      <Header />
      <AppContent className='content'>
        <hr />
        <h3 style={{ marginBottom: '0.5rem' }}>
          {packages.length > 0 ? `${packages.length} packages` : 'Loading...'}
        </h3>
        <PackageList onActivePackageChange={setActivePackage} packages={packages} />
      </AppContent>
      <Modal visible={activePackage} onClose={() => setActivePackage(null)}>
        <PackageOverview pkg={activePackage} packages={packages} onPackageSelect={setActivePackage} />
      </Modal>
    </div>
  )
}

const AppContent = styled.div`
  transition-duration: 1s;
`

export default App
