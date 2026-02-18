import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r">
        <div className="p-4 text-xl font-semibold border-b">HRMS Lite</div>

        <nav className="p-4 space-y-2">

        <Link
            to="/"
            className="block p-2 rounded hover:bg-gray-100"
        >
            Dashboard
        </Link>

        <Link
            to="/employees"
            className="block p-2 rounded hover:bg-gray-100"
        >
            Employees
        </Link>

        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
