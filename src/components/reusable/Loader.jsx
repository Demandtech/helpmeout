import { Oval } from 'react-loader-spinner'

function Loader({ isLoading}) {
  return (
    <Oval
      wrapperClass='w-full flex justify-center items-center'
      width={80}
      height={80}
      color='#120B48'
      secondaryColor='#121B48'
      strokeWidth={2}
      strokeWidthSecondary={4}
      visible={isLoading}
      
    />
  )
}
export default Loader
