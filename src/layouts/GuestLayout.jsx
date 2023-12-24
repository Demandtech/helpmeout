import { Outlet , useLocation} from 'react-router-dom'
import { GuestHeader } from '../components'

function DashboardLayout() {
  return (
    <section className=' max-w-screen-2xl mx-auto'>
      <GuestHeader />
      <Outlet />
    </section>
  )
}

export default DashboardLayout
