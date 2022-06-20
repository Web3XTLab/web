import LoadingOverlay from "@/src/components/LoadingOverlay";
import { IButtonProps, ITextFieldProps, TextField } from "@fluentui/react";
import { ButtonWrapper } from "../../styledComponents/ButtonWrapper";
import { ResultText } from "../../styledComponents/ResultText";
import { StyledPrimaryButton } from "../../styledComponents/StyledPrimaryButton";
import { SubTitle } from "../../styledComponents/SubTitle";
import { TextFieldWrapper } from "../../styledComponents/TextFieldWrapper";

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
    <div>
      <SubTitle>Sell</SubTitle>
      <LoadingOverlay show={loading}>
        <TextFieldWrapper>
          <TextField
            disabled={loading}
            placeholder={"Enter app name"}
            value={name}
            onChange={onNameChange}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            disabled={loading}
            placeholder={"Enter app token URI"}
            value={appTokenURI}
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
            Sell!
          </StyledPrimaryButton>
        </ButtonWrapper>
        <ResultText>{resultText}</ResultText>
      </LoadingOverlay>
    </div>
  );
}
