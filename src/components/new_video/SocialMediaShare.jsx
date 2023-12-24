import {
  WhatsAppIcon,
  FacebookIcon,
  TelegramIcon,
} from '../../assets/svgs/SocialIcons'

const SocialMediaShare = () => {
  return (
    <div className='mb-10'>
      <p className='mb-2 font-semibold text-primary'>Share video</p>
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
  )
}

export default SocialMediaShare
