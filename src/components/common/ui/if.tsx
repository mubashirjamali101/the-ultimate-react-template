interface IfProps {
  condition: boolean | (() => boolean)
  children: React.ReactNode
}

export const IF = ({ condition, children }: IfProps) => {
  if (typeof condition === 'function' && condition()) {
    return children
  }

  if (condition) {
    return children
  }

  return null
}
