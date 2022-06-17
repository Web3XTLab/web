import styled from 'styled-components';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { useCallback } from 'react';

export type ErrorType = "none" | "network" | "wallet";

type PropsType = {
    type: ErrorType;
}

const Wrapper = styled.div`
    padding: 24px;
`;

const infoDataMap = {
    none: {
        title: '',
        desc: '',
    },    
    network: {
        title: 'Unsupported Network',
        desc: `<p>Currently does not support the current Ethereum network, please switch to Ropsten.</p>`,
    }, 
    wallet: {
        title: 'Please Login To Your MetaMask Wallet',
        desc: `<p>For more, please refer to <a rel="noreferrer" href="https://metamask.io/" target="_blank">MetaMask</a></p>
        <p>If you have already set up your wallet, you can try clicking the button below to try again.</p>`,
    }, 
}

const MetaMaskSupport = ({ type }: PropsType) => {
    const handleClick = useCallback(() => {
        location.reload();
    }, []);

    const infoData = infoDataMap[type];

    return <Wrapper>
        <h1 style={{ marginBottom: 24 }}>{infoData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: infoData.desc}} />
        <div style={{ marginTop: 24 }}>
            <PrimaryButton onClick={handleClick}>Retry</PrimaryButton>
        </div>
    </Wrapper>
};

export default MetaMaskSupport;
