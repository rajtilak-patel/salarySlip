import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - ${employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
