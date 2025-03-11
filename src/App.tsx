import { RouterProvider, createRouter } from '@tanstack/react-router'
import { RootLayout } from './layouts/root.layout'

import '@mantine/core/styles.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  )
}

export default App
