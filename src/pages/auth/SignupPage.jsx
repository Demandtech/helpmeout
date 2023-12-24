import { useEffect, useState } from 'react'
import { Button, Input, RegisterSuccess } from '../../components'
import { Link } from 'react-router-dom'
import { signupUser } from '../../redux/thunks/userThunk'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSuccessModal } from '../../redux/slices/userSlice'

const initialState = { email: '', first_name: '', last_name: '', password: '' }
function SignupPage() {
  const dispatch = useDispatch()
  const { isLoading, successModal } = useSelector((store) => store.user)

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('signup_data')
    return storedData ? JSON.parse(storedData) : initialState
  })

  const disabled =
    !data.password || !data.first_name || !data.last_name || !data.email

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (disabled) return
    dispatch(signupUser(data))
  }

  useEffect(() => {
    localStorage.setItem('signup_data', JSON.stringify(data))
  }, [data])

  return (
    <section>
      <form>
        <Input
          name='email'
          label='Email'
          placeholder='Enter email address'
          value={data.email}
          onChange={handleChange}
          type='text'
        />
        <Input
          name='first_name'
          label='First Name'
          placeholder='Enter first name'
          value={data.first_name}
          onChange={handleChange}
          type='text'
        />
        <Input
          name='last_name'
          label='Last Name'
          placeholder='Enter last name'
          value={data.last_name}
          onChange={handleChange}
          type='text'
        />
        <Input
          name='password'
          label='Password'
          placeholder='Enter password'
          value={data.password}
          onChange={handleChange}
          type='password'
        />
        <Button
          disabled={disabled}
          label='Create Account'
          type='submit'
          onClick={handleSubmit}
          className='w-full'
          isLoading={isLoading}
        />
      </form>
      <div className='mt-5 flex flex-col gap-2 justify-between text-sm md:flex-row'>
        <p>Forgot password?</p>
        <p className=''>
          Already have an account?{' '}
          <Link className='font-semibold text-primary' to={'/auth'}>
            Sign In
          </Link>
        </p>
      </div>
      <RegisterSuccess
        isOpen={successModal}
        setIsOpen={() => dispatch(toggleSuccessModal(!successModal))}
      />
    </section>
  )
}

export default SignupPage
