import type { CodegenConfig } from "@graphql-codegen/cli"

const token: string = ''
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
