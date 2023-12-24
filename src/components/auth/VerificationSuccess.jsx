import { Link } from 'react-router-dom'
import { Modal } from '../../components'
import PropTypes from 'prop-types'

const RegisterSuccess = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='text-center'>
        <h5 className='font-bold text-lg mb-4'>Verification Successful!!!</h5>
        <p>Account verify successfully, click button below to login</p>
        <Link
          to='/auth'
          className='text-white px-4 py-1 rounded-md mt-4 bg-primary inline-block'
          onClick={setIsOpen}
        >
          Continue
        </Link>
      </div>
    </Modal>
  )
}

RegisterSuccess.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default RegisterSuccess
