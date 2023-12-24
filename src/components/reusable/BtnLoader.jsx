import { Oval } from 'react-loader-spinner'

const BtnLoader = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <Oval strokeWidth={3} width={15} height={15} color='white' />
      <span>Loading...</span>
    </div>
  )
}

export default BtnLoader
