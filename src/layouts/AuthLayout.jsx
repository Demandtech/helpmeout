import { Outlet, useLocation } from 'react-router-dom'
import { AuthHeader, Social } from '../components'
import PropTypes from 'prop-types'

const AuthLayout = () => {
  const signup = useLocation().pathname.includes('signup')
  const verify = useLocation().pathname.includes('verify')

  return (
    <div className=' max-w-screen-2xl mx-auto'>
      <AuthHeader />
      <section className='pt-5 md:pt-10 pb-20'>
        <div className='max-w-[500px] mx-auto px-5'>
          <div className='mb-10'>
            <div className='text-center max-w-xs mx-auto mb-7'>
              <h3 className='text-2xl font-semibold font-inter mb-3'>
                {signup ? 'Sign Up' : verify ? 'Verify Account' : 'Log In'}
              </h3>
              <p className='text-[#434343] text-sm'>
                {signup
                  ? 'Join millions of others in sharing successful moves on HelpMeOut.'
                  : verify
                  ? ''
                  : 'Welcome back!'}
              </p>
            </div>
            {!verify && <Social />}
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  )
}
AuthLayout.propTypes = {
  pageTitle: PropTypes.string,
  subTitle: PropTypes.string,
}
export default AuthLayout
