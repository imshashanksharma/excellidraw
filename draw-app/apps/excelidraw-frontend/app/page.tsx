// src/app/page.tsx or app/page.tsx

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="py-4 border-b border-gray-100/50">
        <div className="container mx-auto flex justify-between items-center px-4">

          {/* Logo/Name */}
          <div className="text-3xl font-extrabold text-gray-900 tracking-tighter">
            ExceliDraw <span className="text-blue-600">App</span>
          </div>

          {/* Sign Up and Log In Options (Top Right) */}
          <nav className="flex items-center space-x-4">
            {/* Log In Button (Primary Action) */}
            <Link
              href="/signin"
              className="px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Sign In
            </Link>

            {/* Sign Up Button (Highlighted Action) */}
            <Link
              href="/signup"
              className="px-4 py-2 text-base font-medium bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          {/* Headline */}
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6 sm:text-7xl">
            Visualize Your Ideas, <br />
            Collaborate Seamlessly
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            The open-source whiteboard for sketching diagrams, wireframes, and collaborative drawing. Built with Next.js and Tailwind v4.
          </p>

          {/* Primary CTA */}
          <div className="flex justify-center space-x-4">
            <Link
              href="/dashboard"
              className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
            >
              Launch App
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 text-lg font-semibold border border-gray-300 text-gray-900 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100/50">
        <div className="container mx-auto text-center text-sm text-gray-500 px-4">
          &copy; {new Date().getFullYear()} ExceliDraw Clone. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 