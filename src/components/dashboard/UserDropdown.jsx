import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
  ProfileIcon,
  ArrowDownIcon,
  SettingIcon,
  ArrowRightIcon,
  HalfMoonIcon,
  HelpIcon,
  LogoutIcon,
} from '../../assets/svgs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/slices/userSlice'

export default function UserDropdown() {
  const { user } = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/auth')
  }

  return (
    <div className=''>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
          <div className='flex items-center gap-1 w-full'>
            <ProfileIcon />
            <span className='font-work-sans text-black'>
              {user?.first_name} {user?.last_name}
            </span>
            <ArrowDownIcon />
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-[16px]  w-[300px] -top-1 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <div className='flex items-center gap-1 w-full'>
                      <ProfileIcon />
                      <span className='font-work-sans text-black'>
                        {user.first_name} {user.last_name}
                      </span>
                      <div className='ml-auto'>
                        <ArrowDownIcon />
                      </div>
                    </div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                <button
                  className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 hover:bg-light-border`}
                >
                  <div>
                    <SettingIcon />
                  </div>
                  <span>Settings and Privacy</span>
                  <div className='ml-auto'>
                    <ArrowRightIcon />
                  </div>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className='text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 hover:bg-light-border'>
                  <div>
                    <HalfMoonIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                  </div>

                  <span>Display and Accessibility</span>
                  <div className='ml-auto'>
                    <ArrowRightIcon aria-hidden='true' />
                  </div>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className='text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 hover:bg-light-border'>
                  <div>
                    <HelpIcon aria-hidden='true' />
                  </div>
                  <span>Help and Support</span>
                  <div className='ml-auto'>
                    <ArrowRightIcon aria-hidden='true' />
                  </div>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={handleLogout}
                  className='text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 hover:bg-light-border'
                >
                  <div>
                    <LogoutIcon />
                  </div>
                  <span>Logout</span>
                  <div className='ml-auto'>
                    <ArrowRightIcon aria-hidden='true' />
                  </div>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
