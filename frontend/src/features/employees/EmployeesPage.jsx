import { useEffect, useState } from "react";
import { getEmployees, createEmployee, deleteEmployee } from "../../api/employees";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeModal from "./AddEmployeeModal";
import Loader from "../../components/ui/Loader";
import EmptyState from "../../components/ui/EmptyState";
import ErrorState from "../../components/ui/ErrorState";
import Card from "../../components/ui/Card";

export default function EmployeesPage() {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await getEmployees();
      setEmployees(res.data.data);
      setError("");
    } catch (e) {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleCreate = async (data) => {
    try {
      await createEmployee(data);
      fetchEmployees();
    } catch (e) {
    //   alert(e.response?.data?.message || "Creation failed");
    console.log(e);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete employee?")) return;
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <Card>
      <h1 className="text-xl font-semibold mb-4">Employees</h1>

      <AddEmployeeModal onCreate={handleCreate} />

      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {!loading && employees.length === 0 && <EmptyState text="No employees found" />}

      {!loading && employees.length > 0 && (
        <EmployeeTable employees={employees} onDelete={handleDelete} />
      )}

    </Card>
  );
}
