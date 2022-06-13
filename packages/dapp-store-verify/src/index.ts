import web3app from '../../../src/utils/web3app';

let initialized = false;

/**
 * @param appTokenId - The token id of the app
 * @returns Whether the verified consumer has bought the app
 */
export async function isAuthenticated(appTokenId: number): Promise<boolean>
{
    if (!initialized)
    {
        await web3app.init();
        initialized = true;
    }

    // TODO: remove after the underlying API is stable
    // @ts-ignore
    return web3app.verify(appTokenId);
}