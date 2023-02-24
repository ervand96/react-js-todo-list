export interface NavbarProps {
  path: string;
  title: string;
}

export enum navBarPath {
  HOME = "/",
  ABOUT = "/about",
  TODO_LIST = "/todo-list",
  LOGIN = '/login'
}

export enum navBarTitle {
  HOME = 'Home',
  ABOUT = 'About',
  TODO_LIST = 'Todo List',
  LOGIN = 'Login'
}

export const navbar: NavbarProps[] = [
  { path: navBarPath.HOME, title: navBarTitle.HOME },
  { path: navBarPath.ABOUT, title: navBarTitle.ABOUT },
  { path: navBarPath.TODO_LIST, title: navBarTitle.TODO_LIST },
  { path: navBarPath.LOGIN, title: navBarTitle.LOGIN },
];
