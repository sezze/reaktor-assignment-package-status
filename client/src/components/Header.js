import React from 'react'
import styled from 'styled-components'
import reactorLogo from '../assets/reaktor-black.svg'
import githubLogo from '../assets/github.png'

function Header () {
  return (
    <HeaderDiv>
      <div style={{ display: 'flex', alignItems: 'baseline' }} className='content'>
        <div>
          <Title>Package Status</Title>
          <SubTitle><Logo src={reactorLogo} alt='Reactor' /> pre-assignment</SubTitle>
        </div>
        <div style={{ flexGrow: 1 }} />
        <a href='https://github.com/sezze' title='Source on GitHub'>
          <img width='32' src={githubLogo} alt='Source on GitHub' />
        </a>
      </div>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 0;
  user-select: none;
`

const Logo = styled.img`
  height: 1em;
  display: inline-block;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;
`

const SubTitle = styled.p`
  font-size: 1.25rem;
  margin-left: 0.25rem;
`

export default Header
