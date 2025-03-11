import { JSX } from 'react'
import { useStore } from '../../../store/store'
import { UserRole } from '../../../types/auth'

interface ProtectedProps {
  /**
   * Content to display if user is logged in and with given role
   */
  children: React.ReactNode

  /**
   * Fallback content to display if user is not logged in
   */
  fallback: React.ReactNode

  /**
   * Role to check for
   */
  role: UserRole | UserRole[] | 'any'
}

/**
 * Displays content/children only if user is logged in and with
 * given role
 *
 * @param {ProtectedProps} props
 * @returns {JSX.Element}
 */
export const Protected = ({
  children,
  fallback,
  role,
}: ProtectedProps): JSX.Element => {
  const { user } = useStore()

  if (!user) {
    return <>{fallback}</>
  }

  if (role === 'any') {
    return <>{children}</>
  }

  if (user.role == role) return <>{children}</>

  if (Array.isArray(role) && role.includes(user.role)) {
    return <>{children}</>
  }

  return <>{fallback}</>
}
