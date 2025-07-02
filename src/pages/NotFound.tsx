import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <main>
      <div className="inner-container min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-[8rem] lg:text-[10rem] font-bold leading-[1.2]">
          404
        </h1>
        <h4 className="text-2xl lg:text-3xl font-bold">Oops! Page not found</h4>
        <p className="max-w-96 text-center">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. We
          suggest you return to the home page
        </p>

        <NavLink to={"/"}>
          <Button className="cursor-pointer">Go Home</Button>
        </NavLink>
      </div>
    </main>
  );
};

export default NotFound;
