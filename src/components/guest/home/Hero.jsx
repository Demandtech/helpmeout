import heroimg1 from '../../../assets/images/hero-img-one.png'
import heroimg2 from '../../../assets/images/hero-img-two.png'
import heroimg3 from '../../../assets/images/hero-img-three.png'
import { HeroBackground } from '../../../assets/svgs'

const Hero = () => {
  return (
    <section className='lg:h-[calc(100vh-88px)] 2xl:h-[700px] flex items-center'>
      <div className='lg:flex items-center gap-10 pt-10 pb-20'>
        <div className='lg:flex-1 mb-20 lg:mb-0'>
          <h1 className='font-bold font-sora text-2xl lg:text-6xl mb-5'>
            Show Them
            <br />
            Don’t Just Tell
          </h1>
          <p className=' opacity-70 lg:text-lg mb-10'>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <a href='#' className='bg-primary rounded-md text-white py-3 px-5'>
            Install HelpMeOut &#8594;
          </a>
        </div>
        <div className='lg:flex-1 '>
          <div className='flex w-full h-[400px] gap-2 relative flex-col lg:flex-row'>
            <div className='-top-[50px] -right-14 absolute'>
              <HeroBackground />
            </div>
            <div className='-bottom-[50px] -left-10 absolute'>
              <HeroBackground />
            </div>
            <div className='z-50 flex-1 h-full flex flex-col gap-2'>
              <div className='h-1/2 w-full rounded-md overflow-hidden z-50 bg-white'>
                <img
                  src={heroimg2}
                  alt=''
                  height='100%'
                  width={'100%'}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className='h-1/2 w-full rounded-md overflow-hidden'>
                <img
                  src={heroimg3}
                  alt=''
                  width={'100%'}
                  height='100%'
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='flex-1 h-full rounded-md overflow-hidden z-50'>
              <img
                src={heroimg1}
                alt=''
                height={'100%'}
                width={'100%'}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
