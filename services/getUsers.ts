export const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // const response = await fetch("/api/users");

  if (!response.ok) throw new Error("Unable to fetch users.");

  return response.json();
};
