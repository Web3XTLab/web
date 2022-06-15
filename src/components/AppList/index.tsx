import useWeb3 from "@/src/hooks/useWeb3";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Spinner } from "@fluentui/react/lib/Spinner";
import Item, { AppItemDataType } from "./AppItem";

type PropsType = {
  onItemClick: (data: AppItemDataType) => void;
};

const List = styled.div`
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const Title = styled.h4`
  margin-top: 32px;
`;

const NormalContent = styled.div`
  padding: 24px 0;
  font-size: 13px;
  color: #605e5c;
`;

export default ({ onItemClick }: PropsType) => {
  const [listStatus, setListStatus] = useState("loading");
  const [list, setList] = useState<string[]>([]);
  const web3 = useWeb3();

  useEffect(() => {
    (async () => {
      const list = await web3.tokenURIs();
      if (!list || list?.length === 0) {
        setListStatus("empty");
        return;
      }

      // loading
      setListStatus("loaded");
      setList(list);
    })();
  }, []);

  return (
    <>
      <Title>Popular Apps</Title>
      {listStatus === "loading" && (
        <NormalContent>
          <Spinner label="Seriously, still loading..." labelPosition="right" />
        </NormalContent>
      )}
      {listStatus === "loaded" && (
        <List>
          {list.map((uri: string, id: number) => (
            <Item
              key={`${id}`}
              data={{
                tokenURI: uri,
                _tokenId: id,
              }}
              onItemClick={onItemClick}
            />
          ))}
        </List>
      )}
      {listStatus === "empty" && <NormalContent>No Apps Here</NormalContent>}
    </>
  );
};
