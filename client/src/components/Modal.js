import React from 'react'
import styled, { keyframes } from 'styled-components'

function Modal ({ children, visible, onClose }) {
  if (visible) {
    return (
      <OverlayDiv onClick={onClose}>
        <ModalDiv onClick={e => e.stopPropagation()}>
          {children}
        </ModalDiv>
      </OverlayDiv>
    )
  } else {
    return null
  }
}

const FadeIn = keyframes`
  from {
    clip-path: circle(0 at center);
  }
  to {
    clip-path: circle(100% at center);
  }
`

const OverlayDiv = styled.div`
  background-color: #0002;
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 0.3s ease-in both;
`

const ModalDiv = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  max-width: 100%;
  width: calc(400px + 20%);
  box-shadow: 0 20px 80px #0004;
  max-height: calc(100% - 64px);
  box-sizing: border-box;
  overflow-y: auto;
`

export default Modal
