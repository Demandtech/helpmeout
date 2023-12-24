import { useState } from 'react'
import { EditIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'
import { Transcript, VideoInterface } from '../../components'

const SingleVideoPageHero = ({ title, status, video_url }) => {
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [name, setName] = useState(title)
  return (
    <div>
      <div className='w-full bg-red-600 flex items-center gap-4 mb-5 '>
        <input
          style={{ minWidth: '350px' }}
          onChange={(e) => setName(e.target.value)}
          type='text'
          value={name}
          readOnly={isReadOnly}
          className={`focus:outline-none text-dark font-semibold  text-[16px] lg:text-lg h-8 border ${
            isReadOnly
              ? ' border-white'
              : ' border-[#413C6D] rounded-md  text-[16px]'
          }`}
        />
        <div>
          <button type='button' onClick={() => setIsReadOnly(!isReadOnly)}>
            <EditIcon width={'20px'} height={'20px'} />
          </button>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <VideoInterface status={status} video_url={video_url} />
        <Transcript />
      </div>
    </div>
  )
}
SingleVideoPageHero.propTypes = {
  video_url: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string,
}
export default SingleVideoPageHero
