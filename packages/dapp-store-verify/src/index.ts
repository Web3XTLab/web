import web3app from '@/src/utils/web3app';

let initialized = false;

/**
 * @param appTokenId - The token id of the app
 * @returns Whether the verified consumer has bought the app
 */
export async function isAuthenticated(appTokenId: string): Promise<boolean>
{
    if (!initialized)
    {
        await web3app.init();
        initialized = true;
    }

    return web3app.verify(appTokenId);
}

export default isAuthenticated;