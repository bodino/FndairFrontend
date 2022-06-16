import { useConnect, useAccount } from 'wagmi'
import '../ui/dropdowns';
import { LinkBreak2Icon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdowns';
var x = 0;
var walletarray = [3];


export const Connected = () => {
  const [{ data, error }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
 

  data.connectors[0].logo = "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg";
  data.connectors[1].logo = "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/svg/original/walletconnect-logo.svg"
  data.connectors[2].logo = "https://avatars.githubusercontent.com/u/18060234?s=200&v=4"
  
  return (
    <div>
    {/* <img src={accountData.ens?.avatar} alt="ENS Avatar" />
    <div>
      {accountData.ens?.name
        ? `${accountData.ens?.name} (${accountData.address})`
        : accountData.address}
    </div>
    <div>Connected to {accountData.connector.name}</div>
    <button onClick={disconnect}>Disconnect</button> */}
  </div>
    
  )
}

export default Connected;
