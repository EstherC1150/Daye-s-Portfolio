interface NavigationProps {
  isMobile?: boolean;
}

const Navigation = ({ isMobile = false }: NavigationProps) => {
  return (
    <nav className={`${isMobile ? "flex flex-col gap-4 p-4" : "flex gap-16"}`}>
      <a
        href="#about"
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
      >
        ABOUT ME
      </a>
      <a
        href="#experience"
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
      >
        EXPERIENCE
      </a>
      <a
        href="#project"
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
      >
        PROJECT
      </a>
      <a
        href="#contact"
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
      >
        CONTACT
      </a>
    </nav>
  );
};

export default Navigation;
