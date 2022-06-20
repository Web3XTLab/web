import LoadingOverlay from "@/src/components/LoadingOverlay";
import { IButtonProps, ITextFieldProps, TextField } from "@fluentui/react";
import { ButtonWrapper } from "../../styledComponents/ButtonWrapper";
import { ResultText } from "../../styledComponents/ResultText";
import { StyledPrimaryButton } from "../../styledComponents/StyledPrimaryButton";
import { SubTitle } from "../../styledComponents/SubTitle";
import { TextFieldWrapper } from "../../styledComponents/TextFieldWrapper";

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
    <div>
      <SubTitle>Buy</SubTitle>
      <LoadingOverlay show={loading}>
        <TextFieldWrapper>
          <TextField
            disabled={loading}
            placeholder={"Enter app token id"}
            value={appTokenId}
            onChange={onAppTokenURIChange}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            disabled={loading}
            placeholder={"Enter price"}
            value={price}
            onChange={onAmountChange}
          />
        </TextFieldWrapper>
        <ButtonWrapper>
          <StyledPrimaryButton disabled={loading} onClick={onButtonClick}>
            Buy!
          </StyledPrimaryButton>
        </ButtonWrapper>
        <ResultText>{resultText}</ResultText>
      </LoadingOverlay>
    </div>
  );
}
