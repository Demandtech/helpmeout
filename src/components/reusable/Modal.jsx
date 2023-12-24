import { Dialog } from '@headlessui/react'
import PropTypes from 'prop-types'
import { CloseIcon } from '../../assets/svgs'

export default function Modal({ isOpen, setIsOpen, children }) {
  return (
    <Dialog
      className='relative z-50'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Panel className='fixed inset-0 grid place-content-center bg-dark/10'>
        <div className={`${isOpen ?  'translate-y-0'  :  ' translate-x-9'} transition-all duration-1000  bg-[#F2F4F7] rounded-3xl w-[315px] lg:w-[500px] py-6 px-3 lg:p-10`}>
          <div className='flex justify-end mb-4'>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon className='w-7 lg:w-10' />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}
