import { jwtDecode } from 'jwt-decode'
import { createContext, useContext, useState } from 'react'
import { getAccessToken } from '../components/utils/auth'


type Actions = {
  canDo: string[] | null,
  cannotDo: string[] | null
}
type Payload = {
  name?: string | null,
  email?: string | null,
  actions?: Actions | null,
}
interface UserContextType {
  user?: Payload,
  setUser: (user?: Payload) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = (): UserContextType | undefined => {
  const context = useContext(UserContext)
  return context
}

interface UserProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProps> = ({ children }: UserProps) => {
  const accessToken: string | null = getAccessToken()
  let payload = undefined
  if (accessToken !== null){
    payload = jwtDecode<Payload>(accessToken)
  }
  const [user, setUser] = useState<Payload | undefined>(payload)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
