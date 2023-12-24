import { useParams } from 'react-router-dom'
import {
  Loader,
  SingleVideoPageHero,
  SingleVideoPageSectionTwo,
} from '../../components'
import { useQuery } from '@tanstack/react-query'
import customFetch from '../../configs'

const SingleVideoPage = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['singlevideo', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/videos/single/${id}`)
      return data
    },
  })

  if (isLoading) {
    return <Loader />
  }

  console.log(error)

  const { title, video_url, status, id: videoId } = data

  return (
    <section className=''>
      <div className='w-[90%] mx-auto'>
        <div className='text-dark font-work-sans py-5'>
          <span className='opacity-70'>Home /</span>
          <span className='opacity-70'> Recent Video /</span>
          <span className='text-[#413C6D] font-semibold'>{title}</span>
        </div>
        <SingleVideoPageHero
          title={title}
          status={status}
          video_url={video_url}
        />
        <SingleVideoPageSectionTwo
          id={videoId}
          title={title}
          videoUrl={video_url}
        />
      </div>
    </section>
  )
}

export default SingleVideoPage
