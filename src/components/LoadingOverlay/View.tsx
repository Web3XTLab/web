import { Spinner } from "@fluentui/react";
import React from "react";
import { SpinnerWrapper } from "./styledComponent/SpinnerWrapper";
import { ViewWrapper } from "./styledComponent/ViewWrapper";

export interface ILoadingOverlay {
  show: boolean;
  children: React.ReactNode;
}

export function LoadingOverlay(props: ILoadingOverlay) {
  const { show, children } = props;

  return (
    <ViewWrapper>
      {show ? (
        <SpinnerWrapper>
          <Spinner label="Loading..." />
        </SpinnerWrapper>
      ) : null}
      <div>{children}</div>
    </ViewWrapper>
  );
}
