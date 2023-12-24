import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { IoPlayCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { VscUnmute, VscMute } from 'react-icons/vsc'

const VideoInterface = ({ video_url, status }) => {
  const videoRef = useRef(null)
  const videoSlideRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [videoLink, setVideoLink] = useState(video_url)

  const convertToPercentage = (number) => {
    if (!videoSlideRef.current) return

    if (number === 0 || duration === 0) {
      return 0
    }
    const percentage = Math.min((number / duration) * 100, 100)
    return percentage
  }

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    const newMutedState = !video.muted
    video.muted = newMutedState
    setIsMuted(newMutedState)
  }

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    video.addEventListener('loadedmetadata', () => {
      const videoDuration = video.duration
      if (isFinite(videoDuration)) {
        setDuration(videoDuration)
      }
    })

    video.addEventListener('timeupdate', () => {
      setCurrentTime(video.currentTime)
    })

    video.addEventListener('ended', () => {
      setIsPlaying(false)
      setCurrentTime(0)
    })

    return () => {
      video.removeEventListener('loadedmetadata', () => {})
      video.removeEventListener('timeupdate', () => {})
      video.removeEventListener('ended', () => {})
    }
  }, [])

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60)
    const secs = Math.floor(timeInSeconds % 60)
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  useEffect(() => {
    if (video_url) {
      setVideoLink(video_url)
      videoRef.current.load()
    }
  }, [video_url, status])

  return (
    <div className='w-full border border-light-border rounded-md overflow-hidden'>
      <div className='relative h-[300px] overflow-hidden'>
        <video ref={videoRef} width='100%' height='100%'>
          <source src={videoLink} />
        </video>
        <div className='absolute z-50 w-full left-0 top-0 h-full'></div>
      </div>
      <div>
        <div
          className={`h-1 bg-[#DFE0E1]`}
          ref={videoSlideRef}
          style={{ width: `${convertToPercentage(duration)}%` }}
        >
          <div
            className={`h-full bg-primary`}
            style={{ width: `${convertToPercentage(currentTime)}%` }}
          ></div>
        </div>

        <div className='h-[60px] border-t border-light-border flex items-center px-5 bg-white z-[10000]'>
          <div>
            {status !== 'completed' ? (
              <div>
                <span>processing...</span>
              </div>
            ) : (
              <div className='text-light-gray flex items-center'>
                <p className='w-14'>{formatTime(currentTime)}</p>
                <p>/</p>
                <p className='max-w-14 text-right'>{formatTime(duration)}</p>
              </div>
            )}
          </div>
          <div className='flex items-center ml-auto gap-2'>
            <button
              onClick={togglePlay}
              className='flex flex-col items-center w-12'
            >
              {!isPlaying ? (
                <IoPlayCircleOutline size={25} />
              ) : (
                <AiOutlinePauseCircle size={25} />
              )}
              <p className='text-xs'>{isPlaying ? 'Pause' : 'Play'}</p>
            </button>
            <button
              onClick={toggleMute}
              className='flex flex-col items-center w-12'
            >
              {isMuted ? <VscMute size={25} /> : <VscUnmute size={25} />}
              <p className='text-xs'>Volume</p>
            </button>
            <button className='flex flex-col items-center w-12'>
              <IoSettingsOutline size={25} />
              <p className='text-xs'>setting </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

VideoInterface.propTypes = {
  video_url: PropTypes.string,
  status: PropTypes.string,
}

export default VideoInterface
