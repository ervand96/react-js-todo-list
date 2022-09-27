import { HeaderTitleProps } from "./type";

import styles from "./headerTitle.module.scss";

export default function HeaderTitle({ title }: HeaderTitleProps): JSX.Element {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}
