import LoadingOverlay from "@/src/components/LoadingOverlay";
import {
  IButtonProps,
  ITextFieldProps,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export interface IBuyViewProps {
  loading: boolean;
  appTokenId: string;
  price: string;
  resultText: string;
  onAppTokenIdChange: ITextFieldProps["onChange"];
  onPriceChange: ITextFieldProps["onChange"];
  onButtonClick: IButtonProps["onClick"];
}

export function BuyView(props: IBuyViewProps) {
  const {
    appTokenId,
    loading,
    price,
    resultText,
    onAppTokenIdChange: onAppTokenURIChange,
    onPriceChange: onAmountChange,
    onButtonClick,
  } = props;
  return (
    <div className={styles.Buy}>
      <Title>Buy</Title>
      <LoadingOverlay show={loading}>
        <div className={styles.textFieldWrapper}>
          <TextField
            disabled={loading}
            placeholder={"Enter app token id"}
            value={appTokenId}
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
            Buy!
          </PrimaryButton>
        </div>
        <div className={styles.resultText}>{resultText}</div>
      </LoadingOverlay>
    </div>
  );
}
