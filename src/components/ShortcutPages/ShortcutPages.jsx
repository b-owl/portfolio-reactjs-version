import { NavLink } from "react-router-dom";
import { useStateContext } from "../../context/Context";

const ShortcutPages = () => {
  const { currentColor, navItems } = useStateContext();

  return (
    <div className="fixed z-10 flex-col items-center justify-center hidden h-screen gap-3 right-8 md:flex">
      {navItems.map(({ href }, idx) => (
        <NavLink
          key={idx}
          className="w-3 h-3 border-black rounded-full border-1 dark:border-gray-500"
          style={({ isActive }) => ({
            backgroundColor: isActive ? currentColor : "transparent",
          })}
          to={href}
        ></NavLink>
      ))}
    </div>
  );
};

export default ShortcutPages;
