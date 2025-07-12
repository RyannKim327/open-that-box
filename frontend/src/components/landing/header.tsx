import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "@/pages/login-page";
import { Button } from "../ui/button";

function Header({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const openLoginDialog = () => setShowLogin(true);

    const handleLoginSuccess = () => {
        setShowLogin(false);
        onLoginSuccess();
        navigate('/dashboard');
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white z-40 p-4 overflow-x-hidden">
            <header className="flex p-4 text-white mx-auto max-w-[1500px] justify-between">
                <h2 className="text-3xl font-bold text-black mr-9">Acude.</h2>
                <nav className="flex items-center space-x-4">
                    <ul className="flex space-x-4 gap-2 text-black font-semibold">
                        <li>
                            <a 
                                href="#home" 
                                onClick={e => handleSmoothScroll(e, "home")}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#leaderboard" 
                                className="hover:text-gray-600"
                                onClick={e => handleSmoothScroll(e, "leaderboard")}
                            >
                                Leaderboards
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#courses"
                                onClick={e => handleSmoothScroll(e, "courses")}
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contest"
                                onClick={e => handleSmoothScroll(e, "contest")}
                            >
                                Contest
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#educators"
                                onClick={e => handleSmoothScroll(e, "educators")}
                            >
                                Educators
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#scholarships"
                                onClick={e => handleSmoothScroll(e, "scholarships")}
                            >
                                Scholarships
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center ml-8 justify-center gap-2">
                    <Button
                        onClick={openLoginDialog}
                        variant="outline"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={openLoginDialog}
                        variant="default"
                    >
                        Create Account
                    </Button>
                </div>
                {showLogin && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full mx-auto my-8">
                            <Button
                                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                                onClick={() => setShowLogin(false)}
                                variant="ghost"
                                size="sm"
                            >
                                ✕
                            </Button>
                            <LoginPage onLoginSuccess={handleLoginSuccess} />
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Header;