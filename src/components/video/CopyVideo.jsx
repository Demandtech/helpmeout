/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { CopyIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'
import CopyToClipboard from 'react-copy-to-clipboard'

const CopyVideo = ({ video_url }) => {
  const [isCopy, setIsCopy] = useState({ value: '', copied: false })

  useEffect(() => {
    setIsCopy({ ...isCopy, value: video_url })
  }, [video_url])

  return (
    <div className='w-full '>
      <label className='text-[#141414] font-semibold leading-tight mb-3 block'>
        Video url
      </label>
      <div className='flex items-center border border-[#929292] p-3 rounded-[10px] w-full mb-10 bg-[#FAFAFA;]'>
        <input
          className='w-full'
          type='text'
          value={isCopy.value}
          style={{ background: 'transparent' }}
          readOnly
        />

        <CopyToClipboard
          text={isCopy.value}
          onCopy={() => {
            setIsCopy({ copied: true })
            setTimeout(() => setIsCopy({ copied: false }), 500)
          }}
        >
          <button className='flex border border-primary text-primary py-1 px-3 rounded-md gap-1'>
            <CopyIcon />
            {isCopy.copied ? (
              <span className='text-sm'>copied</span>
            ) : (
              <span className='text-sm'>copy</span>
            )}
          </button>
        </CopyToClipboard>
      </div>
      <div></div>
    </div>
  )
}

CopyVideo.propTypes = {
  video_url: PropTypes.string,
}

export default CopyVideo
