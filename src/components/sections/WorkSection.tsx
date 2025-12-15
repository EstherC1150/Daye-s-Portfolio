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
• 다국어 지원(한국어/영어) / IP 기반 자동 언어 감지


실시간 3D 뷰어 디스플레이 개발
• 실시간 3D 스토커 뷰어 응용프로그램에서 C# 기반의 레이아웃 구조 및 화면 UI를 설계

스마트 팩토리 라이브러리 관리기 개발
• 관련 웹사이트 제작
• FBX 웹뷰어 기능 제공
• 파일 관리 서버 구축
• 유저 관리 시스템 구현
• 카테고리별 다운로드 수 차트 구현

WebSocket 미들웨어 서버 개발
• Node.js 기반 실시간 WebSocket 중계 서버 구축
• 클라이언트 타입별 권한 관리 및 메시지 라우팅 구현
• 500MB 이상 파일을 청크 단위 스트리밍 방식으로 처리
• 메모리 효율적인 파일 저장 파이프라인 구축 (fs.createWriteStream)
• 미등록 클라이언트 요청 차단 로직 구현
• Ping/Pong 기반 연결 상태 모니터링
• REST API로 연결 상태 조회 및 수동 메시지 전송 기능 제공`,
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
      description:
        "HTML, CSS, JavaScript, Java 기초부터 Vue.js 프론트엔드 개발 • Spring Framework와 Oracle DB를 활용한 백엔드 개발 실무 프로젝트 수행",
    },
    {
      period: "2021.07 - 2021.12",
      school: "SBS아카데미컴퓨터아트학원 대구",
      major: "(디지털디자인)[스마트혼합과정]스마트기기 UXUI 웹디자이너양성",
      description:
        "Adobe Photoshop, Illustrator를 활용한 웹디자인 실무 교육 • HTML, CSS, jQuery를 통한 웹 퍼블리싱 실습",
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
                  className="relative group"
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
                                className="block mt-3 mb-1 text-base font-semibold"
                              >
                                {line}
                              </span>
                            ) : line.startsWith("•") ? (
                              <span key={i} className="block pl-2 mb-1">
                                <span className="mr-2 font-bold">•</span>
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
                  className="relative group"
                >
                  <div className="relative p-8 h-full bg-white rounded-3xl shadow-none transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
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
