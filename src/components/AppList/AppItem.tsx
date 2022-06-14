import styled from "styled-components";
import ReactStars from "react-stars";
import { PrimaryButton } from "@fluentui/react/lib/Button";

type PropsType = {
  data: Record<string, any>;
};

const ItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #edebe9;
  padding: 8px;
  width: 166px;
  justify-content: center;
  margin-right: 16px;
  margin-bottom: 12px;

  &:hover {
    opacity: 0.9;
  }
`;

const H4 = styled.h4`
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 150px;
`;

const StartsWrapper = styled.div`
  margin-bottom: 4px;
`;

export default ({ data }: PropsType) => {
  return (
    <ItemWrapper>
      <Image src={data.image} />
      <H4>{data.name}</H4>
      <StartsWrapper>
        <ReactStars count={5} value={3} size={12} edit={false} color2={"#ffd700"} />
      </StartsWrapper>
      <PrimaryButton>Get</PrimaryButton>
    </ItemWrapper>
  );
};
