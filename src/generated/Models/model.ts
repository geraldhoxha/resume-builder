import { gql } from "@apollo/client";

export const UserLogin = gql`mutation UserLogin($email:String!,$password: String!){
  auth{
    login(email:$email, password: $password)
  }
}`
