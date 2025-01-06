// LIBRARY REACT
import React from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";

const Sosial = () => {
  return (
    <motion.div
      variants={Muncul("atas", 0.3)}
      initial="hilang"
      whileInView={"ada"}
      viewport={{ once: false, amount: 0 }}
      className="sosial__beranda"
    >
      <a
        href="https://www.instagram.com/sndroangrhtbn_/"
        className="sosial__beranda-ikon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/sandro-anugrah-tambunan-69b8a824b/"
        className="sosial__beranda-ikon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/sandroanugrah"
        className="sosial__beranda-ikon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
    </motion.div>
  );
};

export default Sosial;
