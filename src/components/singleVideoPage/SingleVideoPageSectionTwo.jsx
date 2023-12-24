import CopyToClipboard from 'react-copy-to-clipboard'
import {
  WhatsAppIcon,
  FacebookIcon,
  TelegramIcon,
} from '../../assets/svgs/SocialIcons'
import { CopyIcon } from '../../assets/svgs'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SendVideo from '../video/SendVideo'

const SingleVideoPageSectionTwo = ({ videoUrl, id }) => {
  const [isCopy, setIsCopy] = useState({ value: '', copied: false })

  useEffect(() => {
    setIsCopy((previousState) => ({
      ...previousState,
      value: videoUrl,
    }))

    const timeoutId = setTimeout(() => {
      setIsCopy((previousState) => ({
        ...previousState,
        copied: false,
      }))
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [videoUrl, isCopy.copied])

  return (
    <section className='py-8'>
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='w-full'>
          <SendVideo id={id} />
        </div>
        <div className='w-full '>
          <div className='flex items-center border border-[#929292] p-3 rounded-[10px] w-full bg-[#FAFAFA;]'>
            <input
              className='w-full'
              type='text'
              value={videoUrl}
              style={{ background: 'transparent' }}
              readOnly
            />

            <CopyToClipboard
              text={isCopy.value}
              onCopy={() => setIsCopy({ copied: true })}
            >
              <button
                className={
                  'flex border border-primary text-primary py-1 px-3 rounded-md gap-1'
                }
              >
                <CopyIcon />
                <span className='text-sm'>
                  {isCopy.copied ? 'copied' : 'copy'}
                </span>
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <p className='mb-2 font-semibold text-primary'>Share your video</p>
        <div className='flex gap-5 flex-wrap'>
          <div className='p-2 flex border border-primary items-center gap-2 rounded-md'>
            <FacebookIcon />
            <p className=''>Facebook</p>
          </div>
          <div className='p-2 flex border border-primary items-center gap-2 rounded-md'>
            <WhatsAppIcon />
            <p className=''>Whatsapp</p>
          </div>
          <div className='p-2 flex border border-primary items-center gap-2 rounded-md'>
            <TelegramIcon />
            <p className=''>Telegram</p>
          </div>
        </div>
      </div>
    </section>
  )
}

SingleVideoPageSectionTwo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  id: PropTypes.number,
}

export default SingleVideoPageSectionTwo
