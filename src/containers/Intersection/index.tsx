import { useCallback, useRef, Children, cloneElement } from "react"
import { useInView } from "react-intersection-observer"

const mutationChildren = (children: any, props: any) =>
  Children.map(children, (child) =>
    cloneElement(child, { ...child.props, ...props }, child.props.children)
  )

const Intersection: React.FC = ({ children }) => {
  const ref = useRef()
  const [inViewRef, inView] = useInView()

  const setRefs = useCallback(
    (node) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  return mutationChildren(children, { ref: setRefs, dataView: inView })
}

export default Intersection
