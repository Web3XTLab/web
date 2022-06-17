import {
  IButtonProps,
  ITextFieldProps,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
import React from "react";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export interface IAppInfoViewProps {
  loading: boolean;
  appTokenId: string;
  appInfo: object | null;
  onAppTokenIdChange: ITextFieldProps["onChange"];
  onButtonClick: IButtonProps["onClick"];
}

export function AppInfoView(props: IAppInfoViewProps) {
  const { appTokenId, loading, appInfo, onAppTokenIdChange, onButtonClick } =
    props;

  return (
    <div className={styles.AppInfoView}>
      <Title>App Info</Title>
      <div className={styles.textFieldWrapper}>
        <TextField
          disabled={loading}
          placeholder={"Enter app token id"}
          value={appTokenId}
          onChange={onAppTokenIdChange}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <PrimaryButton
          disabled={loading}
          className={styles.button}
          onClick={onButtonClick}
        >
          Query!
        </PrimaryButton>
      </div>
      {loading || appInfo === null ? null : (
        <pre className={styles.appInfoWrapper}>
          <code>{JSON.stringify(appInfo, null, 2)}</code>
        </pre>
      )}
    </div>
  );
}
