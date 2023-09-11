import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div className='font-Dans'>
      <div className='md:w-1100px'>
      <Outlet />
    </div>
    </div>
  )
}

export default SharedLayout
