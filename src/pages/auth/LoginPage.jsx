import { useEffect, useState } from 'react'
import { Input, Button } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/thunks/userThunk'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  email: '',
  password: '',
}
const LoginPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('login_data')
    return storedData ? JSON.parse(storedData) : initialState
  })

  const dispatch = useDispatch()
  const { isLoading, isAuthenticated } = useSelector((store) => store.user)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const disabled = formData.email === '' || formData.password === ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (disabled) return
    const form = new FormData()
    form.append('username', formData.email)
    form.append('password', formData.password)

    const isSuccess = await dispatch(loginUser(form))

    if (isSuccess?.payload === true) {
      const pending = JSON.parse(localStorage.getItem('isSavePending'))
      if (!pending) {
        navigate('/dashboard')
      } else {
        navigate(`/new_video/${pending.id}`)
      }

      localStorage.removeItem('isSavePending')
    }
  }

  useEffect(() => {
    localStorage.setItem('login_data', JSON.stringify(formData))
  }, [formData])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  return (
    <section>
      <form>
        <Input
          name='email'
          type='text'
          placeholder='Enter email address'
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name='password'
          type='password'
          placeholder={'Enter your password'}
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          label='Login'
          className='w-full'
          type='submit'
          onClick={handleSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </form>
      <div className='mt-5 flex flex-col gap-2 justify-between text-sm md:flex-row'>
        <p>Forgot password?</p>
        <p className=''>
          New to helpmeout?{' '}
          <Link className='font-semibold text-primary' to={'/auth/signup'}>
            Signup here
          </Link>
        </p>
      </div>
    </section>
  )
}

export default LoginPage
