import { Link } from 'react-router-dom'
import Logo from '../../assets/svgs/Logo'

const AuthHeader = () => {
  return (
    <div className='border-b border-light-border pt-1 md:py-3 pl-5 md:pl-10'>
      <div className=''>
        <Link to='/' className='inline-flex gap-1 items-center'>
          <div>
            <Logo color={'black'} className={'w-7 md:w-10'} />
          </div>
          <p className='font-bold text-sm md:text-base'>HelpMeOut</p>
        </Link>
      </div>
    </div>
  )
}

export default AuthHeader
