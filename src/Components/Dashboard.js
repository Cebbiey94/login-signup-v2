import React from "react";
import { CSVLink } from "react-csv";

const Dashboard = () => {
  const customers = [
    { id: 1, name: "John Doe", status: "Active", commission: 500 },
    { id: 2, name: "Jane Smith", status: "Pending", commission: 200 },
    { id: 3, name: "Bob Johnson", status: "Active", commission: 750 },
  ];

  const totalCommission = customers.reduce(
    (sum, c) => sum + c.commission,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Sales Agent Portal
        </h1>

        <h2 className="text-xl mb-4">My Customers</h2>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-blue-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Commission</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td className="border p-2">{c.id}</td>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.status}</td>
                <td className="border p-2">R{c.commission}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mb-4">
          Total Commission:{" "}
          <span className="text-green-600">R{totalCommission}</span>
        </h3>

        <CSVLink
          data={customers}
          filename="commission-report.csv"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Export to CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default Dashboard;
