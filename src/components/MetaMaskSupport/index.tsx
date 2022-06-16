import styled from 'styled-components';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { useCallback } from 'react';

const Wrapper = styled.div`
    padding: 24px;
`;

const MetaMaskSupport = () => {
    const handleClick = useCallback(() => {
        location.reload();
    }, []);

    return <Wrapper>
        <h1 style={{ marginBottom: 24 }}>Please log in to your MetaMask wallet</h1>
        <p>For more, please refer to <a rel="noreferrer" href="https://metamask.io/" target="_blank">MetaMask</a></p>
        <p>If you have already set up your wallet, you can try clicking the button below to try again.</p>
        <div style={{ marginTop: 24 }}>
            <PrimaryButton onClick={handleClick}>Retry</PrimaryButton>
        </div>
    </Wrapper>
};

export default MetaMaskSupport;
