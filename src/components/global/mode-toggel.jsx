import { Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@/store/themeReducer";

export function ModeToggle() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (theme === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-180 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
