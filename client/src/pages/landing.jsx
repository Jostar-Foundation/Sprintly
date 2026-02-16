const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">

      <h1 className="text-5xl font-bold mb-4">
        Sprintly
      </h1>

      <p className="text-lg mb-6 text-center max-w-md">
        Agile Project Management Platform for Modern Teams
      </p>

      <div className="flex gap-4">
        <a
          href="/app"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:opacity-90"
        >
          Get Started
        </a>

        <a
          href="/sign-in"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white/10"
        >
          Login
        </a>
      </div>

    </div>
  );
};

export default Landing;
