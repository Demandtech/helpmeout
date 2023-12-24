import { useNavigate, useParams } from 'react-router-dom'
import { Error, VideoReady, Loader, Button } from '../../components'
import { useMutation, useQuery } from '@tanstack/react-query'
import customFetch from '../../configs'
import { useState, useEffect, useMemo } from 'react'
import { EditIcon } from '../../assets/svgs'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const NewVideoPage = () => {
  const { blob_id } = useParams()
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [videoTitle, setVideoTitle] = useState('')
  const [status, setStatus] = useState('proccessing')
  const { isAuthenticated } = useSelector((store) => store.user)
  const navigate = useNavigate()

  const handleStatus = useMemo(() => {
    return () => status !== 'completed'
  }, [status])

  const { data, isLoading, isError } = useQuery({
    queryKey: ['new_video', blob_id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/videos/single/${blob_id}`)
      return data
    },

    refetchInterval: 10000,
    refetchOnWindowFocus: false,
    enabled: handleStatus(),
  })

  const {
    mutate: saveVideo,
    isPending,
    isError: saveIsError,
    error: saveError,
    data: saveData,
  } = useMutation({
    mutationKey: ['save'],
    mutationFn: async (id) => {
      const token = Cookies.get('token')
      if (data && token) {
        const { data } = await customFetch.put(
          `/videos/save/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        return data
      }
    },
  })

  const createAccount = () => {
    navigate('/auth/signup')
    localStorage.setItem(
      'isSavePending',
      JSON.stringify({ pending: true, id: data?.blob_id })
    )
  }

  useEffect(() => {
    saveVideo()
  }, [data])

  useEffect(() => {
    setVideoTitle(data?.title)
    setStatus(data?.status)
  }, [data])

  if (saveIsError) {
    toast.error(saveError?.response.data.detail)
  }

  if (saveData) {
    toast.success(saveData?.message)
  }

  if (isLoading) {
    return (
      <div className='w-full fixed bg-primary top-0 h-full left-0 grid place-content-center'>
        <Loader isLoading={isLoading} />
      </div>
    )
  }

  if (isError) {
    return <Error />
  }

  return (
    <section className='max-w-[1440px] mx-auto'>
      <div className=' w-[90%] lg:w-[80%] mx-auto py-10'>
        <div className='mb-10'>
          <label className='text-light-gray pl-2' htmlFor='name'>
            Name
          </label>
          <div className='w-full bg-red-600 flex items-center gap-4'>
            <input
              onChange={(e) => setVideoTitle(e.target.value)}
              type='email'
              value={videoTitle}
              readOnly={isReadOnly}
              className={`focus:outline-none text-[#413C6D]  text-[16px] w-[250px] h-10 pl-2 border ${
                isReadOnly
                  ? ' border-white'
                  : ' border-[#413C6D] rounded-md  text-[16px]'
              }`}
            />
            <div>
              <button type='button' onClick={() => setIsReadOnly(!isReadOnly)}>
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
        <VideoReady {...data} />
      </div>
      <div className='w-full bg-[#e7e7ed] bg-opacity-20 py-10 mb-10'>
        <div className='max-w-[90%] lg:max-w-[500px] mx-auto text-center flex flex-col items-center gap-8'>
          <h5 className='text-[#141414] font-bold font-sora lg:text-xl'>
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h5>

          <Button
            isLoading={isPending}
            disabled={isPending || !isAuthenticated}
            onClick={() => saveVideo(data?.id)}
            label='Save video'
            className='px-4'
          />

          {!isAuthenticated && (
            <p className='font-bold text-[#7e7e7e]'>
              Don’t have an account?{' '}
              <button
                className='text-primary underline'
                onClick={() => createAccount()}
              >
                Create account{' '}
              </button>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default NewVideoPage
