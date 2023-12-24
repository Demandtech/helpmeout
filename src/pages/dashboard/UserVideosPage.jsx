import { SearchVideo, UserVideoList, Loader } from '../../components'
import { useQuery } from '@tanstack/react-query'
import customFetch from '../../configs'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserVideosPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialLimit = Number(queryParams.get('limit')) || 4
  const initialSearch = queryParams.get('search') || ''
  const [limit, setLimit] = useState(initialLimit)
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const { user } = useSelector((store) => store.user)

  const { data, isLoading } = useQuery({
    queryKey: ['new_video', limit, searchQuery],
    queryFn: async () => {
      const token = Cookies.get('token')
      let data

      try {
        const response = await customFetch.get(
          `/videos?limit=${encodeURIComponent(
            limit
          )}&search=${encodeURIComponent(searchQuery)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        data = response.data
      } catch (error) {
        console.log(error)
      }

      return data
    },
  })

  const handleLimit = () => {
    if (data?.videos.length < data.total_video) {
      setLimit((prev) => prev + 2)
    }

    return
  }

  const updateUrl = () => {
    const newParams = new URLSearchParams()
    newParams.set('limit', limit.toString())
    newParams.set('search', searchQuery)
    navigate(`/dashboard?${newParams.toString()}`)
  }

  useEffect(() => {
    updateUrl()
  }, [limit])

  useEffect(() => {
    updateUrl()
  }, [searchQuery])

  return (
    <section className='pb-10'>
      <div className=' mt-10 border-b border-primary/10 py-10'>
        <div className='w-[90%] mx-auto flex flex-col lg:flex-row lg:items-center gap-5'>
          <div className='font-sora'>
            <h3 className='font-bold text-lg lg:text-3xl mb-2'>
              Hello, {user?.first_name} {user?.last_name}
            </h3>
            <p className='text-dark opacity-70 text-sm lg:text-base'>
              Here are your recorded videos
            </p>
          </div>
          <SearchVideo value={searchQuery} setValue={setSearchQuery} />
        </div>
      </div>
      <div className='pt-8 max-w-[90%] mx-auto'>
        <h3 className='text-[rgba(20, 20, 20, 0.80)] font-medium font-work-sans text-lg mb-5'>
          Video Files
        </h3>
        <UserVideoList videos={data?.videos} />
        {data?.videos.length < data?.total_video && (
          <div className='text-right pt-3'>
            <button onClick={handleLimit}>See more</button>
          </div>
        )}
        <div className='pt-10'>
          <Loader isLoading={isLoading} />
        </div>
      </div>
    </section>
  )
}

export default UserVideosPage
