"use server"
import { GraphQLClientSingleton } from "app/grahpql";
import { createUserMutation } from "app/grahpql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccessToken";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+52' + formDataObject.phone
    }
  }

  try {
    const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
    const { customer } = customerCreate
    if (customer?.firstName) {
      await createAccessToken(formDataObject.email as string, formDataObject.password as string)
      
        redirect('/store')
    }
  } catch (error) {
    console.error("Error al crear el cliente:", error)
  }
}
