import { useAppStore } from '../../store/useAppStore';

export default function Login() {
  const { isLoginOpen, closeLogin } = useAppStore();

  return (
    <div
      className={`fixed top-0 w-full h-full bg-[var(--body-color)] z-[100] transition-all duration-300 ${
        isLoginOpen ? 'right-0' : '-right-full'
      } md:w-[450px] md:shadow-[-2px_0_4px_hsla(0,0%,15%,0.1)]`}
      id="login"
    >
      <i
        className="bx bx-x absolute top-[1.25rem] right-[1.25rem] text-2xl text-[var(--title-color)] cursor-pointer"
        onClick={closeLogin}
      ></i>

      <h2 className="text-center text-[var(--h2-font-size)] mt-12 mb-8">Login</h2>

      <form className="flex flex-col gap-6 px-8">
        <div className="flex flex-col gap-2">
          <label className="text-[var(--small-font-size)] text-[var(--title-color)] font-medium">E-mail</label>
          <input
            type="email"
            className="border bg-[var(--container-color)] text-[var(--text-color)] p-4 rounded-lg outline-none focus:border-[var(--first-color)] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-[var(--small-font-size)] text-[var(--title-color)] font-medium">Password</label>
          <input
            type="password"
            className="border bg-[var(--container-color)] text-[var(--text-color)] p-4 rounded-lg outline-none focus:border-[var(--first-color)] transition-colors"
          />
        </div>

        <div>
          <button type="button" className="w-full bg-[var(--first-color)] hover:bg-[#ff9900] text-white py-4 rounded-lg font-medium transition-colors">
            Sign in
          </button>
        </div>

        <div className="text-center mt-2">
          <p className="text-[var(--small-font-size)]">
            Not a member?{' '}
            <a href="/registration" className="text-[var(--first-color)] font-medium hover:underline">
              Sign up now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
