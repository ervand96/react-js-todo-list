export interface NavbarProps {
  path: string;
  title: string;
}

export enum navBarPath {
  HOME = "/",
  ABOUT = "/about",
  TODO_LIST = "/todo-list",
  CONTACT = "/contact",
  LOGIN = '/login'
}

export enum navBarTitle {
  HOME = 'Home',
  ABOUT = 'About',
  TODO_LIST = 'Todo List',
  CONTACT = 'Contact',
  LOGIN = 'Login'
}

export const navbar: NavbarProps[] = [
  { path: navBarPath.HOME, title: navBarTitle.HOME },
  { path: navBarPath.ABOUT, title: navBarTitle.ABOUT },
  { path: navBarPath.TODO_LIST, title: navBarTitle.TODO_LIST },
  { path: navBarPath.CONTACT, title: navBarTitle.CONTACT },
  { path: navBarPath.LOGIN, title: navBarTitle.LOGIN },
];
