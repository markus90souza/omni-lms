import { FC, ReactNode } from 'react'
import { Sidebar } from './components/sidebar'

type DashboardLayoutProps = {
  children: ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex ">
        <Sidebar />
      </div>

      <main className="h-full md:pl-56">{children}</main>
    </div>
  )
}

export default DashboardLayout
