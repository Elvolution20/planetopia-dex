import { ChainId, ERC20Token, WFON } from '@pancakeswap/sdk'
import {  PLANET_FSC, USDT_FSC } from './common'

export const fscTokens = {
  wfon: WFON[ChainId.FSC],
  usdt: USDT_FSC,
  planet: PLANET_FSC,
}
