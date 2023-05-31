import { createElement, useState } from "react"
import About from "./pages/about"
import Examples from "./pages/example"
import Intro from "./pages/intro"
import Landing from "./pages/landing"

const pageMap = {
  Landing: Landing,
  About: About,
  Intro: Intro,
  Examples: Examples,
}

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing")
  return createElement(pageMap[currentPage], { setCurrentPage })
}

export default App
