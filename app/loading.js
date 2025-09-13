export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-500 rounded-full animate-spin"></div>
                </div>
                
                <p className="text-gray-600 text-sm font-medium">Loading...</p>
            </div>
        </div>
    )
}