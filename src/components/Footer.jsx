import Logo from '../assets/svgs/Logo'

const Footer = () => {
  return (
    <footer className='bg-primary font-sora max-w-[1440px] mx-auto'>
      <div className='lg:max-w-[80%] max-w-[90%] mx-auto  text-white flex justify-between flex-col lg:flex-row py-24 gap-10 items-start'>
        <div className='flex items-center gap-2 flex-1'>
          <Logo color={'white'} />
          <span className='font-bold '>HelpMeOut</span>
        </div>
        <ul className='flex-1 flex flex-col gap-5'>
          <li className='leading-[20px] font-[600]'>Menu</li>
          <li className='leading-[18px] font-[300]'>Home</li>
          <li className='leading-[18px] font-[300]'>Converter</li>
          <li className='leading-[18px] font-[300]'>How it works</li>
        </ul>
        <ul className='flex-1 flex flex-col gap-5'>
          <li className='leading-[20px] font-[600]'>About us</li>
          <li className='leading-[18px] font-[300]'>About</li>
          <li className='leading-[18px] font-[300]'>Contact Us</li>
          <li className='leading-[18px] font-[300]'>Privacy Policy</li>
        </ul>
        <ul className='flex-1 flex flex-col gap-5'>
          <li className='leading-[20px] font-[600]'>Screen Recording</li>
          <li className='leading-[18px] font-[300]'>Browser Window</li>
          <li className='leading-[18px] font-[300]'>Desktop</li>
          <li className='leading-[18px] font-[300]'>Application</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
