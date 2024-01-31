import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'
export const MainApp = () => {
  return (
    <>
      <UserProvider>
        <h1 className=''>MainApp</h1>
        {/* <Link to='/'>Home</Link>
      <Link to='/Login'>Login</Link>
      <Link to='/About'>About</Link>
      <hr />
      <a href='/'>Home</a>
      <a href='/Login'>Login</a>
      <a href='/About'>About</a> */}
        <NavBar />
        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/About' element={<AboutPage />} />

          {/* <Route path='/*' element={<LoginPage />} /> */}
          <Route path='/*' element={<Navigate to='/about' />} />
        </Routes>
      </UserProvider>
    </>
  )
}
