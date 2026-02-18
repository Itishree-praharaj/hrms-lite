import dayjs from "dayjs";

export default function AttendanceTable({ records }) {
  return (
    <table className="w-full border rounded overflow-hidden">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="p-3">Date</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>

      <tbody>
        {records.map((r) => (
          <tr key={r.id} className="border-t hover:bg-gray-50">
            <td className="p-3">{dayjs(r.date).format("DD MMM YYYY")}</td>
            <td className="p-3">
              <span className={`px-2 py-1 rounded text-white text-sm ${
                r.status === "PRESENT" ? "bg-green-500" : "bg-red-500"
              }`}>
                {r.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
