import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const activeHash = location.hash || "#home"; // Default to home
  const [isOpen, setIsOpen] = useState(false);

  // Simulated user data (replace with actual authentication logic)
  const user = {
    isLoggedIn: true, // Change to false to test "Sign In" button
    name: "Harendra Singh Negi",
    profilePic: "", // If empty, initials will be shown instead
  };

  // Get user initials if no profile picture is available
  const getInitials = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Mail className="h-8 w-8" />
            <span className="ml-2 font-bold text-xl">Logo</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-8 w-8 text-red-500" /> : <Menu className="h-8 w-8 text-red-500" />}
          </button>

          {/* Navigation for Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {["#home", "#gallery", "#services", "#admission", "#contact"].map((hash) => (
              <Link
                key={hash}
                to={hash}
                className={`text-gray-700 hover:text-gray-900 transition-colors ${activeHash === hash ? "text-red-500 font-semibold" : ""
                  }`}
              >
                {hash.replace("#", "").charAt(0).toUpperCase() + hash.slice(2)}
              </Link>
            ))}
          </nav>

          {/* Profile or Sign In Button (Desktop) */}
          <div className="hidden md:flex items-center">
            {user.isLoggedIn ? (
              // Show Profile Picture or Initials
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold overflow-hidden">
                {user.profilePic ? (
                  <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-lg text-gray-700">{getInitials(user.name)}</span>
                )}
              </div>
            ) : (
              // Show Sign In Button
              <Link
                to="/login"
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 w-full">
            {/* Mobile Menu Links */}
            {["#home", "#gallery", "#services", "#admission", "#contact"].map((hash) => (
              <Link
                key={hash}
                to={hash}
                className={`block py-2 text-gray-700 hover:text-red-500 ${activeHash === hash ? "text-red-500 font-semibold" : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {hash.replace("#", "").charAt(0).toUpperCase() + hash.slice(2)}
              </Link>
            ))}
            {/* User Profile Inside Mobile Menu */}
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-3 border-b pb-3 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold overflow-hidden">
                  {user.profilePic ? (
                    <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-lg text-gray-700">{getInitials(user.name)}</span>
                  )}
                </div>
                <span className="font-semibold text-gray-700">{user.name}</span>
              </div>
            ) : (
              <Link
                to="/login"
                className="block bg-red-500 text-white px-6 py-2 rounded-full text-center mb-3 hover:bg-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
