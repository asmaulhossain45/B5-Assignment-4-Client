import { bookColumns } from "@/components/table/BookColumns";
import { DataTable } from "@/components/table/DataTable";
import CustomPagination from "@/components/common/CustomPagination";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectBooks, useGetBooksQuery } from "@/redux/api/bookApi";
import { useState } from "react";

const AllBook = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;
  const { data } = useGetBooksQuery();
  const books = selectBooks(data);


  return (
    <main>
      <section id="books" className="py-14 lg:py-28">
        <div className="border-b">
          <div className="inner-container flex items-center justify-between gap-4 pb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold">
                All Books
              </h3>
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
        <ul className="inner-container my-6 lg:my-12">
          {books && <DataTable columns={bookColumns} data={books} />}
        </ul>

        <div className="inner-container">
          <CustomPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) => setPage(p)}
          />
        </div>
      </section>
    </main>
  );
};

export default AllBook;
