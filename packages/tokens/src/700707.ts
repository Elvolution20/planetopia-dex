import { ChainId, ERC20Token, WPLQ } from '@pancakeswap/sdk'
import { USDC_PLANQ_TESTNET } from './common'

export const planqTestnetTokens = {
  wplq: WPLQ[ChainId.PLANQ_TESTNET],
  planet: new ERC20Token(ChainId.PLANQ_TESTNET, '0x5D3c0F4cA5EE99f8E8F59Ff9A5fAb04F6a7e007f', 18, 'PLANET', 'Planetopia Token'),
  usdc: USDC_PLANQ_TESTNET,
}
