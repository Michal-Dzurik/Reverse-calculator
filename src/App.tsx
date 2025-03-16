import {Route, Routes} from "react-router-dom";
import About from "./routes/About.tsx";
import Navigation from "./components/Navigation.tsx";
import NotFound from "./routes/404.tsx";
import Calculator from "./routes/Calculator.tsx";

function App() {

  return (
    <>
        <Navigation />
        <div className='px-8 py-6 w-full'>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </>
  )
}

export default App
