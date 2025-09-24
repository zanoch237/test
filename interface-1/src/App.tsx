import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-gray-800 font-semibold text-lg">
          YourCompany.
        </div>
        <div className="hidden md:flex space-x-8 text-gray-600 text-sm">
          <a href="#" className="hover:text-gray-800">Home</a>
          <a href="#" className="hover:text-gray-800">Profile</a>
          <a href="#" className="hover:text-gray-800">About</a>
          <a href="#" className="hover:text-gray-800">Help</a>
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
          Sign Up
        </button>
      </nav>

      {/* Contenu du main */}
  <div className="flex items-end justify-between px-8 mt-16 relative h-full">
    <div className="max-w-lg z-10">
          <h1 className="text-6xl font-bold text-black mb-4 leading-tight">
            UI Kit<br />
            Landing Page
          </h1>
          
          <h2 className="text-pink-500 text-lg font-medium mb-4">
            Free Landing UI Kit
          </h2>
          
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            Our services will make your website unique,<br />
            modern and stylish.
          </p>
          
          <button className="bg-white hover:bg-gray-50 text-black px-8 py-3 rounded-lg font-medium mb-12 shadow-lg">
            Join Us Now
          </button>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Twitter size={20} className="text-black hover:text-pink-500 cursor-pointer" />
            <Linkedin size={20} className="text-black hover:text-pink-500 cursor-pointer" />
            <Facebook size={20} className="text-black hover:text-pink-500 cursor-pointer" />
            <Instagram size={20} className="text-pink-500 hover:text-pink-600 cursor-pointer" />
          </div>
        </div>

        {/* UI Cards */}
        <div className="flex flex-col justify-end h-full">
          <div className="grid grid-cols-2 gap-8 py-8 ml-32">
            {/* First Card  */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform -rotate-[12deg] w-full max-w-xs mx-auto">
              <div className="text-gray-800 font-semibold mb-4">Choose Your Design</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>

            {/* 5eme Card - Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform -rotate-[12deg] w-full max-w-xs mx-auto">
              <div className="text-gray-800 font-semibold mb-2">Contact Info</div>
              <div className="text-gray-500 text-xs leading-relaxed">
                             Our services will make your website unique,              </div>
            </div>

            {/* 4eme Card  */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform -rotate-[12deg] w-full max-w-xs mx-auto">
              <div className="text-gray-800 font-semibold mb-3">Achieve </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tache 1</span>
                  <span className="text-pink-500">✓</span>
                </div>
                <div className="w-full bg-pink-500 rounded-full h-2"></div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tache 2</span>
                  <span className="text-pink-500">✓</span>
                </div>
                <div className="w-full bg-pink-500 rounded-full h-2"></div>
              </div>
            </div>

            {/* COPIE Card - Profile */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform -rotate-[12deg] w-full max-w-xs mx-auto">
              <div className="text-gray-800 font-semibold mb-2">Profile</div>
              <div className="text-gray-500 text-sm mb-3">Logo</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-pink-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>

            {/* 3eme Card - Profile */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform -rotate-[12deg] w-full max-w-xs mx-auto">
              <div className="text-gray-800 font-semibold mb-2">Profile</div>
              <div className="text-gray-500 text-sm mb-3">Logo</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-pink-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>

            {/* 6eme Card - Gallery List */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform -rotate-[12deg] w-full max-w-xs mx-auto">
              <div className="text-gray-800 font-semibold mb-3">Gallery List</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">26</span>
                  <div className="w-20 bg-pink-500 rounded-full h-2"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">14</span>
                  <div className="w-16 bg-pink-400 rounded-full h-2"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">25</span>
                  <div className="w-24 bg-pink-500 rounded-full h-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;