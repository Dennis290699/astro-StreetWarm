import { useAppStore } from '../../store/useAppStore';

export default function Login() {
  const { isLoginOpen, closeLogin } = useAppStore();

  return (
    <>
      {/* OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isLoginOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeLogin}
        aria-hidden="true"
      />

      {/* LOGIN PANEL */}
      <div
        className={`fixed top-0 right-0 w-[90%] sm:w-[450px] h-full bg-white z-[101] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${
          isLoginOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="login"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-2xl font-black uppercase tracking-widest text-[var(--title-color)] flex items-center gap-3">
            <i className="bx bx-user-circle text-3xl text-[var(--first-color)]"></i> 
            Sign In
          </h2>
          <button
            className="text-3xl text-gray-400 hover:text-red-500 transition-colors"
            onClick={closeLogin}
            title="Close Login"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* FORMS */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-[var(--title-color)] mb-2">Welcome Back!</h3>
            <p className="text-sm text-gray-500">Sign in to access your account and manage your orders.</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="emailInput" className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <i className="bx bx-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
                <input
                  id="emailInput"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full border-2 border-gray-100 bg-gray-50 text-[var(--title-color)] p-4 pl-12 rounded-xl outline-none focus:border-[var(--first-color)] focus:bg-white transition-all"
                  title="Email Address"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <div className="flex justify-between items-center">
                <label htmlFor="passwordInput" className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wide">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-[var(--first-color)] hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <i className="bx bx-lock-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
                <input
                  id="passwordInput"
                  type="password"
                  placeholder="••••••••"
                  className="w-full border-2 border-gray-100 bg-gray-50 text-[var(--title-color)] p-4 pl-12 rounded-xl outline-none focus:border-[var(--first-color)] focus:bg-white transition-all"
                  title="Password"
                />
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="w-full bg-[var(--title-color)] text-white py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-300 hover:bg-[var(--first-color)] hover:shadow-lg hover:shadow-[var(--first-color)]/30 hover:-translate-y-1">
                Sign In
              </button>
            </div>
          </form>

          <div className="text-center mt-10 border-t border-gray-100 pt-8">
            <p className="text-sm text-gray-500 font-medium">
              New to StreetWarm?{' '}
              <a href="/registration" className="text-[var(--first-color)] font-bold hover:underline ml-1">
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
