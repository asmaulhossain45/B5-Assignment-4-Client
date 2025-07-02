import BookCard from "@/components/cards/BookCard";
import type { IBook } from "@/types/books";
import dummyBookImage from "@/assets/dummy-book-image.jpg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import hero_bg from "@/assets/home_hero_bg.png";
import hero_image from "@/assets/hero_image.png";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const books: IBook[] = [
    {
      id: "1",
      title: "The Theory of Everything The Theory of Everything",
      author: "Stephen Hawking",
      image: dummyBookImage,
      genre: "SCIENCE",
      isbn: "9780553380163",
      description: "An overview of cosmology and black holes.",
      copies: 5,
      available: true,
    },
    {
      id: "2",
      title: "The Theory of Everything",
      author: "Stephen Hawking",
      image: dummyBookImage,
      genre: "SCIENCE",
      isbn: "9780553380163",
      description: "An overview of cosmology and black holes.",
      copies: 5,
      available: false,
    },
    {
      id: "3",
      title: "The Theory of Everything",
      author: "Stephen Hawking",
      image: dummyBookImage,
      genre: "SCIENCE",
      isbn: "9780553380163",
      description: "An overview of cosmology and black holes.",
      copies: 5,
      available: true,
    },
  ];
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
        <div className="border-b mb-6 lg:mb-12">
          <div className="inner-container flex items-center justify-between gap-4 pb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold">All Books</h3>
              <h6 className="text-xs bg-secondary/50 p-2 rounded-full border">0{books.length}</h6>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Select>
                <SelectTrigger className="w-24 md:w-52">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort Options</SelectLabel>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                    <SelectItem value="genre">Genre</SelectItem>
                    <SelectItem value="available">Availability</SelectItem>
                    <SelectItem value="copies">Number of Copies</SelectItem>
                    <SelectItem value="createdAt-asc">
                      Created At (Oldest First)
                    </SelectItem>
                    <SelectItem value="createdAt-desc">
                      Created At (Newest First)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Drawer direction="right">
                <DrawerTrigger>
                  <Button className="cursor-pointer">Filter</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                      This action cannot be undone.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
        <ul className="inner-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {books.map((book: IBook, index) => (
            <BookCard key={index} book={book} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default LandingPage;
