interface NavigationProps {
  isMobile?: boolean;
}

const Navigation = ({ isMobile = false }: NavigationProps) => {
  return (
    <nav className={`${isMobile ? "flex flex-col gap-4 p-4" : "flex gap-16"}`}>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
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
        }}
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
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
        }}
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
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
        }}
        className="font-medium text-[#1A1A1A] hover:text-[#FFA559] transition-colors duration-300 pretendard"
      >
        CONTACT
      </a>
    </nav>
  );
};

export default Navigation;
