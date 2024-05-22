import type { CodegenConfig } from "@graphql-codegen/cli"

const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiYjZjOWU5LWJmOGQtNDIzMy05YWM2LWVkMjA4OWI3YTQxNSIsIm5hbWUiOiJnIiwiZXhwIjoxNzE2MTgzNzU0LCJpYXQiOjE3MTYxODAxNTR9.JWwFIILdzIc-ZiniYZupucew5iIyUNkxsaZUpXiwQZ4'
const config: CodegenConfig = {
  schema: {
    "http://localhost:8080/query": {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  },
  generates: {
    "src/generated/models/Graphs.ts": {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true
      }
    }
  }
}

export default config
