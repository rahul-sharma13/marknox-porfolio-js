import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import Header from "./components/Header";
import StairTransition from "./components/StairTransition";
import PageTransition from "./components/PageTransition";
import About from "./routes/About";

const App = () => {
    return (
        <div className="font-montserrat">
            <Header />
            <StairTransition />
            <PageTransition>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </PageTransition>
        </div>
    );
};

export default App;
