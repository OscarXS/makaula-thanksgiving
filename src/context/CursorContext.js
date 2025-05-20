import React, { useState, useEffect, createContext } from 'react';

// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  });

  // cursor bg state
  const [cursorBG, setCursorBG] = useState('default')

  const mobileViewportIsActive = window.innerWidth < 780;
  
  useEffect(()=> {
    if(!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY
        })
      }
      window.addEventListener('mousemove', move);
        //  remove event
        return () => {
          window.removeEventListener('mousemove', move)
        }
    } else {
      setCursorBG('none')
    }
  }, [mobileViewportIsActive]);

  // cursor Variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112'
    },
    text: {
      width: '100px',
      height: '100px',
      x: cursorPos.x - 50,
      y: cursorPos.y - 50,
      backgroundColor: '#fff',
      mixBlendMode: 'difference'
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255, 0)'
    }
  }

  // mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBG('text')
  }

  // mouse leave handler
  const mouseLeaveHandler = () => {
    setCursorBG('default')
  }

  return <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
    { children }
  </CursorContext.Provider>;
};

export default CursorProvider;
