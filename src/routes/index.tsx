import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/pages/Home'
import { Resume } from '@/pages/Checkout/Resume'
import { Success } from '@/pages/Success'

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
