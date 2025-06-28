import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Counter() {
  const [count, setCount] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let key = location.pathname;

    if (key === "/" || key === "/home") key = "home";
    else key = key.replace("/", ""); // e.g. "/about" => "about"

    axios
      .get(`https://api.countapi.xyz/hit/hannaxvi/${key}`)
      .then((res) => {
        setCount(res.data.value);
      })
      .catch((err) => {
        console.error("Failed to fetch visitor count:", err);
      });
  }, []);

  return (
    <div className="text-gray-400">
      Visitors: {count !== null ? count : "Loading..."}
    </div>
  );
}
