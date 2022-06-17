import { Spinner } from "@fluentui/react";
import React from "react";
import styles from "./styles.module.scss";

export interface ILoadingOverlay {
  show: boolean;
  children: React.ReactNode;
}

export function LoadingOverlay(props: ILoadingOverlay) {
  const { show, children } = props;

  return (
    <div className={styles.LoadingOverlay}>
      {show ? (
        <div className={styles.spinnerWrapper}>
          <Spinner label="Loading..." />
        </div>
      ) : null}
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
}
