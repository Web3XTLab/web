import LoadingOverlay from "@/src/components/LoadingOverlay";
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
  resultText: string;
  onAppTokenIdChange: ITextFieldProps["onChange"];
  onButtonClick: IButtonProps["onClick"];
}

export function AppInfoView(props: IAppInfoViewProps) {
  const {
    appTokenId,
    loading,
    appInfo,
    resultText,
    onAppTokenIdChange,
    onButtonClick,
  } = props;

  return (
    <div className={styles.AppInfoView}>
      <Title>App Info</Title>
      <LoadingOverlay show={loading}>
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
        <div className={styles.resultText}>{resultText}</div>
        {loading || appInfo === null ? null : (
          <pre className={styles.appInfoWrapper}>
            <code>{JSON.stringify(appInfo, null, 2)}</code>
          </pre>
        )}
      </LoadingOverlay>
    </div>
  );
}
