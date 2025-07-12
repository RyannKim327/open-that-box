import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "@/pages/login/login-page";
import SignupPage from "@/pages/signup/signup-page"; // Updated import
import { Button } from "../ui/button";

function Header({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const openLoginDialog = () => setShowLogin(true);
    const openSignupDialog = () => setShowSignup(true);

    const handleLoginSuccess = () => {
        setShowLogin(false);
        onLoginSuccess();
        navigate('/dashboard');
    };

    const handleSignupSuccess = () => {
        setShowSignup(false);
        onLoginSuccess(); // Use the same callback since both should trigger login success
        navigate('/dashboard');
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after navigation
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white z-40 p-4 overflow-x-hidden">
            <header className="flex p-4 text-white mx-auto max-w-[1500px] justify-between items-center">
                <h2 className="text-3xl font-bold text-black mr-9">Acude.</h2>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-4 gap-2 text-black font-semibold">
                        <li>
                            <a 
                                href="#home" 
                                className="hover:text-gray-600"
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
                                href="#challenges"
                                className="hover:text-gray-600"
                                onClick={e => handleSmoothScroll(e, "challenges")}
                            >
                                Challenges
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contest"
                                className="hover:text-gray-600"
                                onClick={e => handleSmoothScroll(e, "contest")}
                            >
                                Contest
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="hidden md:flex items-center ml-8 justify-center gap-2">
                    <Button
                        onClick={openLoginDialog}
                        variant="outline"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={openSignupDialog}
                        variant="default"
                    >
                        Create Account
                    </Button>
                </div>
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden">
                        <nav className="flex flex-col p-4">
                            <ul className="flex flex-col space-y-4 text-black font-semibold mb-4">
                                <li>
                                    <a 
                                        href="#home" 
                                        className="block py-2 hover:text-gray-600"
                                        onClick={e => handleSmoothScroll(e, "home")}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#leaderboard" 
                                        className="block py-2 hover:text-gray-600"
                                        onClick={e => handleSmoothScroll(e, "leaderboard")}
                                    >
                                        Leaderboards
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#challenges"
                                        className="block py-2 hover:text-gray-600"
                                        onClick={e => handleSmoothScroll(e, "challenges")}
                                    >
                                        Challenges
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#contest"
                                        className="block py-2 hover:text-gray-600"
                                        onClick={e => handleSmoothScroll(e, "contest")}
                                    >
                                        Contest
                                    </a>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-2 pt-4 border-t">
                                <Button
                                    onClick={() => {
                                        openLoginDialog();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    variant="outline"
                                    className="w-full"
                                >
                                    Login
                                </Button>
                                <Button
                                    onClick={() => {
                                        openSignupDialog();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    variant="default"
                                    className="w-full"
                                >
                                    Create Account
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
                {showLogin && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="rounded-lg p-6 mx-auto my-8">
                            <LoginPage onLoginSuccess={handleLoginSuccess} />
                        </div>
                    </div>
                )}
                {showSignup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="rounded-lg p-6 mx-auto my-8">
                            <SignupPage onSignUpSuccess={handleSignupSuccess} />
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Header;