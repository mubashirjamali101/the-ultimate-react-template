import { Box, Button, Card, Flex, Text } from '@mantine/core'
import { AuthLayout } from '../layouts/auth.layout'
import { useStore } from '../store/store'
import { UserRole } from '../types/auth'

export const SignUpPage = () => {
  const { setAuthUser } = useStore()

  const login = () => {
    setAuthUser(
      { id: '1', role: UserRole.User, firstName: 'John', lastName: 'Doe' },
      'token'
    )
  }

  return (
    <AuthLayout>
      <Card>
        <Flex
          direction={'column'}
          gap={'md'}
        >
          <Box>
            <Text>Sign Up</Text>
          </Box>

          <Button onClick={login}>Sign Up</Button>
        </Flex>
      </Card>
    </AuthLayout>
  )
}
