import React, { FC, useCallback, useEffect, useState } from "react"
import { FaInfo, FaTimes } from "react-icons/fa"
import { PageAlertWrapper } from "./styles"

export const PageAlert: FC<{ children: string }> = ({ children }) => {
  const [showing, setShowing] = useState(true)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowing(false)
    }, 10000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const stopShowing = useCallback(() => {
    setShowing(false)
  }, [])

  return (
    <PageAlertWrapper
      role="alert"
      style={{ display: showing ? "flex" : "none" }}
    >
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
