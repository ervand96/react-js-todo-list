export interface NavbarProps {
  path: string;
  title: string;
}

export enum navBarPath {
  HOME = "/",
  ABOUT = "about",
  TODO_LIST = "todo-list",
  CONTACT = "contact",
}

export const navbar: NavbarProps[] = [
  { path: navBarPath.HOME, title: "Home" },
  { path: navBarPath.ABOUT, title: "About" },
  { path: navBarPath.TODO_LIST, title: "Todo List" },
  { path: navBarPath.CONTACT, title: "Contact" },
];
