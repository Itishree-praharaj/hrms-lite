import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function EmployeeTable({ employees, onDelete }) {
  return (
    <table className="w-full border rounded overflow-hidden">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="p-3">Employee ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Department</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id} className="border-t hover:bg-gray-50">
            <td className="p-3">{emp.employee_id}</td>
            <td className="p-3">{emp.full_name}</td>
            <td className="p-3">{emp.email}</td>
            <td className="p-3">{emp.department}</td>
            <td className="p-3 space-x-2">

              <Link to={`/employees/${emp.id}`}>
                <Button className="bg-gray-600 hover:bg-gray-700">
                  Details
                </Button>
              </Link>

              <Button
                className="bg-red-500 hover:bg-red-600"
                onClick={() => onDelete(emp.id)}
              >
                Delete
              </Button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
