import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Footer } from './components'
import {
  NewVideoPage,
  HomePage,
  LoginPage,
  SignupPage,
  SingleVideoPage,
  UserVideosPage,
  VerifyPage,
} from './pages'
import { AuthLayout, DashboardLayout, GuestLayout } from './layouts'
import { getUser } from './redux/thunks/userThunk'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((store) => store.user)

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      dispatch(getUser(token))
    }
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<GuestLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<NewVideoPage />} path='new_video/:blob_id' />
        </Route>
        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='verify' element={<VerifyPage />} />
        </Route>

        <Route
          path='dashboard'
          element={
            isAuthenticated ? <DashboardLayout /> : <Navigate to='/auth' />
          }
        >
          <Route element={<UserVideosPage />} index />
          <Route element={<SingleVideoPage />} path='videos/:id' />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
