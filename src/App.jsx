import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import About from "./components/About";
import Newsletter from './components/Newsletter'
import Error from './components/Error'
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="newsletter" element={<Newsletter/>}/>
          <Route path="cocktail/:cocktailId" element={<Detail/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
