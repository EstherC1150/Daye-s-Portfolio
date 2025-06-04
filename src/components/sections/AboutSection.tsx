import { motion } from "framer-motion";
import useProfileStore from "../../store/profileStore";
import { images } from "../../constants/images";

const AboutSection = () => {
  const { name, introduction } = useProfileStore();

  const techIcons = [
    // Development
    { src: images.icons.development.javascript, alt: "JavaScript" },
    { src: images.icons.development.typescript, alt: "TypeScript" },
    { src: images.icons.development.react, alt: "React" },
    { src: images.icons.development.vite, alt: "Vite" },
    { src: images.icons.development.nextjs, alt: "Next.js" },
    { src: images.icons.development.vue, alt: "Vue" },
    { src: images.icons.development.nodejs, alt: "Node.js" },
    { src: images.icons.development.oracle, alt: "Oracle" },
    { src: images.icons.development.mysql, alt: "MySQL" },
    { src: images.icons.development.mssql, alt: "MSSQL" },
    { src: images.icons.development.linux, alt: "Linux" },
    { src: images.icons.development.docker, alt: "Docker" },
    { src: images.icons.development.aws, alt: "AWS" },
    { src: images.icons.development.github, alt: "GitHub" },
    { src: images.icons.development.vercel, alt: "Vercel" },
    { src: images.icons.development.discord, alt: "Discord" },
    { src: images.icons.development.postman, alt: "Postman" },
    // Design
    { src: images.icons.design.figma, alt: "Figma" },
    { src: images.icons.design.photoshop, alt: "Photoshop" },
    { src: images.icons.design.illustrator, alt: "Illustrator" },
    { src: images.icons.design.inDesign, alt: "InDesign" },
    { src: images.icons.design.xd, alt: "XD" },
  ];

  return (
    <section
      id="about"
      className="pt-20 min-h-screen h-fit bg-gradient-to-br from-white via-gray-50 to-[#FFF6F0] overflow-x-hidden"
    >
      <div className="px-8 py-16 mx-auto max-w-7xl h-fit">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-bold text-[#1A1A1A] pretendard"
        >
          ABOUT ME
        </motion.h2>

        {/* 프로필 이미지와 소개 섹션 */}
        <div className="grid grid-cols-1 gap-12 items-start mb-16 md:grid-cols-2">
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
              <span className="px-3 py-1 text-sm text-[#FFF] bg-[#FF4D00] rounded-full pretendard transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                #꾸준함
              </span>
              <span className="px-3 py-1 text-sm text-[#FFF] bg-[#FF4D00] rounded-full pretendard transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                #협동심
              </span>
              <span className="px-3 py-1 text-sm text-[#FFF] bg-[#FF4D00] rounded-full pretendard transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                #성장중
              </span>
              <span className="px-3 py-1 text-sm text-[#FFF] bg-[#FF4D00] rounded-full pretendard transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                #적응력
              </span>
              <span className="px-3 py-1 text-sm text-[#FFF] bg-[#FF4D00] rounded-full pretendard transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                #도전정신
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
                className="leading-relaxed text-[#1a1a1a] pretendard whitespace-pre-wrap text-lg"
              >
                {introduction ||
                  `안녕하세요! 저는 꾸준함과 도전정신을 바탕으로 성장하는 웹 개발자입니다.
웹디자인 경험을 살려 기능 뿐 아니라 UX/UI 디자인까지 고려한 개발을 지향합니다.

React, Next.js, Tailwind CSS 기술을 주로 사용하며,
Node.js로 REST API 서버 구축이 가능합니다.
또한 MySQL, Oracle, MSSQL 등의 DBMS 사용이 가능합니다.

백엔드에도 관심이 많아, 전반적인 개발에 함께 기여하고 싶습니다.
맡은 일에 애정을 갖고 책임감 있게 임하며, 주어진 역할 속에서 가치를 만들어내는 개발자가 되고자 합니다.`}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* 기술 스택 섹션 */}
        <div className="mt-14">
          <div className="w-full">
            <motion.div className="flex flex-wrap gap-5 justify-start mx-auto md:gap-4 h-fit">
              {techIcons.map((icon, index) => (
                <motion.div
                  key={icon.alt}
                  className="flex overflow-visible justify-center items-center"
                >
                  <motion.img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-8 h-8 md:w-10 md:h-10"
                    initial={{ x: "200%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1,
                      duration: 0.8,
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
