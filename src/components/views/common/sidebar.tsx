// TanStack
import {
  Link,
  LinkOptions,
  useNavigate,
  useRouterState,
} from '@tanstack/react-router'

// Mantine
import { Box, Button, Card, Divider, Flex, Text } from '@mantine/core'

// App State Store
import { useStore } from '../../../store/store'

export const Sidebar = () => {
  const navigate = useNavigate()
  const routerState = useRouterState()
  const activeRoute = routerState.location.pathname

  const { accessToken, user, clearAuthUser } = useStore()
  const isAuthenticated = accessToken && user

  return (
    <Card
      shadow='xl'
      style={{
        borderRadius: '0',
      }}
      withBorder
    >
      <Flex
        justify={'space-between'}
        direction={'column'}
        style={{
          height: '100vh',
          padding: '1rem',
          minWidth: '200px',
        }}
      >
        {/* Logo and Name */}
        <Box>
          <Box
            style={{
              padding: '.5rem 1rem',
              borderRadius: '9px',
              width: '100%',
            }}
          >
            <Text c={'dark.8'}>App Name</Text>
          </Box>

          <Divider
            w={'100%'}
            my='md'
          />

          {/* Tabs */}
          <Flex
            direction={'column'}
            style={{ width: '100%' }}
            gap={'md'}
            justify={'start'}
            align={'start'}
          >
            <SidebarTab
              to='/'
              label='Home'
              active={activeRoute === '/'}
            />
            <SidebarTab
              to='/profile'
              label='Profile'
              active={activeRoute === '/profile'}
            />
            <SidebarTab
              to='/settings'
              label='Settings'
              active={activeRoute === '/settings'}
            />
          </Flex>
        </Box>

        <Button
          style={{ marginBottom: '1rem' }}
          onClick={() => {
            if (isAuthenticated) {
              clearAuthUser()
            } else {
              navigate({ to: '/signup' })
            }
          }}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </Flex>
    </Card>
  )
}

interface SidebarTabProps {
  to: LinkOptions['to']
  label: string
  active: boolean
}

const SidebarTab = ({ to, label, active }: SidebarTabProps) => {
  return (
    <Link
      to={to}
      style={{ width: '100%' }}
    >
      <Button
        variant={active ? 'filled' : 'outline'}
        fullWidth
      >
        <Text>{label}</Text>
      </Button>
    </Link>
  )
}
