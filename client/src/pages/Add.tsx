import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [error, setError] = useState<boolean>(false);
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
