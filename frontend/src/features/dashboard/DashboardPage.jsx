import { useEffect, useState } from "react";
import { getDashboard } from "../../api/dashboard";
import Card from "../../components/ui/Card";
import Loader from "../../components/ui/Loader";

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDashboard().then(res => setData(res.data.data));
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="grid grid-cols-3 gap-4">

      <Card>
        <h2 className="text-gray-500">Total Employees</h2>
        <p className="text-3xl font-bold">{data.total_employees}</p>
      </Card>

      <Card>
        <h2 className="text-gray-500">Today Present</h2>
        <p className="text-3xl font-bold text-green-600">{data.today_present}</p>
      </Card>

      <Card>
        <h2 className="text-gray-500">Today Absent</h2>
        <p className="text-3xl font-bold text-red-600">{data.today_absent}</p>
      </Card>

    </div>
  );
}
