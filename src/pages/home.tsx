import { ReactQueryDemoView } from '../components/views/react-query-demo.view'
import { AppLayout } from '../layouts/app.layout'

export const HomePage = () => {
  return (
    <AppLayout>
      <ReactQueryDemoView />
    </AppLayout>
  )
}
