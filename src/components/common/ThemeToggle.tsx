import { useEffect } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectTheme, setTheme } from "@/redux/slices/themeSlice";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme: setNextTheme } = useTheme();
  const dispatch = useAppDispatch();
  const reduxTheme = useAppSelector(selectTheme);

  useEffect(() => {
    if (theme && theme !== reduxTheme) {
      dispatch(setTheme(theme as "light" | "dark" | "system"));
    }
  }, [theme, reduxTheme, dispatch]);

  const toggleTheme = () => {
    let newTheme: "light" | "dark";
    if (reduxTheme === "dark") newTheme = "light";
    else newTheme = "dark";
    setNextTheme(newTheme);
    dispatch(setTheme(newTheme));
  };

  return (
    <Button variant={"icon"} size={"icon"} onClick={toggleTheme}>
      {resolvedTheme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
