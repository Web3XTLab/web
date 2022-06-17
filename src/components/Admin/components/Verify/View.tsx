import React from "react";
import styles from "./styles.module.scss";
import {
  ITextFieldProps,
  TextField,
  PrimaryButton,
  IButtonProps,
} from "@fluentui/react";
import { Title } from "../Title";
import LoadingOverlay from "@/src/components/LoadingOverlay";

export interface IVerifyViewProps {
  loading: boolean;
  appTokenId: string;
  resultText: string;
  onAppTokenIdChange: ITextFieldProps["onChange"];
  onButtonClick: IButtonProps["onClick"];
}

export function VerifyView(props: IVerifyViewProps) {
  const { appTokenId, loading, resultText, onAppTokenIdChange, onButtonClick } =
    props;
  return (
    <div className={styles.Verify}>
      <Title>Verify Authentication</Title>
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
            Verify!
          </PrimaryButton>
        </div>
        <div className={styles.resultText}>{resultText}</div>
      </LoadingOverlay>
    </div>
  );
}
