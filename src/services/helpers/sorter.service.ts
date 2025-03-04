export const attendanceSorter = (sortBy: string, sortOrder: "asc" | "desc") => {
  if (sortBy == "date") return { createdAt: sortOrder };
  else if (sortBy == "attendanceType") return { attendanceType: sortOrder };
  else if (sortBy == "name") return { employeeAttendance: { employee: { user: { fullName: sortOrder } } } };
  else if (sortBy == "employeeId") return { employeeAttendance: { employeeId: sortOrder } };
  else if (sortBy == "role") return { employeeAttendance: { employee: { user: { role: sortOrder } } } };
  else if (sortBy == "outletId") return { employeeAttendance: { employee: { outletId: sortOrder } } };
  else if (sortBy == "outletName") return { employeeAttendance: { employee: { outlet: { outletName: sortOrder } } } };
  else if (sortBy == "workShift") return { employeeAttendance: { employee: { workShift: sortOrder } } };
  else throw { message: "Invalid sort argument!" };
};
