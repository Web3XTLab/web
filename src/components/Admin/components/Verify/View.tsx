import React from "react";
import { ITextFieldProps, TextField, IButtonProps } from "@fluentui/react";
import LoadingOverlay from "@/src/components/LoadingOverlay";
import { SubTitle } from "../../styledComponents/SubTitle";
import { TextFieldWrapper } from "../../styledComponents/TextFieldWrapper";
import { ButtonWrapper } from "../../styledComponents/ButtonWrapper";
import { StyledPrimaryButton } from "../../styledComponents/StyledPrimaryButton";
import { ResultText } from "../../styledComponents/ResultText";

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
    <div>
      <SubTitle>Verify Authentication</SubTitle>
      <LoadingOverlay show={loading}>
        <TextFieldWrapper>
          <TextField
            disabled={loading}
            placeholder={"Enter app token id"}
            value={appTokenId}
            onChange={onAppTokenIdChange}
          />
        </TextFieldWrapper>
        <ButtonWrapper>
          <StyledPrimaryButton disabled={loading} onClick={onButtonClick}>
            Verify!
          </StyledPrimaryButton>
        </ButtonWrapper>
        <ResultText>{resultText}</ResultText>
      </LoadingOverlay>
    </div>
  );
}
