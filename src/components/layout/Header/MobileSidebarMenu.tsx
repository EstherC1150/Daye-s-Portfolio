// MobileSidebarMenu.tsx
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

const menuItems = [
  { label: "소개", href: "#about" },
  { label: "경력", href: "#experience" },
  { label: "포트폴리오", href: "#project" },
  { label: "연락처", href: "#contact" },
];

interface MobileSidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebarMenu = ({ isOpen, onClose }: MobileSidebarMenuProps) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (typeof window === "undefined") return null;
  const portalRoot = document.getElementById("sidebar-root");
  if (!portalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 오버레이 */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* 사이드바 */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-2/3 z-[999] bg-white shadow-2xl flex flex-col pt-20 px-6 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-[#FF4D00] transition-colors"
              onClick={onClose}
              aria-label="메뉴 닫기"
            >
              <IoMdClose />
            </button>
            <nav className="flex flex-col gap-4 mt-12 z-100">
              {menuItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-[#1A1A1A] py-3 border-b border-gray-200 hover:text-[#FF4D00] transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    portalRoot
  );
};

export default MobileSidebarMenu;
