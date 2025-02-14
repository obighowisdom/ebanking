import Settings from "../../../../components/Home/Settings";

const getUsers = async () => {
  try {
    const res = await fetch("https://www.nexabanking.com/api/user", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get clients");
    }
    const data = await res.json();
    return data.users;
  } catch (error) {
    console.log("Error loading clients: ", error);
  }
};

const page = async () => {
  const data = await getUsers();
  return (
    <div>
      <Settings userData={data} />
    </div>
  );
};

export default page;
