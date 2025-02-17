import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="relative block py-2 px-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 
      hover:text-[#00E6FF] transition-all duration-300 ease-in-out 
      before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] 
      before:bg-gradient-to-r from-[#00E6FF] to-[#FF0080] before:transition-all before:duration-300 
      hover:before:w-full before:rounded-lg 
      group-hover:scale-110"
    >
      {title}
    </Link>
  );
};

export default NavLink;
