import { gql } from "@apollo/client";

export const UserLogin = gql`mutation UserLogin($email:String!,$password: String!){
  auth{
    login(email:$email, password: $password){
      token{
        accessToken
        refreshToken
      }
      user{
        name
        email
      }
    }
  }
}`

export const UserSignup = gql`mutation UserSignup($input: NewUser!){
  auth{
    register(input: $input){
      token{
        accessToken
        refreshToken
      }
      user{
        name
        email
      }
    } 
  }
}`

export const ELTest = gql`query test{
  protected
}`
