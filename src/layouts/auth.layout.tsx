import { Center } from '@mantine/core'

import { Redirect } from '../components/common/ui/redirect'
import { useStore } from '../store/store'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, accessToken } = useStore()

  if (user && accessToken) {
    return (
      <Redirect
        to='/'
        message='Dashboard'
      />
    )
  }

  return (
    <Center
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Center>
  )
}
