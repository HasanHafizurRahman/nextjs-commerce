import { GetAPISchema, createEndpoint } from '@vercel/commerce/api'
import customerEndpoint from '@vercel/commerce/api/endpoints/customer'
import type { CustomerSchema } from '@vercel/commerce/types/customer'
import type { KiboCommerceAPI } from '../..'
import getLoggedInCustomer from './customer'

export type CustomerAPI = GetAPISchema<KiboCommerceAPI, CustomerSchema>

export type CustomerEndpoint = CustomerAPI['endpoint']

export const handlers: CustomerEndpoint['handlers'] = { getLoggedInCustomer }

const customerApi = createEndpoint<CustomerAPI>({
  handler: customerEndpoint,
  handlers,
})

export default customerApi
