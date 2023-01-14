import { ABOUT_PATH, ADD_STUDENT_PATH, CONTACT_PATH, ROOT_PATH } from './routePaths'

export interface MenuItem {
  to: string
  label: string
}

export const sidebarMenu: MenuItem[] = [
  {
    to: ROOT_PATH,
    label: 'Student list',
  },
  {
    to: ADD_STUDENT_PATH,
    label: 'Add student',
  },
  {
    to: ABOUT_PATH,
    label: 'About',
  },
  {
    to: CONTACT_PATH,
    label: 'Contact',
  },
]
