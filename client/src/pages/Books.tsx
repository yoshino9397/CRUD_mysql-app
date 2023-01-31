import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  desc: string;
  price: number;
  cover: string;
}

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  console.log(books);
  return (
    <div>
      <h1>Yoshino's Book Shop</h1>
      {books.map((book: Props) => (
        <div key={book.id} className="book">
          {book.cover && <img src={book.cover} alt="" />}
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>${book.price}</span>
          {/* <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button> */}
          <button className="update">
            <Link
              to={`/update/${book.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Update
            </Link>
          </button>
        </div>
      ))}
      <button>
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;
