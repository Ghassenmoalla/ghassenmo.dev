"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
          return;
        }
        setTheme("dark");
      }}
      className="h-9 w-9 px-0"
    >
      {theme === "dark" ? (
        <SunIcon height={18} width={18} />
      ) : (
        <MoonIcon height={18} width={18} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
