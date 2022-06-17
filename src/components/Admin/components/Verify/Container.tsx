import useWeb3 from "@/src/hooks/useWeb3";
import { IButtonProps, ITextFieldProps } from "@fluentui/react";
import React, { useState } from "react";
import { VerifyView } from "./View";

export function Verify() {
  const [loading, setLoading] = useState(false);
  const [appTokenId, setAppTokenId] = useState("");
  const [resultText, setResultText] = useState("");

  const web3app = useWeb3();

  const onAppTokenIdChange: ITextFieldProps["onChange"] = (e) => {
    setAppTokenId(e.currentTarget.value);
  };

  const onButtonClick: IButtonProps["onClick"] = async () => {
    setResultText("");
    setLoading(true);
    const result = await web3app.verify(appTokenId);
    setLoading(false);
    if (result) {
      setResultText("The current consumer passes the authentication.");
    } else if (result === false) {
      setResultText("The current consumer does not pass the authentication.");
    } else {
      setResultText("Something goes wrong...");
    }
  };

  return (
    <VerifyView
      loading={loading}
      appTokenId={appTokenId}
      resultText={resultText}
      onAppTokenIdChange={onAppTokenIdChange}
      onButtonClick={onButtonClick}
    />
  );
}
