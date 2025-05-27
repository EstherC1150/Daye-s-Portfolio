import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCommentDots } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const [githubHover, setGithubHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  const [kakaoHover, setKakaoHover] = useState(false);
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-white via-gray-100 to-[#FF4D00]/10 relative"
    >
      {/* Thank You 메시지 (배경처럼 크게) */}
      <h1 className="text-[10vw] font-extrabold text-black/10 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap continuous">
        Thank You
      </h1>
      <div className="flex relative z-10 flex-col flex-1 justify-center items-center px-4 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32 mb-4 text-3xl font-bold text-center md:text-4xl text-[#1a1a1a]"
        >
          봐주셔서 감사합니다 :)
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 max-w-2xl text-lg text-center text-gray-700"
        >
          프론트엔드 개발자로 성장하기 위해 낮선 기술에도 적극적으로 도전하고,
          <br />
          항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고
          싶습니다.
        </motion.p>
        <div className="mb-6 text-sm text-center text-gray-500 break-all select-all">
          daye511@naver.com
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-8 mb-12 text-gray-700"
        >
          {/* email */}
          <a
            href="mailto:daye511@naver.com"
            className="flex relative flex-col justify-center items-center w-20 h-8 group corncorn"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
          >
            <motion.span
              initial={false}
              animate={{ opacity: emailHover ? 0 : 1, y: emailHover ? -10 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              email
            </motion.span>
            <motion.span
              initial={false}
              animate={{ opacity: emailHover ? 1 : 0, y: emailHover ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <MdEmail className="w-6 h-6 text-[#FF4D00]" />
            </motion.span>
          </a>
          {/* github */}
          <a
            href="https://github.com/EstherC1150"
            className="flex relative flex-col justify-center items-center w-20 h-8 group corncorn"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setGithubHover(true)}
            onMouseLeave={() => setGithubHover(false)}
          >
            <motion.span
              initial={false}
              animate={{
                opacity: githubHover ? 0 : 1,
                y: githubHover ? -10 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              GitHub
            </motion.span>
            <motion.span
              initial={false}
              animate={{
                opacity: githubHover ? 1 : 0,
                y: githubHover ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <FaGithub className="w-6 h-6 text-[#FF4D00]" />
            </motion.span>
          </a>
          {/* kakao */}
          <a
            href="https://velog.io/@yourvelog"
            className="flex relative flex-col justify-center items-center w-20 h-8 group corncorn"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setKakaoHover(true)}
            onMouseLeave={() => setKakaoHover(false)}
          >
            <motion.span
              initial={false}
              animate={{ opacity: kakaoHover ? 0 : 1, y: kakaoHover ? -10 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              Kakao
            </motion.span>
            <motion.span
              initial={false}
              animate={{ opacity: kakaoHover ? 1 : 0, y: kakaoHover ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <FaCommentDots className="w-6 h-6 text-[#FF4D00]" />
            </motion.span>
          </a>
        </motion.div>
      </div>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-4 w-full text-xs text-center text-gray-400"
      >
        Copyright 2025. ChoiDaye all rights reserved.
        <br />
        React, Tailwind CSS 기반으로 제작된 사이트입니다.
      </motion.footer>
    </section>
  );
};

export default ContactSection;
