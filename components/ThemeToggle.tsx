"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  const handleChange = (checked: boolean) => {
    setDark(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className="size-4 text-muted" />
      <Switch checked={dark} onCheckedChange={handleChange} aria-label="Toggle dark mode" />
      <Moon className="size-4 text-muted" />
    </div>
  );
};

export default ThemeToggle;
