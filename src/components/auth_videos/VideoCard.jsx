import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FiLink2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { formatDate, formatDuration } from '../../utils'

const VideoCard = ({
  thumbnail_url,
  title,
  duration,
  created_at,
  video_url,
  blob_id,
}) => {
  return (
    <div className='border-2 border-light-border rounded-[22px] overflow-hidden p-3'>
      <div className='rounded-[10px] h-[200px] border border-light-border overflow-hidden relative'>
        <img
          className=' object-cover  h-full w-full'
          src={thumbnail_url}
          alt='video thumbnail'
          height='100%'
          width='100%'
        />
        <div className='absolute right-3 bottom-3 bg-[#e7e7ed] rounded text-sm px-2 py-1'>
          {formatDuration(duration)}
        </div>
      </div>
      <div className='flex items-center justify-between pt-5'>
        <h3 className='text-[#141414] font-work-sans text-xl font-medium'>
          <Link to={`/dashboard/videos/${blob_id}`}>{title}</Link>
        </h3>
        <div className='flex items-center space-x-2'>
          <Link target='_blank' to={video_url} download={video_url}>
            <FiLink2 size={20} />
          </Link>
          <button>
            <BiDotsVerticalRounded size={20} />
          </button>
        </div>
      </div>
      <div className='pt-2'>
        <p className='text-[#b6b3c6]'>{formatDate(created_at)}</p>
      </div>
    </div>
  )
}
VideoCard.propTypes = {
  thumbnail_url: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  blob_id: PropTypes.string,
  created_at: PropTypes.string,
  video_url: PropTypes.string,
}
export default VideoCard
