import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Success = lazy(() => import('@/pages/Success'))
const Home = lazy(() => import('@/pages/Home'))
const Resume = lazy(() => import('@/pages/Checkout/Resume'))
const DefaultLayout = lazy(() => import('@/layouts/DefaultLayout'))

function CustomRoute({ ...rest }: any) {
  return <DefaultLayout {...rest} />
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CustomRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Resume />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
