// frontend/src/pages/Home.jsx
import { useEffect, useState } from 'react';

function Home() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Backend says: <strong>{msg}</strong>
      </p>
    </div>
  );
}

export default Home;
