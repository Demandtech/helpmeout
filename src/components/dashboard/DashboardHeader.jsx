import { Link } from 'react-router-dom'
import Logo from '../../assets/svgs/Logo'
import UserDropdown from './UserDropdown'
// import AuthUserDropdown from '../components/auth/AuthUserDropdown.jsx'

const DashboardHeader = () => {
  return (
    <header className='fixed right-0 left-0 z-50 bg-white top-0 '>
      <div className='border-t border-dark/10 mt-10'>
        <div className='flex items-center justify-between max-w-[90%] mx-auto'>
          <Link to='/' className='flex items-center gap-1 py-5'>
            <Logo color={'black'} className='w-7 md:w-10' />
            <p className='font-bold text-sm md:text-base'>
              HelpMeOut
            </p>
          </Link>
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
