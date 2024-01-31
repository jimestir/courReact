import { UserContext } from './UserContext'
import { useState } from 'react'
// const user = {
//   name: 'jimmy',
//   NIE: 'Z0155075Z'
// }
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  return (
    // <UserContext.Provider value={user}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
