import { Outlet } from 'react-router-dom'
import MobileNavbar from './Navbar/MobileNavbar'
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const { nav } = useSelector(
    (state) => state.app
  );
  return (
    <div className='font-Sans'>
      <div className=''>
        {nav && <MobileNavbar />}
      <Outlet />
    </div>
    </div>
  )
}

export default SharedLayout
