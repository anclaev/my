import React, { useCallback, useRef, Children, cloneElement } from "react"
import { useInView } from "react-intersection-observer"

const mutationChildren = (children: any, props: any) =>
  Children.map(children, (child, key) => {
    let childrens = Children.toArray(child.props.children)
    childrens.push(<a ref={props.ref} key={key}></a>)

    return cloneElement(
      child,
      { ...child.props, className: props.className },
      childrens
    )
  })

const Intersection: React.FC = ({ children }) => {
  const ref = useRef()
  const [inViewRef, inView] = useInView({
    rootMargin: "1000px 0px 1000px 0px",
  })

  const setRefs = useCallback(
    (node) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  return mutationChildren(children, {
    ref: setRefs,
    className: inView && "focus",
  })
}

export default Intersection
