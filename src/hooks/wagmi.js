import { Provider, chain} from 'wagmi'

import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { configureChains, createClient, defaultChains } from 'wagmi'

import { Buffer } from "buffer";

if (!window.Buffer) {
  window.Buffer = Buffer;
}
const infuraId = "d825deabe0454bbe8223e500dd8dd785"




const { chains } = configureChains(defaultChains, [
  infuraProvider({ infuraId }),
  publicProvider(),
])

export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    
  ],
})