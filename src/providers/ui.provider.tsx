import { MantineProvider } from '@mantine/core'

export const UIProvider = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider>{children}</MantineProvider>
)
