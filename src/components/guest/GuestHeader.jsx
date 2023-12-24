import { useLocation, Link } from 'react-router-dom'
import Logo from '../../assets/svgs/Logo'
import { useSelector } from 'react-redux'


const Header = () => {
  const location = useLocation()
  const path = location.pathname
  const { isAuthenticated } = useSelector((store) => store.user)

  if (!path.includes('/auth') && !path.includes('/file')) {
    return (
      <nav className='lg:block max-w-[1440px] mx-auto text-primary font-sora bg-white z-50'>
        <div className='py-6 flex justify-between items-center lg:max-w-[80%] max-w-[90%] mx-auto'>
          <div className='flex items-center gap-1'>
            <Logo color={'black'} className='w-7 md:w-10' />
            <p className='font-bold'>HelpMeOut</p>
          </div>
          <ul className='hidden lg:flex gap-10 text-black'>
            <li>
              <a href='#features'>Features</a>
            </li>
            <li>
              <a href='#howitworks'>How it works </a>
            </li>
          </ul>
          <div className='bg-white'>
            {isAuthenticated ? (
              <Link to='/dashboard' className='font-semibold text-sm'>
                View videos
              </Link>
            ) : (
              <Link to='/auth/signup' className='font-semibold text-sm'>
                Get Started
              </Link>
            )}
          </div>
        </div>
      </nav>
    )
  }
  return null
}

export default Header
