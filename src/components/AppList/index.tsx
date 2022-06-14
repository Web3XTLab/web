import useWeb3 from "@/src/hooks/useWeb3";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Item from "./AppItem";

type PropsType = {
  onItemClick: (data: Record<string, any>) => void;
};

const List = styled.div`
  display: flex;
  margin-top: 12px;
`;

const Title = styled.h4`
  margin-top: 32px;
`;

export default ({ onItemClick }: PropsType) => {
  const [list, setList] = useState<any>([]);
  const web3 = useWeb3();

  useEffect(() => {
    (async () => {
      const dataList = [];
      const list = await web3.tokenURIs();
      if (!list) return;
      for (let i = 0; i < list.length; i++) {
        try {
          const data = await axios.get(list[i], { timeout: 5000 });
          dataList.push({
            ...data.data,
            // TODO: need be change
            _tokenId: i,
          });
        } catch (e) {
          console.error(e);
          continue;
        }
      }
      setList(dataList);
    })();
  }, []);

  return (
    <>
      <Title>Popular Apps</Title>
      <List>
        {list.map((item: any, id: number) => (
          <Item
            key={`${item.name}-${id}`}
            data={item}
            onItemClick={() => onItemClick(item)}
          />
        ))}
      </List>
    </>
  );
};
