import { useState } from "react";
import FAKE_DATA from '../../constants/MOCK_DATA.json'
import styles from "./about.module.scss";

export default function About(): JSX.Element {
  const [data, setData] = useState<string>('');

  const getValue = (e: any): void => {
    setData(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>

        <input placeholder="Search Data..." onChange={event => { getValue(event) }} />
        {FAKE_DATA.filter((val) => {
          if (data.trim() == '') {
            return val
          } else if (val.first_name.toLocaleLowerCase().includes(data.toLocaleLowerCase())) {
            return val
          }
        }).map((e) => (
          <div className={styles.data}>
            <p>{e.first_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
