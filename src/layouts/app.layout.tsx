import { Box, Flex } from '@mantine/core'
import { Sidebar } from '../components/views/common/sidebar'
import { Protected } from '../components/common/ui/protected'
import { Redirect } from '../components/common/ui/redirect'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Protected
      role={'any'}
      fallback={<Redirect to='/signup' />}
    >
      <Flex style={{ height: '100vh' }}>
        <Sidebar />
        <Box>{children}</Box>
      </Flex>
    </Protected>
  )
}
