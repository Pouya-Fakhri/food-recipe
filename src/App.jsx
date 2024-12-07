import { Route, Router, Routes } from "react-router-dom"
import Layout from "./components/Layout"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
