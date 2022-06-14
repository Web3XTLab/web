import useWeb3 from "@/src/hooks/useWeb3";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./AppItem";

type PropsType = {
  onItemClick: (data: Record<string, any>, id: number) => void;
}

const List = styled.div`
  display: flex;
  margin-top: 12px;
`;

const Title = styled.h4`
  margin-top: 32px;
`;

// Mock Data
const listData = [
  {
    description: "GameItems - Thor's Hammer",
    external_url: "https://forum.openzeppelin.com",
    image: "https://openmoji.org/data/color/svg/1F528.svg",
    name: "Thor's Hammer",
  },
  {
    description: "GameItems - Thor's Hammer",
    external_url: "https://forum.openzeppelin.com",
    image: "https://openmoji.org/data/color/svg/1F528.svg",
    name: "Thor's Hammer",
  },
  {
    description: "GameItems - Thor's Hammer",
    external_url: "https://forum.openzeppelin.com",
    image: "https://openmoji.org/data/color/svg/1F528.svg",
    name: "Thor's Hammer",
  },
  {
    description: "GameItems - Thor's Hammer",
    external_url: "https://forum.openzeppelin.com",
    image: "https://openmoji.org/data/color/svg/1F528.svg",
    name: "Thor's Hammer",
  },
];

export default ({ onItemClick }: PropsType) => {
  const [list, setList] = useState<any>([]);
  const web3 = useWeb3();

  useEffect(() => {
    (async () => {
      const list = await web3.tokenURIs();
      setList(list);
    })();
  }, []);

  console.log(list);

  return (
    <>
      <Title>Porpular Apps</Title>
      <List>
        {listData.map((item, id) => (
          <Item key={`${item.name}-${id}`} data={item} onItemClick={() => onItemClick(item, id)} />
        ))}
      </List>
    </>
  );
};
