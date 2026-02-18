import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeAttendance, markAttendance } from "../../api/employees";
import AttendanceForm from "./AttendanceForm";
import AttendanceTable from "./AttendanceTable";
import Loader from "../../components/ui/Loader";
import EmptyState from "../../components/ui/EmptyState";
import ErrorState from "../../components/ui/ErrorState";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function EmployeeDetailsPage() {

  const { id } = useParams();

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const res = await getEmployeeAttendance(id);
      setRecords(res.data.data);
      setError("");
    } catch (e) {
      setError("Failed to load attendance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [id]);

  const handleMarkAttendance = async (data) => {
    await markAttendance(data);
    fetchAttendance();
  };

  return (
    <Card>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Employee Attendance</h1>
        <Link to="/">
          <Button className="bg-gray-600 hover:bg-gray-700">Back</Button>
        </Link>
      </div>

      <AttendanceForm employeeId={id} onMarked={handleMarkAttendance} />

      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {!loading && records.length === 0 && <EmptyState text="No attendance records" />}

      {!loading && records.length > 0 && (
        <AttendanceTable records={records} />
      )}

    </Card>
  );
}
