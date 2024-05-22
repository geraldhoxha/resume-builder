import { createContext, useContext, useState } from 'react'


type Actions = {
  canDo: string[],
  cannotDo: string[]
}

type User = {
  Name: string,
  Email: string,
  Actions?: Actions
}
interface UserContextType {
  user?: User,
  setUser: (user: User) => void
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
  const [user, setUser] = useState<User | undefined>(undefined)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
