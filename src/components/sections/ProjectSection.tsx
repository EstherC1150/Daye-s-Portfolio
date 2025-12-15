import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../../constants/images";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "포트폴리오 웹사이트",
      shortDescription:
        "React와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트",
      thumbnail: images.projects.portfolio,
      fullDescription: `• React와 Tailwind CSS를 활용한 반응형 웹사이트 개발
• Framer Motion을 통한 부드러운 애니메이션 구현
• 모던한 UI/UX 디자인 적용
• 반응형 레이아웃으로 모든 디바이스 지원`,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      link: "https://github.com/EstherC1150/Daye-s-Portfolio",
    },
    {
      title: "라이브러리 관리기",
      shortDescription: "3D 모델 라이브러리 관리 및 웹뷰어 서비스",
      thumbnail: images.projects.libraryManager,
      fullDescription: `• 3D 모델 파일(FBX) 웹뷰어 기능 구현
• 파일 관리 서버 구축 및 유저 관리 시스템 개발
• 카테고리별 다운로드 통계 차트 구현
• 실시간 파일 업로드/다운로드 기능`,
      technologies: ["Next.js", "Three.js", "Node.js", "MSSQL", "PM2"],
      link: "https://github.com/EstherC1150/vclm",
    },
    {
      title: "SPESATE 홈페이지",
      shortDescription: "반응형 기업 홈페이지 개발",
      thumbnail: images.projects.spesate,
      fullDescription: `• 기업 홈페이지 리뉴얼 프로젝트
• 반응형 웹 디자인 구현
• SEO 최적화 및 성능 개선`,
      technologies: ["Next.js", "Styled-components", "Framer Motion", "Vercel"],
      link: "https://spesate.com/",
    },
    {
      title: "알씨케이 홈페이지",
      shortDescription: "Next.js 기반 기업 홈페이지 개발",
      thumbnail: images.projects.rckhome,
      fullDescription: `• Next.js를 활용한 기업 홈페이지 개발
• Vercel을 통한 CI/CD 파이프라인 구축
• SSG/SSR 혼합 방식으로 성능 최적화
• Serverless 함수를 활용한 운영 효율성 강화
• 다국어 지원(한국어/영어) / IP 기반 자동 언어 감지`,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://rckorea.vercel.app/",
    },
    {
      title: "비대면 의료 플랫폼",
      shortDescription: "코로나19 팬데믹 대응 온라인 진료 플랫폼",
      thumbnail: images.projects.drcome,
      fullDescription: `• 코로나19 팬데믹 시대 비대면 의료 서비스 수요 증가에 대응한 온라인 진료 플랫폼
• 환자-의사 간 실시간 화상 진료 및 온라인 상담 서비스 구현
• 안전하고 편리한 원격 의료 서비스로 의료 접근성 향상
• 실시간 화상 진료 시스템 및 온라인 예약 관리
• 환자-의사 매칭 서비스 및 진료 기록 관리 시스템`,
      technologies: [
        "Java",
        "Spring Boot",
        "MyBatis",
        "JPA",
        "Oracle DB",
        "HTML/CSS/JavaScript",
        "jQuery",
        "Bootstrap5",
        "Thymeleaf",
        "AWS EC2",
        "Jenkins",
        "Docker",
        "Nginx",
      ],
      link: "https://github.com/EstherC1150/Dr.ComeProject",
    },
    {
      title: "비대면 음식점 예약 플랫폼",
      shortDescription: "포스트 코로나 시대 안전한 비대면 예약 서비스",
      thumbnail: images.projects.daedanae2,
      fullDescription: `• 포스트 코로나 시대 안전한 비대면 예약 서비스로 고객 편의성 향상
• 지역 음식점 홍보 공간 제공을 통한 지역 경제 활성화 기여
• 업체 매출 증대와 고객 만족도 향상을 동시에 실현하는 윈-윈 플랫폼
• 비대면 실시간 예약 시스템 및 음식점 정보 홍보 서비스
• 예약 관리 및 알림 기능, 지역별 맛집 검색 및 추천`,
      technologies: [
        "HTML/CSS/JavaScript",
        "jQuery",
        "Bootstrap5",
        "MySQL",
        "AWS RDS",
        "MySQL Workbench",
        "Ajax",
        "Axios",
        "RESTful API",
        "PL/SQL",
      ],
      link: "https://github.com/EstherC1150/DaeDaNae_NodeVue",
    },
  ];

  return (
    <section
      id="project"
      className="overflow-hidden relative pt-20 min-h-screen bg-white"
    >
      {/* 배경 디자인 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4D00]/[0.03] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF4D00]/[0.02] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative px-8 py-16 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-bold text-[#1A1A1A] pretendard"
        >
          PROJECT
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedProject(index)}
            >
              <div className="overflow-hidden relative bg-gray-100 rounded-lg aspect-video">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/60 group-hover:opacity-100" />
                <div className="absolute right-0 bottom-0 left-0 p-6 text-white transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black/50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF4D00] text-white rounded-full flex items-center justify-center hover:bg-[#FF4D00]/90 transition-colors"
                  >
                    ×
                  </button>
                  <h3 className="mb-4 text-2xl font-bold">
                    {projects[selectedProject].title}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 whitespace-pre-line">
                      {projects[selectedProject].fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#FF4D00]/10 text-[#FF4D00] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={projects[selectedProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-[#FF4D00] text-white rounded-lg hover:bg-[#FF4D00]/90 transition-colors"
                    >
                      프로젝트 보기
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectSection;
