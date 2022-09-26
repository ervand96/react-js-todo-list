import { TodosListProps } from "./type";
import styles from "./todosList.module.scss";

export default function TodosList({
  todos,
  setTodos,
  setEditTodo,
}: TodosListProps) {
  const handleDelete = ({ id }: any) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const handleComplete = (todo: any) => {
    setTodos(
      todos.map((item: any) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handlerEdit = ({ id }: any) => {
    const findTodo = todos?.find((todo: any) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos?.map((todo: any, index: number) => {
        return (
          <li className={styles.lisItem} key={index}>
            <input
              type="text"
              value={todo.title}
              className={!todo.completed ? styles.list : styles.complete}
              onChange={(event) => event.preventDefault()}
            />
            <div>
              <button
                className={styles.buttonComplete}
                onClick={() => handleComplete(todo)}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className={styles.buttonEdit}
                onClick={() => handlerEdit(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className={styles.buttonDelete}
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}
