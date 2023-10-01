export interface NavbarProps {
  path: string;
  title: string;
}

export enum navBarPath {
  HOME = "/",
  ABOUT = "/about",
  TODO_LIST = "/todo-list",
  LOGIN = '/login',
  SCHEDULE_EMAIL_COMPONENT = '/scheduleEmail',
  WEBCAM = '/webCam'
}

export enum navBarTitle {
  HOME = 'Home',
  ABOUT = 'About',
  TODO_LIST = 'Todo List',
  LOGIN = 'Login',
  SCHEDULE_EMAIL_COMPONENT = 'ScheduleEmail',
  WEBCAM = 'Web Cam'
}

export const navbar: NavbarProps[] = [
  { path: navBarPath.HOME, title: navBarTitle.HOME },
  { path: navBarPath.ABOUT, title: navBarTitle.ABOUT },
  { path: navBarPath.TODO_LIST, title: navBarTitle.TODO_LIST },
  { path: navBarPath.LOGIN, title: navBarTitle.LOGIN },
  { path: navBarPath.SCHEDULE_EMAIL_COMPONENT, title: navBarTitle.SCHEDULE_EMAIL_COMPONENT },
  { path: navBarPath.WEBCAM, title: navBarTitle.WEBCAM },
];
