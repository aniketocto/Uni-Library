import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { BookSample } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...BookSample[0]} />
      <BookList title='Latest Book' books={BookSample} containerClass="mt-28"/>
    </>
  );
};

export default Home;
