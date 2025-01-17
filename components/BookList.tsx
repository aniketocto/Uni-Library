import React from "react";
import BookCard from "./BookCard";
import { log } from "console";

interface Props {
  title: string;
  books: Book [];
  containerClass: string;
}

const BookList = ({ title, books, containerClass }: Props) => {
  log(books);
  return (
    <section className={containerClass}>
      <h2 className=" font-bebas-neue text-4xl text-light-100">{title}</h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
