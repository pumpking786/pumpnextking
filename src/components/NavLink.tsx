import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  closeSidebar: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, closeSidebar }) => {
  const handleClick = () => {
    closeSidebar(); // Close the sidebar when a link is clicked
  };
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={handleClick} // Trigger closeSidebar on click
    >
      {title}
    </Link>
  );
};

export default NavLink;
