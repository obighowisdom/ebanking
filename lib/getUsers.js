export const getUsers = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/user", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to get clients");
        }
        const data = await res.json();
        return data.users
    } catch (error) {
        console.log("Error loading clients: ", error);
    }
};