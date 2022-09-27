import { TodosListProps } from "./type";
import { IconsEnum } from "../../../constants/enum";

import styles from "./todosList.module.scss";

export default function TodosList({
  todos,
  setTodos,
  setEditTodo,
}: TodosListProps): JSX.Element {
  const handleDelete = ({ id }: any): void => {
    setTodos(todos?.filter((todo: any) => todo?.id !== id));
  };

  const handleComplete = (todo: any): void => {
    setTodos(
      todos?.map((item: any): TodosListProps => {
        if (item?.id === todo?.id) {
          return { ...item, completed: !item?.completed };
        }
        return item;
      })
    );
  };

  const handlerEdit = ({ id }: any): void => {
    const findTodo = todos?.find((todo: any) => todo?.id === id);
    setEditTodo(findTodo);
  };

  return (
    <>
      {todos?.map((todo: TodosListProps, index: number): any => {
        return (
          <li className={styles.lisItem} key={index}>
            <strong className={styles.index}>{index + 1}</strong>
            <input
              type="text"
              value={todo.title}
              className={!todo?.completed ? styles.list : styles.complete}
              onChange={(event) => event.preventDefault()}
            />
            <div>
              <button
                className={styles.buttonComplete}
                onClick={() => handleComplete(todo)}
              >
                <i className={IconsEnum.checkCircleIcon}></i>
              </button>
              <button
                className={styles.buttonEdit}
                onClick={() => handlerEdit(todo)}
              >
                <i className={IconsEnum.editIcon}></i>
              </button>
              <button
                className={styles.buttonDelete}
                onClick={() => handleDelete(todo)}
              >
                <i className={IconsEnum.deleteIcon}></i>
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
}
