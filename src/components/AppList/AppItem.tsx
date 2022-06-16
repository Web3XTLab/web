import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ReactStars from "react-stars";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import axios from "axios";
import { Spinner } from "@fluentui/react/lib/Spinner";
import { FontIcon } from "@fluentui/react/lib/Icon";

export type AppItemDataType = {
  tokenURI: string;
  _tokenId: number;
};

type PropsType = {
  data: AppItemDataType;
  onItemClick: (data: AppItemDataType) => void;
};

const ItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #edebe9;
  padding: 8px;
  width: 166px;
  height: 249px;
  justify-content: center;
  margin-right: 16px;
  margin-bottom: 12px;
  overflow: hidden;

  &:hover {
    opacity: 0.9;
  }
`;

const H4 = styled.h4`
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 150px;
  margin-bottom: 4px;
`;

const StartsWrapper = styled.div`
  margin-bottom: 4px;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #605e5c;
    padding-left: 8px;
  }
`;

const AppItem = ({ data, onItemClick }: PropsType) => {
  const [metaData, setMetaData] = useState<Record<string, any>>({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    (async () => {
      const { tokenURI } = data;
      try {
        const result = await axios.get(tokenURI, { timeout: 5000 });
        setMetaData(result.data);
        setStatus("loaded");
      } catch (e) {
        setStatus("error");
        console.error(e);
      }
    })();
  }, [data]);

  const handleItemClick = useCallback(() => {
    onItemClick(data);
  }, [data, onItemClick]);

  return (
    <ItemWrapper onClick={handleItemClick}>
      {status === "loading" && <Spinner />}
      {status === "error" && (
        <Error>
          <FontIcon iconName="Cancel" />
          <span>Data Error</span>
        </Error>
      )}
      {status === "loaded" && (
        <>
          <Image src={metaData.image} />
          <H4>{metaData.name}</H4>
          <StartsWrapper>
            <ReactStars
              count={5}
              value={3}
              size={12}
              edit={false}
              color2={"#ffd700"}
            />
          </StartsWrapper>
          <PrimaryButton>Get</PrimaryButton>
        </>
      )}
    </ItemWrapper>
  );
};

export default AppItem;
