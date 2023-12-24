import { SendIcon, RecordIcon, RevisitIcon } from '../../../assets/svgs'
import videoRepo from '../../../assets/images/video-repo.png'

const Features = () => {
  return (
    <section
      id='features'
      className='bg-[#f4f6f8] flex justify-stretch py-11'
    >
      <div className='h-[90%] w-full bg-white'>
        <div className='max-w-[90%] py-20 lg:max-w-[80%] mx-auto'>
          <div className='text-center mb-10'>
            <h2 className='text-lg lg:text-4xl font-color-[#141414]  font-bold mb-3'>
              Features
            </h2>
            <p className='text-[#616163]'>Key Highlights of Our Extension</p>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-10'>
            <div className='flex-1'>
              <div className='flex gap-3 items-start mb-10'>
                <div>
                  <div className='bg-primary rounded-full grid place-content-center p-2  '>
                    <RecordIcon />
                  </div>
                </div>
                <div>
                  <h5 className='font-semibold text-lg lg:text-2lx mb-1'>
                    Simple Screen Recording
                  </h5>
                  <p className='text-[#616163] font-light'>
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>
              <div className='flex gap-3 items-start mb-10'>
                <div className='bg-primary rounded-full grid place-content-center p-2'>
                  <SendIcon />
                </div>
                <div>
                  <h5 className='font-semibold text-lg lg:text-2lx mb-1'>
                    Easy-to-Share URL
                  </h5>
                  <p className='text-[#616163] font-light'>
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>
              <div className='flex gap-3 items-start'>
                <div className='bg-primary rounded-full grid place-content-center p-2'>
                  <RevisitIcon />
                </div>
                <div>
                  <h5 className='font-semibold text-lg lg:text-2lx mb-1'>
                    Revisit Recordings
                  </h5>
                  <p className='text-[#616163] font-light'>
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <img
                width={'100%'}
                height='auto'
                src={videoRepo}
                alt='Video Repository'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
