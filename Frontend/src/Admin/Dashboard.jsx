

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function Dashboard() {

  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  // Runs when page loads
  useEffect(() => {

    // Dummy Users
    const dummyUsers = [
      { name: "User1" },
      { name: "User2" },
      { name: "User3" }
    ];

    // Dummy Orders
    const dummyOrders = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 }
    ];

    setUsers(dummyUsers);
    setOrders(dummyOrders);

  }, []);

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div className="w-64 h-screen bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin</h2>

        <ul className="space-y-4">
          <li className="cursor-pointer">Dashboard</li>
          <li className="cursor-pointer">Users</li>
          <li className="cursor-pointer">Orders</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-6">

          <Donut title="Users" value={users.length} total={10} />
          <Donut title="Orders" value={orders.length} total={10} />

        </div>

      </div>
    </div>
  );
}


function Donut({ title, value, total }) {

  const data = [
    { name: "value", value: value },
    { name: "rest", value: total - value }
  ];

  const percent = ((value / total) * 100).toFixed(0);

  return (
    <div className="bg-white p-5 rounded-4xl shadow text-center">

      <h3 className="text-gray-500">{title}</h3>

      <div className="relative w-full h-40">

        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={40}
              outerRadius={70}
            >
              <Cell fill="#6366f1" />
              <Cell fill="#e5e7eb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center font-bold">
          {percent}%
        </div>

      </div>

      <p className="text-xl font-bold">{value}</p>

    </div>
  );
}