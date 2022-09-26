import { useState } from "react";
import Form from "../../shared/form";
import HeaderTitle from "../../shared/headerTitle";
import TodosList from "../../shared/todos-list";

import styles from "./main.module.scss";

export default function Main() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className={styles.appWrapper}>
      <div>
        <HeaderTitle />
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
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
  );
}
