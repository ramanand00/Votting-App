import { Link } from "react-router-dom";
import { FaLock, FaRocket, FaUserSecret, FaCheckCircle, FaUserFriends, FaChartBar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-2xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl -z-20 -translate-x-1/2 -translate-y-1/2" />

      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 border-4 border-blue-200">
          <img
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/08b68af0c094f10502a870a7de9e234f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=4a8a73cf&x-expires=1752062400&x-signature=fM5nIEz4SLND%2BkqYIU9CahXmEmM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
            alt="VoteNow Logo"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-extrabold mb-2 text-blue-700 drop-shadow">
          Welcome to <span className="text-blue-500">VoteNow</span>
        </h1>
        <p className="text-lg text-gray-700 mb-4 text-center max-w-md">
          Cast your vote for your favorite candidate and make your voice heard!
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 backdrop-blur-md hover:scale-105 transition-transform">
          <FaLock className="text-blue-600 text-3xl mb-2 animate-bounce" />
          <span className="font-semibold text-blue-700">Secure</span>
          <span className="text-gray-500 text-sm text-center">
            Your vote is encrypted and protected.
          </span>
        </div>
        <div className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 backdrop-blur-md hover:scale-105 transition-transform">
          <FaRocket className="text-blue-600 text-3xl mb-2 animate-spin-slow" />
          <span className="font-semibold text-blue-700">Fast</span>
          <span className="text-gray-500 text-sm text-center">
            Instant results and smooth experience.
          </span>
        </div>
        <div className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 backdrop-blur-md hover:scale-105 transition-transform">
          <FaUserSecret className="text-blue-600 text-3xl mb-2 animate-pulse" />
          <span className="font-semibold text-blue-700">Anonymous</span>
          <span className="text-gray-500 text-sm text-center">
            We never track your identity.
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        <div className="flex flex-col items-center">
          <FaUserFriends className="text-blue-500 text-3xl mb-1" />
          <span className="text-2xl font-bold text-blue-700">10,000+</span>
          <span className="text-gray-500 text-sm">Voters</span>
        </div>
        <div className="flex flex-col items-center">
          <FaChartBar className="text-blue-500 text-3xl mb-1" />
          <span className="text-2xl font-bold text-blue-700">50+</span>
          <span className="text-gray-500 text-sm">Elections</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-blue-500 text-3xl mb-1" />
          <span className="text-2xl font-bold text-blue-700">100%</span>
          <span className="text-gray-500 text-sm">Verified Results</span>
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-white/80 rounded-xl shadow-lg px-8 py-6 mb-10 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><span className="font-semibold text-blue-600">Register</span> or log in to your account.</li>
          <li><span className="font-semibold text-blue-600">Select</span> the election you want to participate in.</li>
          <li><span className="font-semibold text-blue-600">Vote</span> for your favorite candidate securely and anonymously.</li>
          <li><span className="font-semibold text-blue-600">View</span> instant results after voting closes.</li>
        </ol>
      </div>

      {/* Testimonials */}
      <div className="mb-10 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">What Our Users Say</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white/80 rounded-lg shadow p-4 flex-1">
            <p className="italic text-gray-600">"VoteNow made voting so easy and secure. Highly recommended!"</p>
            <span className="block mt-2 text-blue-600 font-semibold">- Priya S.</span>
          </div>
          <div className="bg-white/80 rounded-lg shadow p-4 flex-1">
            <p className="italic text-gray-600">"I love the instant results and the privacy features."</p>
            <span className="block mt-2 text-blue-600 font-semibold">- Ahmed K.</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <Link
        to="/vote"
        className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-colors text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 active:scale-95 mb-8"
      >
        Start Voting
      </Link>

      {/* Footer or tagline */}
      <div className="absolute bottom-6 text-gray-400 text-sm text-center w-full">
        &copy; {new Date().getFullYear()} VoteNow &mdash; Secure. Fast. Anonymous.
      </div>

      {/* Custom animation for slow spin */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
