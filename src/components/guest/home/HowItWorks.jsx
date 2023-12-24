import recordCard from '../../../assets/images/record-card.png'

const HowItWorks = () => {
  return (
    <div className='py-20 max-w-[90%] lg:max-w-[80%] mx-auto' id='howitworks'>
      <div className='text-center mb-10'>
        <h2 className='text-lg lg:text-4xl font-color-[#141414]  font-bold mb-3'>
          How It Works
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-10'>
        <div className='flex flex-col items-center gap-5'>
          <div className='w-10 h-10 bg-primary rounded-full text-white grid place-content-center'>
            <p className='font-semibold text-xl'>1</p>
          </div>
          <h6 className='font-semibold text-lg text-[#1B233D]'>
            Record Screen
          </h6>
          <p className='text-center text-[#616163]'>
            Click the &quot;Start Recording&quot; button in our extension.
            choose which part of your screen to capture and who you want to send
            it to.
          </p>
          <div>
            <img src={recordCard} alt='Recording Card ' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <div className='w-10 h-10 bg-primary rounded-full text-white grid place-content-center'>
            <p className='font-semibold text-xl'>2</p>
          </div>
          <h6 className='font-semibold text-lg text-[#1B233D]'>
            Share Your Recording
          </h6>
          <p className='text-center text-[#616163]'>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <div>
            <img src={recordCard} alt='Recording Card ' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <div className='w-10 h-10 bg-primary rounded-full text-white grid place-content-center'>
            <p className='font-semibold text-xl'>3</p>
          </div>
          <h6 className='font-semibold text-lg text-[#1B233D]'>
            Learn Effortlessly
          </h6>
          <p className='text-center text-[#616163]'>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <div>
            <img src={recordCard} alt='Recording Card ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
