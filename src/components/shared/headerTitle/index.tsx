import { HeaderTitleProps } from "./type";

import styles from "./headerTitle.module.scss";

export default function HeaderTitle({
  tab_one,
}: HeaderTitleProps): JSX.Element {
  return (
    <div className={styles.header}>
      <h1>{tab_one}</h1>
    </div>
  );
}
