export default function Register(){

    return(
        <form action={userregister}>
            <div className="min-h-screen bg-white">
                <div className="flex min-h-screen">

                    <div className="hidden lg:flex lg:w-1/2 bg-black text-white flex-col justify-center items-center p-12">
                        <div className="max-w-md text-center">
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-black rounded-full"></div>
                                </div>
                            </div>
                            <h1 className="text-4xl font-light mb-6 tracking-wide">Join Us Today</h1>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Create your account and become part of our community. Start your journey with simplicity.
                            </p>
                            <div className="mt-12 flex justify-center space-x-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                        <div className="w-full max-w-md">

                            <div className="lg:hidden text-center mb-8">
                                <div className="w-12 h-12 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-white rounded-full"></div>
                                </div>
                                <h2 className="text-2xl font-light text-gray-900">Create Account</h2>
                            </div>

                            
                            <div className="hidden lg:block mb-8">
                                <h2 className="text-3xl font-light text-gray-900 mb-2">Create Account</h2>
                                <p className="text-gray-600">Fill in your information to get started</p>
                            </div>


                            <form className="space-y-6">
                                <div>
                                    <label for="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        UserName
                                    </label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                                        placeholder="Doe"
                                    />
                                </div>

                                <div>
                                    <label for="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                                        placeholder="john.doe@example.com"
                                    />
                                </div>

                                <div>
                                    <label for="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                                        placeholder="Create a strong password"
                                    />
                                </div>


                                <div className="flex items-start">
                                    <input 
                                        type="checkbox" 
                                        id="terms" 
                                        name="terms"
                                        required
                                        className="w-4 h-4 text-black border-gray-300 rounded-none focus:ring-black mt-1"
                                    />
                                    <label for="terms" className="ml-2 text-sm text-gray-600 leading-relaxed">
                                        I agree to the 
                                        <a href="#" className="text-black hover:text-gray-700 transition-colors duration-200">Terms of Service</a> 
                                        and 
                                        <a href="#" className="text-black hover:text-gray-700 transition-colors duration-200">Privacy Policy</a>
                                    </label>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-black text-white py-3 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200 font-medium tracking-wide"
                                >
                                    Create Account
                                </button>
                            </form>

                            <div className="mt-8 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-gray-50 text-gray-500">or sign up with</span>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200">
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                    </svg>
                                    <span className="text-gray-700 font-medium">Continue with Google</span>
                                </button>
                            </div>

                            <p className="mt-8 text-center text-sm text-gray-600">
                                Already have an account? 
                                <a href="#" className="text-black hover:text-gray-700 font-medium transition-colors duration-200">
                                    Sign in here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}