import Modal from '../reusable/Modal'
import sendsuccessimg from '../../assets/images/send-success.gif'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../reusable/Button'
import { useMutation } from '@tanstack/react-query'
import customFetch from '../../configs'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const SuccessModal = ({ isOpen, setIsOpen, email, id }) => {
  const { isAuthenticated } = useSelector((store) => store.user)
  const {
    mutate: saveVideo,
    isPending,
    error,
    isError,
    data,
  } = useMutation({
    mutationKey: ['save'],
    mutationFn: async (id) => {
      const token = Cookies.get('token')
      if (token) {
        const { status, data } = await customFetch.put(
          `/videos/save/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        console.log(status)
        return data
      }
    },
  })

  if (isError) {
    toast.error(error?.response.data.detail)
  }

  if (data) {
    toast.success(data?.message)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='flex justify-center flex-col items-center font-work-sans text-center'>
        <img src={sendsuccessimg} alt='sent success' />

        <p className='text-[#08051E] font-normal  lg:text-xl'>
          Your video link has been sent <br /> to{' '}
          <span className='text-primary font-medium'>{email}</span>
        </p>

        <div className='mt-10 mb-5 text-center'>
          <p className='text-[#141414] font-normal  lg:text-lg'>
            Would you need to view this video later?{' '}
            <br className='hidden lg:block' /> Save to your account now!
          </p>
        </div>

        <Button
          onClick={() => saveVideo(id)}
          isLoading={isPending}
          disabled={isPending || !isAuthenticated}
          type='button'
          label='Save video'
          className='px-4'
        />

        {!isAuthenticated && (
          <p className='mt-5 pb-10'>
            Don’t have an account?{' '}
            <Link to='/auth/signup' className='text-primary font-semibold'>
              Create account
            </Link>{' '}
          </p>
        )}
      </div>
    </Modal>
  )
}

SuccessModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  email: PropTypes.string,
  id: PropTypes.number,
}

export default SuccessModal
