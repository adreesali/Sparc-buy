import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";

function App() {
    return (
        <>
        <Header />
        <main className="min-h-[calc(100vh-120px)]">
            <Outlet />
        </main>
        <Footer />
        </>
    );
}

export default App;
