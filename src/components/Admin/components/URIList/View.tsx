import LoadingOverlay from "@/src/components/LoadingOverlay";
import {
  DetailsList,
  IButtonProps,
  IColumn,
  PrimaryButton,
  SelectionMode,
} from "@fluentui/react";
import React from "react";
import { SubTitle } from "../../styledComponents/SubTitle";
import { TitleWrapper } from "./styledComponents/TitleWrapper";

export interface IURIListViewProps {
  loading: boolean;
  list: string[];
  onReloadButtonClick: IButtonProps["onClick"];
}

export function URIListView(props: IURIListViewProps) {
  const { list, loading, onReloadButtonClick } = props;

  const columns: IColumn[] = [
    {
      key: "tokenId",
      fieldName: "tokenId",
      name: "Token ID",
      minWidth: 0,
      maxWidth: 75,
    },
    {
      key: "uri",
      fieldName: "uri",
      name: "URI",
      minWidth: 0,
      isMultiline: true,
    },
  ];

  const items = list.map((item, i) => ({
    key: i,
    tokenId: i,
    uri: item,
  }));

  return (
    <div>
      <TitleWrapper>
        <SubTitle>Token ID List</SubTitle>
        <PrimaryButton onClick={onReloadButtonClick} disabled={loading}>
          Reload
        </PrimaryButton>
      </TitleWrapper>
      <div>
        <LoadingOverlay show={loading}>
          <DetailsList
            selectionMode={SelectionMode.none}
            items={items}
            columns={columns}
          />
        </LoadingOverlay>
      </div>
    </div>
  );
}
