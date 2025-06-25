// app/components/NavLink.jsx
import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        group relative block py-2 px-4 sm:text-xl rounded md:p-0
        text-[#ADB7BE] transition-all duration-300 ease-in-out
        hover:text-[#00E6FF] transform
      "
    >
      {title}

      {/* Gradient underline animation */}
      <span
        className="
          pointer-events-none absolute bottom-0 left-0 h-[3px] w-0
          rounded-lg transition-all duration-300
          group-hover:w-full
          before:content-[''] before:absolute before:inset-0
          before:bg-gradient-to-r before:from-[#00E6FF] before:to-[#FF0080]
          before:rounded-lg before:w-full
        "
      />
    </Link>
  );
};

export default NavLink;