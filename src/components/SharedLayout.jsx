import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div className='font-Sans'>
      <div className=''>
      <Outlet />
    </div>
    </div>
  )
}

export default SharedLayout
