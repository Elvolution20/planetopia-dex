import { baseTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 34,
    vaultPid: 3,
    lpSymbol: 'PLANET-WETH LP',
    lpAddress: '0x283f8504552acCD0E0BFd9eE039c50e6A8Cb64c7',
    quoteToken: baseTestnetTokens.weth,
    token: baseTestnetTokens.celr,
  },
  {
    pid: 23,
    vaultPid: 3,
    lpSymbol: 'LEET-WETH LP',
    lpAddress: '0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109',
    quoteToken: baseTestnetTokens.weth,
    token: baseTestnetTokens.leet,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
