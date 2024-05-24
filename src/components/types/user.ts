import { NewUser } from "../../generated/models/Graphs"

export type LoginUserType = {
  email: string,
  password: string
}

export type SignupUserType = {
  input: NewUser
}

type UserToken = {
  name: string,
  email: string
}

type Token = {
  accessToken: string,
  refreshToken: string
}

export type LoginToken = {
  auth: {
    login: {
      token: Token,
      user: UserToken
    }
  }
}

export type SignupToken = {
  auth: {
    register: {
      token: Token,
      user: UserToken
    }
  }
}
