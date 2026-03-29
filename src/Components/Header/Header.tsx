import { useEffect, useState } from "react";
import { MUNK_IMAGES, NAV_LINKS } from "../constants";
import cn from "@/lib/utils";
function Header() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function để tránh rò rỉ bộ nhớ
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "w-full bg-transparent duration-400 transition-all ease-linear z-50 fixed top-0 right-0 left-0",
        {
          "shadow-md bg-white": isScrolled,
        },
      )}
    >
      <div className="inner-header cursor-pointer relative mx-auto h-header-height flex justify-between items-center w-full max-w-inner-width font-thin">
        <div className="brand ml-4 ">
          <a className="flex items-center py-3" href="#">
            <img src={MUNK_IMAGES.logo} alt="MUNK" />
          </a>
        </div>
        {/* nav in desktop */}
        <nav className="font-light text-main-text hidden md:flex h-full  items-center gap-4  list-none">
          {NAV_LINKS.map((link) => (
            <li className="relative " key={link.href}>
              <a
                className="block p-2  after:absolute after:bottom-0 after:content-[''] after:block after:w-0 after:mt-2 after:h-[0.5px] after:bg-slate-600 hover:after:w-full after:transition-all after:duration-400"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </nav>
        {/* mobile menu icon  */}
        <div
          onClick={() => setIsNavMobileOpen((prev) => !prev)}
          className="IconMobile md:hidden p-3.5"
        >
          {isNavMobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        {/* menu list in mobile */}
        <nav
          className={cn(
            `
            font-light text-main-text md:hidden flex flex-col w-full absolute left-0 bg-[#e1e1e1] shadow-xl transition-all duration-500 ease-in-out z-[-1] top-header-height opacity-0 invisible -translate-y-5`,
            {
              "top-header-height opacity-100 visible translate-y-0":
                isNavMobileOpen,
              "bg-white": isScrolled,
            },
          )}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                onClick={() => setIsNavMobileOpen((prev) => !prev)}
                className="w-full block p-5 text-xl"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </nav>
        {/* )} */}
      </div>
    </header>
  );
}

export default Header;

//transition cho thằng nav
