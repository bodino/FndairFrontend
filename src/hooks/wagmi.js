import { Provider, chain} from 'wagmi'

import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { configureChains, createClient, defaultChains } from 'wagmi'
import {
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";

import { Buffer } from "buffer";

if (!window.Buffer) {
  window.Buffer = Buffer;
}
const infuraId = "d825deabe0454bbe8223e500dd8dd785"




export const { chains } = configureChains([chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum], [

  infuraProvider({ infuraId }),
  publicProvider(),
])

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

export const client = createClient({
  autoConnect: true,
  connectors,
})






