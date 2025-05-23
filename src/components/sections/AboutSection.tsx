import { motion } from "framer-motion";
import useProfileStore from "../../store/profileStore";
import { images } from "../../constants/images";

const AboutSection = () => {
  const { name, introduction } = useProfileStore();

  return (
    <section
      id="about"
      className="pt-20 min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#FFF6F0]"
    >
      <div className="px-8 py-16 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-bold text-[#1A1A1A] pretendard"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          {/* 프로필 이미지 섹션 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-72 h-72">
              {/* 손글씨 스타일 프레임 */}
              <motion.svg
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full -rotate-6"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  d="M20,20 
                     Q40,10 60,20 T100,20 T140,20 T180,20 T220,20 T260,20 T280,20
                     Q290,40 280,60 T280,100 T280,140 T280,180 T280,220 T280,260 T280,280
                     Q260,290 240,280 T200,280 T160,280 T120,280 T80,280 T40,280 T20,280
                     Q10,260 20,240 T20,200 T20,160 T20,120 T20,80 T20,40 T20,20"
                  stroke="#FFA559"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* 프로필 이미지 */}
              <div className="overflow-hidden relative w-64 h-64 rounded-full group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFA559]/20 to-[#FF4D00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={images.profile.main}
                  alt="Profile"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* 해시태그 섹션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 justify-center mt-6"
            >
              <span className="px-3 py-1 text-sm text-[#FFA559] bg-[#FFF6F0] rounded-full pretendard">
                #꾸준함
              </span>
              <span className="px-3 py-1 text-sm text-[#FFA559] bg-[#FFF6F0] rounded-full pretendard">
                #홈발함
              </span>
              <span className="px-3 py-1 text-sm text-[#FFA559] bg-[#FFF6F0] rounded-full pretendard">
                #성장중
              </span>
            </motion.div>
          </motion.div>

          {/* 소개 섹션 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-semibold text-[#FF4D00] corncorn"
              >
                {name || "안녕하세요!"}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed text-gray-600 pretendard"
              >
                {introduction ||
                  "저는 웹 개발에 열정을 가진 개발자입니다. 사용자 경험을 중요시하며, 항상 새로운 기술을 배우고 적용하는 것을 좋아합니다."}
              </motion.p>
            </div>

            {/* 기술 스택 섹션 */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl font-semibold text-[#1A1A1A] pretendard"
              >
                Tech Stack
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex gap-2 items-center group">
                  <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <img
                      src="/icons/typescript.svg"
                      alt="TypeScript"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-gray-600 pretendard group-hover:text-[#FFA559] transition-colors duration-300">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-2 items-center group">
                  <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <img
                      src="/icons/react.svg"
                      alt="React"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-gray-600 pretendard group-hover:text-[#FFA559] transition-colors duration-300">
                    React
                  </span>
                </div>
                <div className="flex gap-2 items-center group">
                  <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <img
                      src="/icons/nextjs.svg"
                      alt="Next.js"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-gray-600 pretendard group-hover:text-[#FFA559] transition-colors duration-300">
                    Next.js
                  </span>
                </div>
                <div className="flex gap-2 items-center group">
                  <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <img
                      src="/icons/tailwind.svg"
                      alt="Tailwind"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-gray-600 pretendard group-hover:text-[#FFA559] transition-colors duration-300">
                    Tailwind
                  </span>
                </div>
                <div className="flex gap-2 items-center group">
                  <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <img
                      src="/icons/nodejs.svg"
                      alt="Node.js"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-gray-600 pretendard group-hover:text-[#FFA559] transition-colors duration-300">
                    Node.js
                  </span>
                </div>
                <div className="flex gap-2 items-center group">
                  <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <img src="/icons/git.svg" alt="Git" className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-gray-600 pretendard group-hover:text-[#FFA559] transition-colors duration-300">
                    Git
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
