import { useEffect, useState } from "react";
import Form from "../../shared/form";
import HeaderTitle from "../../shared/headerTitle";
import TodosList from "../../shared/todos-list";
import { LocalProps } from "./type";

import styles from "./main.module.scss";

export default function Main(): JSX.Element {
  const initialState =
    JSON.parse(localStorage.getItem("todos")!) || ([] as LocalProps[]);

  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Object>(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <div className={styles.appWrapper}>
        <div>
          <HeaderTitle title="Todo-List" />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={initialState}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}
