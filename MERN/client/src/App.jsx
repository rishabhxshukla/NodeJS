import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);

  /* Sending data to backend */
  async function handleForm(e) {
    e.preventDefault();

    await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => console.log("Data sent!"))
      .catch((err) => console.log(err));
  }

  /* Fetching data from backend */
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <form action="/login" method="post" onSubmit={handleForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="mb-1 border border-gray-500 p-1"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 border border-gray-500 p-1"
        />
        <br />
        <button
          type="submit"
          className="ml-10 mt-1 rounded-lg bg-gray-400 px-4 py-1"
        >
          Submit
        </button>
      </form>

      <br />
      <br />

      <div>
        <h1 className="bg-red-500 p-3 text-center text-3xl font-bold text-white">
          Users
        </h1>

        {data.map((user) => {
          return (
            <div key={user._id} className="ml-5">
              <li>{user.name}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
