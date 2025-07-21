import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="flex items-center justify-center px-4 md:px-8"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div
        className="backdrop-blur-lg bg-white/10 border border-gray-200 shadow-md rounded-2xl p-6 md:p-10 w-full text-center flex flex-col justify-center"
        style={{
          maxWidth: "1000px",
          minHeight: "500px",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Simplify Your <span className="text-blue-600">Smart</span> Living
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-16">
          Control, monitor, and automate your home — all from one intuitive
          dashboard.
        </p>
        <div className="space-x-4">
          <Link
            to="/logout"
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
