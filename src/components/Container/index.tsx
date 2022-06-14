import { FC } from 'react';
import styled from 'styled-components';

const NormalLayout = styled.div`
    display: flex;
    overflow-x: scroll;
    padding: 40px 72px;
    width: 1440px;
`;

const Layout: FC = (props) => {
    return <NormalLayout>{props.children}</NormalLayout>;
}

export default Layout;