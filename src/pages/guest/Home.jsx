import { Hero, Feature, HowItWorks } from '../../components'

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='w-[90%] lg:w-[80%] mx-auto overflow-hidden lg:overflow-visible'>
        <Hero />
      </div>
      <Feature />
      <HowItWorks />
    </div>
  )
}

export default Home
