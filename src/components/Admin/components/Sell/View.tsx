import LoadingOverlay from "@/src/components/LoadingOverlay";
import {
  IButtonProps,
  ITextFieldProps,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export interface ISellViewProps {
  loading: boolean;
  name: string;
  appTokenURI: string;
  price: string;
  resultText: string;
  onNameChange: ITextFieldProps["onChange"];
  onAppTokenURIChange: ITextFieldProps["onChange"];
  onAmountChange: ITextFieldProps["onChange"];
  onButtonClick: IButtonProps["onClick"];
}

export function SellView(props: ISellViewProps) {
  const {
    name,
    appTokenURI,
    loading,
    price,
    resultText,
    onAppTokenURIChange,
    onNameChange,
    onAmountChange,
    onButtonClick,
  } = props;
  return (
    <div className={styles.Sell}>
      <Title>Sell</Title>
      <LoadingOverlay show={loading}>
        <div className={styles.textFieldWrapper}>
          <TextField
            disabled={loading}
            placeholder={"Enter app name"}
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className={styles.textFieldWrapper}>
          <TextField
            disabled={loading}
            placeholder={"Enter app token URI"}
            value={appTokenURI}
            onChange={onAppTokenURIChange}
          />
        </div>
        <div className={styles.textFieldWrapper}>
          <TextField
            disabled={loading}
            placeholder={"Enter price"}
            value={price}
            onChange={onAmountChange}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <PrimaryButton
            disabled={loading}
            className={styles.button}
            onClick={onButtonClick}
          >
            Sell!
          </PrimaryButton>
        </div>
        <div className={styles.resultText}>{resultText}</div>
      </LoadingOverlay>
    </div>
  );
}
