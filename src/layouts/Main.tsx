import { ROOT_PATH, sidebarMenu } from 'constants'
import { Link, NavLink, Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <>
      {/* side bar */}
      <div className="fixed top-0 left-0 z-[1000] min-h-screen w-side-bar-width bg-gray-900">
        {/* logo */}
        <div className="flex items-center justify-center border-b border-solid border-gray-700">
          <Link to={ROOT_PATH} className="inline-block p-4 text-lg font-bold text-white">
            Student Management
          </Link>
        </div>

        <ul className="p-4 text-gray-400">
          {sidebarMenu.map((menuItem, index) => (
            <li className="mb-2" key={index}>
              <NavLink
                to={menuItem.to}
                className={({ isActive }) =>
                  `block rounded px-4 py-2 text-base font-medium hover:bg-green-600 hover:text-white ${
                    isActive ? 'bg-green-600 text-white' : ''
                  }`
                }
              >
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* main */}
      <div className="ml-side-bar-width w-auto">
        <Outlet />
      </div>
    </>
  )
}
