import VideoCard from './VideoCard'
import PropTypes from 'prop-types'
const UserVideoList = ({ videos }) => {
  return (
    <div className='grid md:grid-cols-2 gap-10'>
      {videos?.map((video) => {
        return <VideoCard key={video.id} {...video} />
      })}
    </div>
  )
}

UserVideoList.propTypes = {
  videos: PropTypes.array,
}

export default UserVideoList
