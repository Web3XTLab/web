# DApp Store Verify

Utility for DApp developers to verify consumer permissions.

**The package is still under active development. Breaking changes may be introduced frequently.**

## Installation

With NPM:

```
npm install dapp-store-verify
```

or with Yarn:

```
yarn add dapp-store-verify
```

## Usage

```typescript
/**
 * @param appTokenId - The token id of the app
 * @returns Whether the verified consumer has bought the app
 */
async function isAuthenticated(appTokenId: number): Promise<boolean>
```

```js
import isAuthenticated from 'dapp-store-verify';
// or import {isAuthenticated} from 'dapp-store-verify';

isAuthenticated(263747)
    .then(result => console.log(result));
```