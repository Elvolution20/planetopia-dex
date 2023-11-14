import { planqTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: null,
    lpSymbol: 'WPLQ-USDC LP',
    lpAddress: '0xf5bf0C34d3c428A74Ceb98d27d38d0036C587200',
    quoteToken: planqTestnetTokens.usdc,
    token: planqTestnetTokens.wplq,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
