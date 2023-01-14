import { MainLayout } from 'layouts'
import { AddStudentPage, EditStudentPage, NotFoundPage, StudentListPage } from 'pages'
import { createBrowserRouter } from 'react-router-dom'
import { ADD_STUDENT_PATH, ALL_PATH, EDIT_STUDENT_PATH, ROOT_PATH } from './routePaths'

export const router = createBrowserRouter([
  {
    path: ROOT_PATH,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <StudentListPage />,
      },
      {
        path: ADD_STUDENT_PATH,
        element: <AddStudentPage />,
      },
      {
        path: EDIT_STUDENT_PATH,
        element: <EditStudentPage />,
      },
    ],
  },
  {
    path: ALL_PATH,
    element: <NotFoundPage />,
  },
])
