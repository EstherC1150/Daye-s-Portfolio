export const images = {
  profile: {
    main: "/images/test01.jpg",
  },
  icons: {
    development: {
      javascript: "/icons/JavaScript.svg",
      typescript: "/icons/TypeScript.svg",
      react: "/icons/React.svg",
      vite: "/icons/Vite-Dark.svg",
      nextjs: "/icons/NextJS-Dark.svg",
      vue: "/icons/Vue.svg",
      nodejs: "/icons/NodeJS-Dark.svg",
      oracle: "/icons/oracle.svg",
      mysql: "/icons/MySQL-Dark.svg",
      mssql: "/icons/mssql.svg",
      linux: "/icons/Linux-Dark.svg",
      docker: "/icons/Docker.svg",
      aws: "/icons/AWS-Dark.svg",
      github: "/icons/Github.svg",
      vercel: "/icons/Vercel-Dark.svg",
      discord: "/icons/Discord.svg",
      postman: "/icons/Postman.svg",
    },
    design: {
      figma: "/icons/Figma-Dark.svg",
      photoshop: "/icons/Photoshop.svg",
      illustrator: "/icons/Illustrator.svg",
      inDesign: "/icons/inDesign.svg",
      xd: "/icons/xd.svg",
    },
  },
  backgrounds: {
    // 배경 이미지들이 추가될 때 여기에 추가
  },
  projects: {
    // 프로젝트 관련 이미지들이 추가될 때 여기에 추가
  },
  // 필요한 카테고리 추가 가능
} as const;

// 타입 안전성을 위한 타입 정의
export type ImagePaths = typeof images;
