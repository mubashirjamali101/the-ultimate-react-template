import { Flex, Text } from '@mantine/core'
import { LinkOptions, useNavigate } from '@tanstack/react-router'

interface RedirectProps {
  to: LinkOptions['to']
  message?: string
}

export const Redirect = ({ to, message = 'Login' }: RedirectProps) => {
  const navigate = useNavigate()

  setTimeout(() => navigate({ to }), 1000)

  return (
    <Flex
      style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}
      justify={'center'}
      align={'center'}
    >
      <Text>Redirecting to {message}</Text>
    </Flex>
  )
}
