import { planqTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 34,
    vaultPid: 3,
    lpSymbol: 'PLANET-WPLQ LP',
    lpAddress: '0x283f8504552acCD0E0BFd9eE039c50e6A8Cb64c7',
    quoteToken: planqTestnetTokens.wplq,
    token: planqTestnetTokens.planet,
  },

].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
