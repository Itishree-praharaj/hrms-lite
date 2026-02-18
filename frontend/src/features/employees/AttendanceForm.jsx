import { useState } from "react";
import Button from "../../components/ui/Button";

export default function AttendanceForm({ employeeId, onMarked }) {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("PRESENT");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!date) return alert("Select date");

    setLoading(true);
    try {
      await onMarked({
        employee: employeeId,
        date,
        status,
      });
      setDate("");
    } catch (err) {
    //   alert(err.response?.data?.message || "Failed to mark attendance");
        console.log(err);
        
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-3 items-end border p-4 rounded bg-gray-50 mb-4">

      <div>
        <label className="text-sm">Date</label>
        <input
          type="date"
          className="border p-2 block"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm">Status</label>
        <select
          className="border p-2 block"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="PRESENT">Present</option>
          <option value="ABSENT">Absent</option>
        </select>
      </div>

      <Button onClick={submit} disabled={loading}>
        {loading ? "Saving..." : "Mark Attendance"}
      </Button>
    </div>
  );
}
