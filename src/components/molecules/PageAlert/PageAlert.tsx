import React, { FC, useCallback, useEffect, useState } from "react"
import { FaInfo, FaTimes } from "react-icons/fa"
import { PageAlertWrapper } from "./styles"

export const PageAlert: FC<{ children: string }> = ({ children }) => {
  const [showing, setShowing] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowing(false)
    }, 10000)
    return () => {}
  }, [])

  const stopShowing = useCallback(() => {
    setShowing(false)
  }, [])

  return (
    <PageAlertWrapper style={{ display: showing ? "flex" : "none" }}>
      <div>
        <FaInfo />
        <span>{children}</span>
      </div>
      <button onClick={stopShowing}>
        <FaTimes />
      </button>
    </PageAlertWrapper>
  )
}
