import { useState } from "react";
import Button from "../../components/ui/Button";

export default function AddEmployeeModal({ onCreate }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    onCreate(form);
    setForm({ employee_id: "", full_name: "", email: "", department: "" });
  };

  return (
    <div className="border p-4 rounded bg-gray-50 mb-4 grid grid-cols-4 gap-3">
      <input name="employee_id" placeholder="Employee ID" className="border p-2" onChange={handleChange} value={form.employee_id}/>
      <input name="full_name" placeholder="Full Name" className="border p-2" onChange={handleChange} value={form.full_name}/>
      <input name="email" placeholder="Email" className="border p-2" onChange={handleChange} value={form.email}/>
      <input name="department" placeholder="Department" className="border p-2" onChange={handleChange} value={form.department}/>

      <div className="col-span-4">
        <Button onClick={submit}>Add Employee</Button>
      </div>
    </div>
  );
}
