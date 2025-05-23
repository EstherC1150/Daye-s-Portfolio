export const images = {
  profile: {
    main: "/images/test01.jpg",
  },
  icons: {
    // 아이콘 이미지들이 추가될 때 여기에 추가
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
