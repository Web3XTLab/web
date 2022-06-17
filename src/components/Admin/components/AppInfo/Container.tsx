import useWeb3 from "@/src/hooks/useWeb3";
import { IButtonProps, ITextFieldProps } from "@fluentui/react";
import React, { useState } from "react";
import { AppInfoView } from "./View";

export function AppInfo() {
  const [loading, setLoading] = useState(false);
  const [appTokenId, setAppTokenId] = useState("");
  const [appInfo, setAppInfo] = useState<{} | null>(null);
  const [resultText, setResultText] = useState("");
  const web3app = useWeb3();

  const onAppTokenIdChange: ITextFieldProps["onChange"] = (e) => {
    setAppTokenId(e.currentTarget.value);
  };

  const checkInput = (): boolean => {
    return appTokenId.length > 0;
  };

  const onButtonClick: IButtonProps["onClick"] = async () => {
    if (!checkInput()) {
      setResultText("Please input app token id");
      setAppInfo(null);
    } else {
      setResultText("");
      setLoading(true);
      const appInfo = await web3app.getAppInfo(appTokenId);
      setAppInfo(appInfo);
      setLoading(false);
    }
  };

  return (
    <AppInfoView
      loading={loading}
      appTokenId={appTokenId}
      appInfo={appInfo}
      resultText={resultText}
      onAppTokenIdChange={onAppTokenIdChange}
      onButtonClick={onButtonClick}
    />
  );
}
