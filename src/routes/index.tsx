import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/pages/Home'

function CustomRoute({ isPrivate, ...rest }: any) {
  /* const authenticated = true;
 
   if (isPrivate && !authenticated) {
     return <Navigate to="/login" />
   }
 
   if (authenticated && rest.path === "/login") {
     return <Navigate to="/dashboard" />
   }
 */
  return <DefaultLayout {...rest} />
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CustomRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
