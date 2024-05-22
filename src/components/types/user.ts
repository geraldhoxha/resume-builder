export type LoginUserType = {
  email: string,
  password: string
}

export type LoginToken = {
  auth: {
    login: {
      token: {
        accessToken: string,
        refreshToken: string
      }
    }
  }
}
