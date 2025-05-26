import { motion } from "framer-motion";

const WorkSection = () => {
  const experiences = [
    {
      period: "2024.06 - 현재",
      company: "알씨케이",
      position: "DX사업부 | 사원",
      description: `회사 홈페이지 구현
• Next.js를 이용하여 개발
• Vercel을 이용하여 배포 속도 향상(CI/CD 파이프라인 구축 용이)
• 퍼포먼스 향상(기존 PHP 기반 사이트는 서버에서 HTML을 동적으로 렌더링 해 제공했지만, Next.js를 통해 정적 생성(SSG)과 서버사이드 렌더링(SSR)을 적절히 혼합해 빠른 응답 속도로 제공)
• Serverless 함수로 운영 효율성 강화(DB 연동이나 간단한 API 처리를 위해 별도 서버 없이 필요한 함수만 작성하여 운영 -> 유지보수 비용 감소)

실시간 3D 뷰어 디스플레이 개발
• 실시간 3D 스토커 뷰어 응용프로그램에서 C# 기반의 레이아웃 구조 및 화면 UI를 설계

스마트 팩토리 라이브러리 관리기 개발
• 관련 웹사이트 제작
• FBX 웹뷰어 기능 제공
• 파일 관리 서버 구축
• 유저 관리 시스템 구현
• 카테고리별 다운로드 수 차트 구현`,
    },
    {
      period: "2022.11 - 2023.08",
      company: "노블진",
      position: "웹디자인 | 사원",
      description: `쇼핑몰 운영 관리 및 상세페이지 제작, 제품 사진 촬영·보정 업무 수행
• 제품 촬영부터 상세페이지 디자인, 썸네일 제작, 홍보용 팜플렛 디자인, 쇼핑몰 콘텐츠 기획 및 디자인 담당
• 상세페이지·썸네일·팜플렛 등 다양한 마케팅 콘텐츠 제작
• Adobe Photoshop, Illustrator, InDesign을 활용`,
    },
    {
      period: "2022.02 - 2022.10",
      company: "메디바이스",
      position: "웹디자인 및 전략기획 | 사원",
      description: `웹디자인 및 편집디자인 기획 및 제작
• 디자인 기획 및 시안 제작
• Adobe Photoshop, Illustrator를 활용
• 블로그 콘텐츠 기획 및 포스팅 작성
• 웹 퍼블리싱(HTML/CSS) 수행`,
    },
  ];

  const education = [
    {
      period: "2023.08 - 2024.02",
      school: "㈜예담직업전문학교",
      major: "(산대특)실무 프로젝트 기반 Vue, Spring 개발자 양성 과정",
      description: "대구",
    },
    {
      period: "2021.07 - 2021.12",
      school: "sbs아카데미학원",
      major: "(디지털디자인)[스마트혼합과정]스마트기기 UXUI 웹디자이너양성",
      description: "대구",
    },
  ];

  return (
    <section id="experience" className="pt-20 min-h-screen bg-white">
      <div className="px-8 py-16 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-bold text-[#1A1A1A] pretendard"
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-20">
          {/* 경력 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-12 text-2xl font-semibold text-[#FF4D00] corncorn">
              WORK EXPERIENCE
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl p-5 w-full transition-all duration-500 hover:-translate-y-1 shadow-none hover:shadow-xl h-full min-h-[120px]">
                    <div className="relative">
                      <div className="flex gap-4 items-center mb-3">
                        <div className="text-xs text-[#FF4D00] font-medium tracking-wider">
                          {exp.period}
                        </div>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#FF4D00]/20 to-transparent" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-lg font-semibold text-[#1A1A1A] group-hover:text-[#FF4D00] transition-colors duration-300">
                          {exp.company}
                        </h4>
                        <div className="mb-2 text-[#1A1A1A] font-medium text-sm">
                          {exp.position}
                        </div>
                        <p className="text-[#1A1A1A] text-[15px] leading-[1.7]">
                          {exp.description.split("\n").map((line, i) =>
                            line.trim().length === 0 ? (
                              <br key={i} />
                            ) : !line.startsWith("•") &&
                              line.trim().length > 0 ? (
                              <span
                                key={i}
                                className="block font-semibold text-base mt-3 mb-1"
                              >
                                {line}
                              </span>
                            ) : line.startsWith("•") ? (
                              <span key={i} className="block pl-2 mb-1">
                                <span className="font-bold mr-2">•</span>
                                <span>{line.replace(/^•\s*/, "")}</span>
                              </span>
                            ) : null
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 교육 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-12 text-2xl font-semibold text-[#FF4D00] corncorn">
              EDUCATION
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 shadow-none hover:shadow-xl h-full">
                    <div className="relative">
                      <div className="flex gap-4 items-center mb-6">
                        <div className="text-sm text-[#FF4D00] font-medium tracking-wider">
                          {edu.period}
                        </div>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#FF4D00]/20 to-transparent" />
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-[#1A1A1A] group-hover:text-[#FF4D00] transition-colors duration-300">
                          {edu.school}
                        </h4>
                        <div className="mb-4 text-[#1A1A1A] font-medium">
                          {edu.major}
                        </div>
                        <p className="text-[#1A1A1A] leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
