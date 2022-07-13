import React, { useState } from 'react'

interface UseSingleOrDoubleClickParameter {
  singleClick: React.MouseEventHandler
  doubleClick: React.MouseEventHandler
}

export const useSingleOrDoubleClick = ({
  singleClick,
  doubleClick,
}: UseSingleOrDoubleClickParameter) => {
  const [clickCount, setClickCount] = useState(0)

  const handleOnSingleOrDoubleClick: React.MouseEventHandler = (event) => {
    setClickCount(clickCount + 1)

    if (clickCount < 2) {
      setTimeout(() => {
        if (clickCount > 1) {
          singleClick(event)
        } else {
          doubleClick(event)
        }
        setClickCount(0)
      }, 100)
    }
  }

  return { handleOnSingleOrDoubleClick }
}
