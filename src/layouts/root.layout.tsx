import { ReactQueryProvider } from '../providers/react-query.provider'
import { UIProvider } from '../providers/ui.provider'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UIProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </UIProvider>
    </>
  )
}
