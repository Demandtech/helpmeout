import { Outlet } from 'react-router-dom'
import { DashboardHeader } from '../components'

function DashboardLayout() {
  return (
    <section className='max-w-screen-2xl mx-auto mt-[125px]'>
      <DashboardHeader />
      <Outlet />
    </section>
  )
}

export default DashboardLayout
