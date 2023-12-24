import PropTypes from 'prop-types'

const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  label,
  className,
  onBlur,
  isError,
}) => {
  return (
    <div className='mb-5'>
      <label
        className='block mb-2 text-sm leading-tight capitalize font-semibold text-primary'
        htmlFor={name}
      >
        {label}
      </label>
      <input
        onBlur={onBlur}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`placeholder:text-[#626262] border-2  p-3 text-base rounded-md w-full focus-within:bg-primary/10 focus:outline-2  transition-all duration-150 !placeholder-shown:bg-primary input ${className} border-[#626262] outline-primary`}
        onChange={onChange}
        value={value}
      />
      <span>{isError ? 'Error Here' : ''}</span>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  isError: PropTypes.number,
}
export default Input
