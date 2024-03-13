import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import AgeCalculator from "./pages/AgeCalculator/AgeCalculator";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/age" element={<AgeCalculator />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
