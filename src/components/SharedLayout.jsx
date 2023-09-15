import { Outlet } from 'react-router-dom'
import MobileNavbar from './Navbar/MobileNavbar'
import { useSelector } from 'react-redux';

/**
 * SharedLayout component for rendering shared layout elements.
 * This component includes a mobile navigation bar and the outlet for rendering child routes.
 */
const SharedLayout = () => {
  const { nav } = useSelector(
    (state) => state.display
  );

  return (
    <div className='font-Sans'>
      <div className='relative'>
        {nav && <MobileNavbar />}
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout;
