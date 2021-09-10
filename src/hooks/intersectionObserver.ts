import { CSSProperties } from "react";

export function elementInView(
  callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  root?: HTMLElement
) {
  let observer = null;

  if (window.IntersectionObserver) {
    //Intersection observer API
    observer = new IntersectionObserver(
      ([entry], observer) => {
        callback(entry, observer);
      },
      {
        root: root,
        rootMargin: "0px",
        threshold: 1
      });
  }

  return observer;
}

export function styleElementInView(
  style: CSSProperties,
  root?: HTMLElement
) {
  return elementInView((entry) => {
    for (let property in style) {
      (entry.target as HTMLElement).style[property] = style[property];
    }
  }, root)
}