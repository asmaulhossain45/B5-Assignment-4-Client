import hero_bg from "@/assets/home_hero_bg.png";
import hero_image from "@/assets/hero_image.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import { DataTable } from "@/components/books/DataTable";
import { bookColumns } from "@/components/books/Columns";

const Home = () => {
  const { data: books } = useGetBooksQuery();

  return (
    <main>
      {/* Hero Section */}
      <section
        className={`relative bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${hero_bg})` }}
      >
        <div className="bg-secondary/80 w-full flex py-12 lg:py-28">
          <div className="inner-container grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="space-y-4 w-full">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase">
                Book <br />
                Library
              </h1>

              <h4 className="text-lg md:text-2xl xl:text-3xl font-bold uppercase">
                Simplifying Library Operations
              </h4>

              <p className="max-w-xl mb-6">
                BookHut simplifies library operations by offering powerful tools
                to manage books, track borrowings, and enhance user experience —
                all in one intuitive platform.
              </p>

              <a
                href="#books"
                className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md text-sm font-medium"
              >
                Borrow a Book
              </a>
            </div>

            <div className="w-fit mx-auto border-8 rounded-full p-2">
              <img src={hero_image} alt="Hero Image" className="rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* All Books Section */}
      <section id="books" className="py-14 lg:py-28">
        <div className="inner-container">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
              Browse the Shelves
            </h2>
            <p className="text-center max-w-xl mx-auto">
              Find your next read from our growing collection of books. Whether
              you&apos;re a fan of fiction or non-fiction, we have something for
              everyone.
            </p>
          </div>
          <ul className="">
            {books && <DataTable columns={bookColumns} data={books} />}
          </ul>
          <Link to={"/books"} className="flex items-center justify-center">
            <Button>All Books</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
