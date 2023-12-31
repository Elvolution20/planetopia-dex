import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const FSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://fsc-dataseed1.fonscan.io'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const fscRpcProvider = new StaticJsonRpcProvider(FSC_PROD_NODE)


export default null
