import { GraphQLClientSingleton } from "app/grahpql"
import { customerAccessTokenCreateMutation } from "app/grahpql/mutations/customerAccessTokenCreate"
import { cookies } from "next/headers"

export const createAccessToken = async (email:string, password:string) => {
    const cookiesStore = cookies()
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customerAccessTokenCreate } = await graphqlClient.request( customerAccessTokenCreateMutation, {
        "email": email,
        "password" : password

    })

    const {accessToken , expiresAt} = customerAccessTokenCreate?.customerAccessToken

    if(accessToken){
        cookiesStore.set("accessToken",accessToken ,{
            path:"/",
            expires:new Date( expiresAt ),
            httpOnly: true,
            sameSite:"strict"
        })
    }
    
}