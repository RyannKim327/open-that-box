import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "@/pages/login/login-page";
import SignupPage from "@/pages/signup/signup-page";
import { Button } from "../ui/button";

function Header({
    onLoginSuccess = () => { },
}: {
    onLoginSuccess?: () => void;
}) {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openLoginDialog = () => setShowLogin(true);
    const openSignupDialog = () => setShowSignup(true);

    const handleLoginSuccess = () => {
        setShowLogin(false);
        onLoginSuccess();
        useNavigate;
    };

    const handleSignupSuccess = () => {
        setShowSignup(false);
        onLoginSuccess();
        useNavigate;
    };

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string,
    ) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white z-40 shadow-sm">
            <header className="flex items-center justify-between p-4 mx-auto max-w-[1500px]">
                <h2 className="text-2xl md:text-3xl font-bold text-black flex-shrink-0">
                    Acude.
                </h2>

                <nav className="hidden lg:flex items-center space-x-6">
                    <ul className="flex space-x-6 text-black font-semibold">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-gray-600 transition-colors"
                                onClick={(e) => handleSmoothScroll(e, "home")}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#leaderboard"
                                className="hover:text-gray-600 transition-colors"
                                onClick={(e) => handleSmoothScroll(e, "leaderboard")}
                            >
                                Leaderboards
                            </a>
                        </li>
                        <li>
                            <a
                                href="#challenges"
                                className="hover:text-gray-600 transition-colors"
                                onClick={(e) => handleSmoothScroll(e, "challenges")}
                            >
                                Challenges
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contest"
                                className="hover:text-gray-600 transition-colors"
                                onClick={(e) => handleSmoothScroll(e, "contest")}
                            >
                                Contest
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="hidden sm:flex items-center space-x-2 flex-shrink-0">
                    <Button
                        onClick={openLoginDialog}
                        variant="outline"
                        className="text-sm px-4 py-2"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={openSignupDialog}
                        variant="default"
                        className="text-sm px-4 py-2"
                    >
                        Create Account
                    </Button>
                </div>

                <button
                    className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    ></span>
                </button>
            </header>
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
                    <nav className="px-4 py-4">
                        <ul className="space-y-4 text-black font-semibold">
                            <li>
                                <a
                                    href="#home"
                                    className="block hover:text-gray-600 transition-colors py-2"
                                    onClick={(e) => handleSmoothScroll(e, "home")}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#leaderboard"
                                    className="block hover:text-gray-600 transition-colors py-2"
                                    onClick={(e) => handleSmoothScroll(e, "leaderboard")}
                                >
                                    Leaderboards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#challenges"
                                    className="block hover:text-gray-600 transition-colors py-2"
                                    onClick={(e) => handleSmoothScroll(e, "challenges")}
                                >
                                    Challenges
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contest"
                                    className="block hover:text-gray-600 transition-colors py-2"
                                    onClick={(e) => handleSmoothScroll(e, "contest")}
                                >
                                    Contest
                                </a>
                            </li>
                        </ul>

                        {/* Mobile Auth Buttons */}
                        <div className="mt-6 space-y-3 sm:hidden">
                            <Button
                                onClick={openLoginDialog}
                                variant="outline"
                                className="w-full"
                            >
                                Login
                            </Button>
                            <Button
                                onClick={openSignupDialog}
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
                <div className="fixed flex inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    {/* <div className="bg-white rounded-lg p-6 w-full content-border max-h-[90vh] overflow-y-auto"> */}
                    <LoginPage onLoginSuccess={handleLoginSuccess} />
                    {/* </div> */}
                </div>
            )}
            {showSignup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <SignupPage onSignUpSuccess={handleSignupSuccess} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
