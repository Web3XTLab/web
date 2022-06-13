import web3app from '../../../src/utils/web3app';

let initialized = false;

/**
 * @param appTokenId - The token id of the app
 * @param consumerAddress - The address of the verified consumer 
 * @returns Whether the verified consumer has bought the app
 */
export async function isAppBuyer(appTokenId: number, consumerAddress: number): Promise<boolean>
{
    if (!initialized)
    {
        await web3app.init();
        initialized = true;
    }

    // TODO: remove after the underlying API is stable
    // @ts-ignore
    return web3app.verify(appTokenId, consumerAddress);
}