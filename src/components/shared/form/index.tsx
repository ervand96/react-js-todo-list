import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { TodosListProps } from "../todos-list/type";
import { FormProps } from "./type";
import { AddButtonEnum } from "../../../constants/enum";

import styles from "./form.module.scss";

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}: FormProps): JSX.Element {
  const onInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const updateTodo = (title: any, id: any, completed: any): void => {
    const newTodo = todos.map(
      (todo: any): TodosListProps =>
        todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    if (!editTodo) {
      if (input.trim()) {
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput("");
      }
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className={styles.taskInput}
        value={input}
        onChange={onInputChange}
      />
      <button className={styles.buttonAdd} type="submit" disabled={!input}>
        {editTodo ? AddButtonEnum.OK : AddButtonEnum.ADD}
      </button>
    </form>
  );
}
