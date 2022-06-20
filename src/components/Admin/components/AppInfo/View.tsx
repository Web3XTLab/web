import LoadingOverlay from "@/src/components/LoadingOverlay";
import { IButtonProps, ITextFieldProps, TextField } from "@fluentui/react";
import React from "react";
import { ButtonWrapper } from "../../styledComponents/ButtonWrapper";
import { ResultText } from "../../styledComponents/ResultText";
import { StyledPrimaryButton } from "../../styledComponents/StyledPrimaryButton";
import { SubTitle } from "../../styledComponents/SubTitle";
import { TextFieldWrapper } from "../../styledComponents/TextFieldWrapper";
import { AppInfoWrapper } from "./styledComponents/AppInfoWrapper";

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
    <div>
      <SubTitle>App Info</SubTitle>
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
            Query!
          </StyledPrimaryButton>
        </ButtonWrapper>
        <ResultText>{resultText}</ResultText>
        {loading || appInfo === null ? null : (
          <AppInfoWrapper>
            <code>{JSON.stringify(appInfo, null, 2)}</code>
          </AppInfoWrapper>
        )}
      </LoadingOverlay>
    </div>
  );
}
