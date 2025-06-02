interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navigation = ({ isMobile = false, onLinkClick }: NavigationProps) => {
  return (
    <nav
      className={`${
        isMobile
          ? "flex flex-col gap-8 items-center w-full text-center"
          : "flex gap-16"
      }`}
    >
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
          if (isMobile && onLinkClick) onLinkClick();
        }}
        className={`font-medium transition-colors duration-300 pretendard text-2xl ${
          isMobile
            ? "text-white hover:text-[#FF4D00]"
            : "text-[#1A1A1A] hover:text-[#FFA559]"
        }`}
      >
        ABOUT ME
      </a>
      <a
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
          if (isMobile && onLinkClick) onLinkClick();
        }}
        className={`font-medium transition-colors duration-300 pretendard text-2xl ${
          isMobile
            ? "text-white hover:text-[#FF4D00]"
            : "text-[#1A1A1A] hover:text-[#FFA559]"
        }`}
      >
        EXPERIENCE
      </a>
      <a
        href="#project"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("project")
            ?.scrollIntoView({ behavior: "smooth" });
          if (isMobile && onLinkClick) onLinkClick();
        }}
        className={`font-medium transition-colors duration-300 pretendard text-2xl ${
          isMobile
            ? "text-white hover:text-[#FF4D00]"
            : "text-[#1A1A1A] hover:text-[#FFA559]"
        }`}
      >
        PROJECT
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
          if (isMobile && onLinkClick) onLinkClick();
        }}
        className={`font-medium transition-colors duration-300 pretendard text-2xl ${
          isMobile
            ? "text-white hover:text-[#FF4D00]"
            : "text-[#1A1A1A] hover:text-[#FFA559]"
        }`}
      >
        CONTACT
      </a>
    </nav>
  );
};

export default Navigation;
