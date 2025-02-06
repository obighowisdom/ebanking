import React from "react";
import UserTable from "./Table/UserTable";
import { getUsers } from "@/lib/getUsers";



//
//   try {
//     const res = await fetch("https://www.nexabanking.com/api/user", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to get clients");
//     }
//     const data = await res.json();
//     return data.users
//     } catch (error) {
//     console.log("Error loading clients: ", error);
//   }
// };

// const users = [
//   {
//     id: 1,
//     user: "John Doe",
//     amount: 120,
//     status: "Approved",
//     date: "2024-03-19",
//   },
//   {
//     id: 2,
//     user: "Jane Smith",
//     amount: 300,
//     status: "Pending",
//     date: "2024-03-18",
//   },
//   {
//     id: 3,
//     user: "Mike Johnson",
//     amount: 450,
//     status: "Not Approved",
//     date: "2024-03-17",
//   },
//   {
//     id: 4,
//     user: "Sarah Wilson",
//     amount: 200,
//     status: "Pending",
//     date: "2024-03-16",
//   },
// ];

const Dashboard = async () => {
  const data = await getUsers();
  
     
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      {/* Charts and Tables Section */}
      <UserTable data={data} />
    </div>
  );
};

export default Dashboard;
