import { useState } from "react";

function App() {
  
const [form, setForm] = useState({
  amount: 0,
  description: "",
  date: "",
});

function handleInput(e) {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
}

async function handleSubmit(e) {
  e.preventDefault();
  console.log(form);
  const res = await fetch("http://localhost:4000/transaction", {
    method: "POST",
    body: form,
  })
  console.log(res);
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleInput} name="amount" value={form.amount} placeholder="Enter transaction amount" />
        <input type="text" onChange={handleInput} name="description" value={form.description} placeholder="Enter transaction details" />
        <input type="date" onChange={handleInput} name="date" value={form.date}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
