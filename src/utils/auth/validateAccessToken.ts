import { GraphQLClientSingleton } from "app/grahpql"
import { customerName } from "app/grahpql/queries/customerName"
import { cookies } from "next/headers"

export const validateAccessToken = async () => {
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get("accessToken")?.value
    const graphqlClient= GraphQLClientSingleton.getInstance().getClient()

    const { customer } = await graphqlClient.request( customerName,{
        customerAccessToken:accessToken
    })
    return customer
}