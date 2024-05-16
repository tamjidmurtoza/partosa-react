import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/Index";
import BlogDetails from "./components/pages/BlogDetails";
import LayoutStyle2 from "./components/layout/LayoutStyle2";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />}/>
      </Route>

      <Route path="/" element={<LayoutStyle2/>}>
        <Route path="/blog/:blog-details" element={<BlogDetails />}/>
      </Route>

    </Routes>
  )
}
