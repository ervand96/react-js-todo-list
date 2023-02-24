import { useState } from "react";
import FAKE_DATA from "../../constants/MOCK_DATA.json";

import styles from "./about.module.scss";

export default function About(): JSX.Element {
  const [data, setData] = useState<string>("");
  const [isEmail, setIsEmail] = useState<string>("");

  const getValue = (e: any): void => {
    setData(e.target.value);
  };

  const getEmail = (e: any): void => {
    setIsEmail(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.input}>
          <input
            placeholder="Search name & last name..."
            onChange={(event) => {
              getValue(event);
            }}
          />
        </div>
        {FAKE_DATA.filter((val) => {
          if (data === "") {
            return val;
          } else if (
            val.first_name
              .toLocaleLowerCase()
              .includes(data.trim().toLocaleLowerCase()) ||
            val.last_name
              .toLocaleLowerCase()
              .includes(data.trim().toLocaleLowerCase()) ||
            val.id.toString().includes(data.trim())
          ) {
            return val;
          }
        }).map((e, index) => (
          <div className={styles.all} key={index}>
            <div className={styles.id}>
              <span>{e.id}</span>
            </div>
            <div className={styles.data}>
              <p>{e.first_name + " " + " " + e.last_name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.section}>
        <div className={styles.input}>
          <input
            placeholder="Search Email..."
            onChange={(event) => {
              getEmail(event);
            }}
          />
        </div>
        {FAKE_DATA.filter((value) => {
          if (isEmail === "") {
            return value;
          } else if (value.email.toString().includes(isEmail.trim())) {
            return value;
          }
        }).map((e, index) => (
          <div className={styles.all} key={index}>
            <div className={styles.id}>
              <span>{e.id}</span>
            </div>
            <div className={styles.data}>
              <p>{e.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
