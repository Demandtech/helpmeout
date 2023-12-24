import { SearchIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'
const SearchVideo = ({ value, setValue }) => {
  return (
    <div className='flex-1 flex lg:justify-end'>
      <form className=' bg-[#B6B3C6] bg-opacity-10 max-w-[400px] w-full p-4 rounded-xl relative'>
        <div className='ml-10'>
          <input
            value={value}
            type='text'
            className='focus:outline-none placeholder:text-xm placeholder:text-[#C3C3C3]'
            style={{ background: 'transparent', width: '100%' }}
            placeholder='search for a particular video'
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className='absolute left-5 top-[20px]'>
          <button>
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  )
}

SearchVideo.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
}

export default SearchVideo
