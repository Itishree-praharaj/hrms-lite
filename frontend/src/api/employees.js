import api from "./client";

export const getEmployees = () => api.get("employees/");
export const createEmployee = (data) => api.post("employees/", data);
export const deleteEmployee = (id) => api.delete(`employees/${id}/`);
export const getEmployeeAttendance = (id) => api.get(`employees/${id}/attendance/`);
export const markAttendance = (data) => api.post("attendance/", data);
