import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ToggleSwitchProps } from "./ToggleSwitch.types";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isDarkMode,
  onToggle,
}) => {
  return (
    <div className="flex items-center gap-2">
      {isDarkMode ? (
        <MoonIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      )}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={onToggle}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 dark:peer-focus:ring-yellow-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white dark:after:bg-gray-200 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
