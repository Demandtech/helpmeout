import { useState, useRef, useEffect } from 'react'
import { Button, VerificationSuccess } from '../../components'
import { useMutation } from '@tanstack/react-query'
import customFetch from '../../configs'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSuccessModal } from '../../redux/slices/userSlice'

const VerifyPage = () => {
  // const navigate = useNavigate()
  const { successModal } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [otpCode, setOtpCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
  })

  const inputRefs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
    fifth: useRef(null),
  }
  const handleChnage = (e) => {
    const name = e.target.name
    let value = e.target.value

    value = value.replace(/\D/g, '')

    setOtpCode((prev) => {
      const updatedOtp = { ...prev, [name]: value }
      if (value.length === 1) {
        const nextKey = getNextKey(name)

        if (nextKey) {
          inputRefs[nextKey]?.current?.focus()
        }
      }
      return updatedOtp
    })
  }

  const getNextKey = (currentKey) => {
    const keys = Object.keys(otpCode)
    const currentIndex = keys.indexOf(currentKey)

    return currentIndex < keys.length - 1 ? keys[currentIndex + 1] : null
  }

  const {
    mutate: verifyUser,
    isError,
    isPending,
    status,
  } = useMutation({
    mutationFn: async (payload) => {
      const { data } = await customFetch.post('users/verify', payload)

      return data
    },
  })

  const disabledButton =
    otpCode.first === '' ||
    otpCode.second === '' ||
    otpCode.third === '' ||
    otpCode.fourth === '' ||
    otpCode.fifth === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    const otpStr = `${otpCode.first}${otpCode.second}${otpCode.third}${otpCode.fourth}${otpCode.fifth}`

    const payload = {
      otp_code: otpStr,
      user_id: JSON.parse(localStorage.getItem('user')).id,
    }

    if (!disabledButton && payload) {
      verifyUser(payload)
    }
  }

  useEffect(() => {
    if (status === 'success') {
      dispatch(toggleSuccessModal(true))
    }
  }, [status, dispatch])

  return (
    <div>
      <form className=' max-w-[310px] mx-auto '>
        <div className='flex gap-2 mb-2'>
          {Object.keys(otpCode).map((key, index) => {
            return (
              <div key={index}>
                <input
                  maxLength={1}
                  ref={inputRefs[key]}
                  onChange={handleChnage}
                  name={key}
                  type='text'
                  value={otpCode[key]}
                  className='border-2 border-[#626262] rounded-md w-full focus:bg-primary/10 focus:outline-2 outline-primary transition-all duration-150 text-center text-bold text-lg h-14 text-primary'
                />
              </div>
            )
          })}
        </div>
        <p className='text-red text-xs'>{isError ? 'Wrong code' : ''}</p>
        <Button
          className='w-full text-xl uppercase font-semibold mt-8'
          label='Confirm'
          type='submit'
          disabled={disabledButton}
          onClick={handleSubmit}
          isLoading={isPending}
        />
      </form>
      <VerificationSuccess
        isOpen={successModal}
        setIsOpen={() => dispatch(toggleSuccessModal(!successModal))}
      />
    </div>
  )
}

export default VerifyPage
