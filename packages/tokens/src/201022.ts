import { ChainId, ERC20Token, WFON } from '@pancakeswap/sdk'
import { PLANET, USDT_FSC } from './common'

export const fscTokens = {
  wfon: WFON[ChainId.FSC],
  usdt: USDT_FSC,
  planet: PLANET,
}
