
import {BrowserRouter, Routes, Route} from "react-router"
import { PageComponents } from "./pages/page-components"
import { LayoutMain } from "./pages/layout-main"
import { Home } from "./pages/page-home"

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index path="/" element={<Home />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}