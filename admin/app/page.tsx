import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-48 h-48 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kotlin_logo_%282021-present%29.svg/1024px-Kotlin_logo_%282021-present%29.svg.png"
              className="w-[90%] object-contain h-full"
              alt="kotlin"
            />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            API data Management Kotlin project
          </h1>
          <p className="text-gray-600">Welcome back</p>
        </div>

        <Link
          href="/feature/dashboard"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          Dashboard
        </Link>
      </div>
    </div>
  );
}
