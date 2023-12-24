import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@tanstack/react-query'
import customFetch from '../../configs'
import { Button, SendSucessModal } from '..'

const SendVideo = ({ id }) => {
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const [payload, setPayload] = useState({
    email: '',
    id: id,
  })

  const checkValue = () => {
    if (
      !payload.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) &&
      payload.email
    ) {
      setError('Enter Valid Email address')
    } else {
      setError('')
    }
  }

  const {
    mutate: sendEmail,
    isError,
    error: sendError,
    isPending,
    status,
  } = useMutation({
    mutationFn: async (payload) => {
      const { data } = await customFetch.post(`/videos/send`, payload)
      return data
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (error) return
    sendEmail(payload)
  }

  if (isError) {
    setError(sendError)
  }

  useEffect(() => {
    if (status === 'success') {
      setIsOpen(true)
    }
  }, [status])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p className='text-red text-sm leading-8'>{error}</p>
        <div className='flex items-center bg-[#E7E7ED] py-2 pl-4 pr-2 rounded-[10px] w-full mb-10'>
          <div className='w-full'>
            <input
              style={{ background: 'transparent' }}
              type='text'
              placeholder='enter email of receiver'
              className=' placeholder:text-[#43434343] w-full outline-none'
              value={payload.email}
              onChange={(e) =>
                setPayload({ ...payload, email: e.target.value })
              }
              onBlur={checkValue}
            />
          </div>
          <div>
            <Button
              disabled={isPending || !payload.email}
              label='Send'
              className='px-2 py-[10px]'
              type='submit'
              isLoading={isPending}
            />
          </div>
        </div>
      </div>
      <SendSucessModal
        id={id}
        email={payload.email}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </form>
  )
}

SendVideo.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
}

export default SendVideo
