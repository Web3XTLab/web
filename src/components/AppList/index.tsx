import styled from "styled-components";
import Item from "./AppItem";

const List = styled.div`
  display: flex;
  margin-top: 12px;
`;

const Title = styled.h4`
  margin-top: 32px;
`;

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

export default () => {
  return (
    <>
      <Title>Porpular Apps</Title>
      <List>
        {listData.map((item) => (
          <Item data={item} />
        ))}
      </List>
    </>
  );
};
