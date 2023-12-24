import VideoInterface from '../video/VideoInterface'
import CopyVideo from '../video/CopyVideo'
import SendVideo from '../video/SendVideo'
import SocialMediaShare from './SocialMediaShare'
import Transcript from '../video/Transcript'
import PropTypes from 'prop-types'

const VideoReady = ({ video_url, title, status, id }) => {
  return (
    <div className='font-sora flex flex-col lg:flex-row '>
      <div className='flex-1 lg:pr-10 lg:border-r border-[#CFCFCF]'>
        <h3 className='font-bold text-2xl lg:text-3xl mb-10 '>
          Your video is {status !== 'completed' ? 'processing...' : 'ready!'}
        </h3>
        <SendVideo title={title} id={id} />
        <CopyVideo video_url={video_url} />
        <SocialMediaShare />
      </div>
      <div className='flex-1 lg:pl-10'>
        <VideoInterface video_url={video_url} status={status} />
        <div className='lg:mt-10'></div>
        <Transcript />
      </div>
    </div>
  )
}

VideoReady.propTypes = {
  video_url: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number,
}

export default VideoReady
