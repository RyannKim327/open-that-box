import { Button } from "../ui/button";

function Header() {
  return (
    <header className="flex p-4 text-white border mx-auto max-w-[1500px] w-screen justify-between">
      <h1 className="text-2xl font-bold text-black mr-9">Acude.</h1>
      <div className="flex justify-center items-center">
        <nav>
            <ul className="flex space-x-4 text-black">
            <li><a href="/" className="hover:underline text-black">Home</a></li>
            <li><a href="/leaderboard" className="hover:underline text-black">Leaderboards</a></li>
            <li><a href="/courses" className="hover:underline text-black">Courses</a></li>
            <li><a href="/contest" className="hover:underline">Contest</a></li>
            <li><a href="/educators" className="hover:underline">Educators</a></li>
            <li><a href="/scholarships" className="hover:underline">Scholarships</a></li>
            </ul>
        </nav>
        <div className="flex items-center ml-8 justify-center">
            <Button className="ml-2 bg-[#f4f4f5] hover:bg-gray-700 text-black font-bold py-2 px-4 rounded mr-2">
                Login
            </Button>
            <Button className="text-white bg-black py-2 px-4 rounded font-bold">
                Create Account
            </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;