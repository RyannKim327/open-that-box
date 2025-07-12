import { useState } from "react";
import LoginPage from "@/pages/login-page";
import Dashboard from "@/pages/dashboard/dashboard";
import { Button } from "../ui/button";

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const openLoginDialog = () => setShowLogin(true);

    if (loggedIn) {
        return <Dashboard />;
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-white z-40">
            <header className="flex p-4 text-white mx-auto max-w-[1500px] justify-between">
                <h2 className="text-3xl font-bold text-black mr-9">Acude.</h2>
                <div className="flex justify-center items-center">
                    <nav className="flex items-center space-x-4">
                        <ul className="flex space-x-4 gap-2 text-black font-semibold">
                            <li><a href="/" className="">Home</a></li>
                            <li><a href="/leaderboard" className="">Leaderboards</a></li>
                            <li><a href="/courses" className="">Courses</a></li>
                            <li><a href="/contest" className="">Contest</a></li>
                            <li><a href="/educators" className="">Educators</a></li>
                            <li><a href="/scholarships" className="">Scholarships</a></li>
                        </ul>
                    </nav>
                    <div className="flex items-center ml-8 justify-center gap-2">
                        <Button
                            onClick={openLoginDialog}
                        >
                            Login
                        </Button>
                        <Button
                            onClick={openLoginDialog}
                            variant={"outline"}
                        >
                            Create Account
                        </Button>
                    </div>
                </div>
                {showLogin && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 relative">
                            <Button
                                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                                onClick={() => setShowLogin(false)}
                                aria-label="Close"
                            >
                                &times;
                            </Button>
                            <LoginPage onLoginSuccess={() => {
                                setShowLogin(false);
                                setLoggedIn(true);
                            }} />
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Header;