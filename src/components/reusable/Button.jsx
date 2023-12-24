import PropTypes from 'prop-types'
import BtnLoader from './BtnLoader'

const Button = ({
  label,
  type,
  className,
  onClick,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type}
      className={`bg-primary hover:bg-[#29235a] text-[#e7e6ec] py-3 text-sm rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ${className}`}
    >
      {isLoading ? <BtnLoader /> : label}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default Button
