const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Your Name</label>
                    <input
                        type="text"
                        placeholder="First and last name"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="At least 6 characters"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Re-enter Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                >
                    Continue
                </button>

                <p className="text-xs text-gray-600 mt-4">
                    By continuing, you agree to Amazon's{" "}
                    <span className="text-blue-500 cursor-pointer">Conditions of Use</span> and{" "}
                    <span className="text-blue-500 cursor-pointer">Privacy Notice</span>.
                </p>
            </form>
        </div>
    );
};

export default SignUp;
