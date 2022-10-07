import { useState } from "react";
import { WarningModal } from "../warningModal";
import { ButtonTextEnum, EmptyToDoList, IconsEnum, ModalTextEnum } from "../../../constants/enum";
import { TodosListProps } from "./type";

import styles from "./todosList.module.scss";

export default function TodosList({
  todos,
  setTodos,
  setEditTodo,
}: TodosListProps): JSX.Element {
  const [toDoId, setToDoId] = useState<any>(null);
  const [closeModal, setCloseModal] = useState<boolean>(false);

  const open = (id: any): void => {
    setToDoId(id);
    setCloseModal(true);
  };

  const close = () => {
    setCloseModal(false);
  }

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

  const handleDelete = (): void => {
    setTodos(todos?.filter((item: any) => item.id !== toDoId));
    setCloseModal(false);
  };

  return (
    <div className={styles.section}>
      <div>
        {closeModal &&
          <WarningModal
            onCancel={close}
            onAccept={handleDelete}
            visible={closeModal}
            messageTitle={ModalTextEnum.MODAL_TEXT}
          />
        }
      </div>
      {todos.length ? (
        todos?.map((todo: any, index: number): any => {
          return (
            <li className={styles.lisItem} key={index}>
              <strong className={styles.index}>{index + 1}</strong>
              <input
                type="text"
                value={todo.title}
                className={!todo?.completed ? styles.list : styles.complete}
                onChange={(e) => e.preventDefault()}
              />
              <div className={styles.iconsSection}>
                <div className={styles.tooltip}>
                  <div className={styles.tool} >
                    <div className={styles.floorTool} />
                    <span>{ButtonTextEnum.COMPLETED}</span>
                  </div>
                  <button
                    className={styles.buttonComplete}
                    onClick={() => handleComplete(todo)}
                  >
                    <i className={IconsEnum.checkCircleIcon}></i>
                  </button>
                </div>
                <div className={styles.tooltip}>
                  <div className={styles.tool} >
                    <div className={styles.floorTool} />
                    <span>{ButtonTextEnum.EDIT}</span>
                  </div>
                  <button
                    className={styles.buttonEdit}
                    onClick={() => handlerEdit(todo)}
                  >
                    <i className={IconsEnum.editIcon}></i>
                  </button>
                </div>
                <div className={styles.tooltip}>
                  <div className={styles.tool}>
                    <div className={styles.floorTool} />
                    <span>{ButtonTextEnum.DELETE}</span>
                  </div>
                  <button
                    className={styles.buttonDelete}
                    onClick={() => open(todo.id)}
                  >
                    <i className={IconsEnum.deleteIcon}></i>
                  </button>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <div className={styles.emptyTodos}>
          <h1>{EmptyToDoList.EMPTY_TODO_LIST}</h1>
          <i className={IconsEnum.smile}></i>
        </div>
      )}
    </div>
  );
}
