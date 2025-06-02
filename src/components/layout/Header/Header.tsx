import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import MobileSidebarMenu from "./MobileSidebarMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? "shadow-md backdrop-blur-md bg-white/20" : ""}`}
    >
      <div className="flex justify-between items-center px-4 md:px-12 py-4 md:py-8 text-[#1A1A1A]">
        <a
          href="/"
          className="text-xl font-bold pretendard hover:text-[#FFA559] transition-colors duration-300"
        >
          Daye's Web Portfolio
        </a>

        {/* 데스크톱 네비게이션 */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <div className="flex flex-col justify-between w-6 h-5">
            <span
              className={`block w-full h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-800 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 모바일 사이드바 */}
      <MobileSidebarMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
