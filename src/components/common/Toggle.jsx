import { Moon, Sun } from "lucide-react";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed right-6 top-24 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white shadow-lg transition-all duration-500 hover:scale-110 dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="relative">
        <Sun
          className={`absolute h-6 w-6 transition-all duration-500 ${
            theme === "light"
              ? "rotate-0 scale-100"
              : "rotate-90 scale-0"
          }`}
        />

        <Moon
          className={`h-6 w-6 transition-all duration-500 ${
            theme === "dark"
              ? "rotate-0 scale-100"
              : "-rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
};

export default Toggle;