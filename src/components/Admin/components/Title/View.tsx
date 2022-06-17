import { Http2ServerResponse } from "http2";
import React from "react";
import styles from "./styles.module.scss";

export interface ITitleProps {
  children?: React.ReactNode;
}

export function Title(props: ITitleProps) {
  const { children } = props;
  return <h2 className={styles.Title}>{children}</h2>;
}
