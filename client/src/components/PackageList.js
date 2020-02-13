
import React from 'react'
import styled, { keyframes } from 'styled-components'

function User ({ packages, onActivePackageChange }) {
  return (
    <div>
      {
        packages.map((pkg, i) => {
          return (
            <ListItemDiv
              onClick={() => onActivePackageChange(pkg)}
              key={i}
              style={{ animationDelay: `${Math.min(Math.sqrt(i + 1) / 5, 1)}s` }}
            >
              <div>
                {pkg.package}
              </div>
              <Description>
                {pkg.description}
              </Description>
            </ListItemDiv>
          )
        })
      }
    </div>
  )
}

const slideIn = keyframes`
  from {
    transform: translate(-8px, 0);
    opacity: 0;
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`

const ListItemDiv = styled.div`
  animation: ${slideIn} 0.2s ease-out both;
  transition-duration: 0.1s;
  padding: 0.25rem 0.5rem;
  position: relative;
  bottom: 0;
  border-radius: 3px;
  user-select: none;
  display: flex;

  >div {
    min-width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:last-child {
      @media (max-width: 768px) {
        display: none;
        width: 60%;
      }
    }
  }

  &:hover {
    box-shadow: 0 2px 8px #0005, inset 0 0 0 #0005;
    bottom: 1px;
    >div {
      color: black;
    }
  }

  &:active {
    box-shadow: 0 0 0 #0005, inset 0 1px 2px #0005;
    bottom: 0;
  }
`

const Description = styled.div`
  color: lightgray;
  transition-duration: 0.05s;
`

export default User
