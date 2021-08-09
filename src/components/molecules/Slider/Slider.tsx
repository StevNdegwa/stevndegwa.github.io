import React, {
  FC,
  useEffect,
  useCallback,
  useMemo,
  Children,
  cloneElement,
  useState,
  useRef,
  ReactElement,
} from "react"

import { SliderWrapper } from "./styles"

export interface SliderProps {
  slideWidth: number
  children: ReactElement[] | ReactElement
  backwardAction: (action: () => void) => void
  forwardAction: (action: () => void) => void
}

export const Slider: FC<SliderProps> = ({
  slideWidth,
  children,
  backwardAction,
  forwardAction,
}) => {
  const [scroll, setScroll] = useState(0)
  const sliderContainerRef = useRef(null)
  const fullWidth = useMemo(
    () => Children.count(children) * slideWidth,
    [slideWidth]
  )

  const moveToNextSlide = useCallback(() => {
    if (sliderContainerRef.current) {
      if (scroll === fullWidth - slideWidth) {
        ;(sliderContainerRef.current as HTMLDivElement).scrollLeft = -slideWidth
        setScroll(0)
      } else {
        setScroll(scroll => scroll + slideWidth)
      }
    }
  }, [scroll])

  const moveToPreviousSlide = useCallback(() => {
    if (sliderContainerRef.current) {
      if (scroll === 0) {
        ;(sliderContainerRef.current as HTMLDivElement).scrollLeft = fullWidth
        setScroll(fullWidth - slideWidth)
      } else {
        setScroll(scroll => scroll - slideWidth)
      }
    }
  }, [scroll])

  useEffect(() => {
    if (sliderContainerRef.current) {
      ;(sliderContainerRef.current as HTMLDivElement).scrollTo({
        left: scroll,
        behavior: "smooth",
      })
    }
    backwardAction(moveToPreviousSlide)
    forwardAction(moveToNextSlide)
  }, [scroll])

  const elements =
    Children.map(children, (child: ReactElement) => {
      return cloneElement(child, {
        ...child.props,
        className: `slide ${child.props.className || ""}`,
        style: {
          width: `${slideWidth}px`,
          height: "100%",
          margin: "1rem",
          ...child.props.style,
        },
      })
    }) || []

  return (
    <SliderWrapper
      ref={sliderContainerRef}
      style={{ width: `${slideWidth}px` }}
    >
      <div style={{ width: `${slideWidth * elements.length}px` }}>
        {elements}
      </div>
    </SliderWrapper>
  )
}
