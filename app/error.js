"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          {/* Error Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          {/* Error Message */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Something went wrong
          </h2>
          
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>

          {/* Action Button */}
          <button 
            onClick={() => reset()}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try again
          </button>

          {/* Secondary Action */}
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full mt-3 text-gray-500 hover:text-gray-700 font-medium py-2 transition-colors duration-200"
          >
            Go back home
          </button>
        </div>
      </div>
    </div>
  )
}
