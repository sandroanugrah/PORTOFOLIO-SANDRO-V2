// LIBRARY REACT
import React from "react";
import { FaDownload } from "react-icons/fa";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import "./tentang.css";
import gambarTentang from "../../assets/sandro1.jpg";
import Info from "./Info";
import { Muncul } from "../../utils/AnimasiHalaman";

const Tentang = () => {
  return (
    <section className="tentang bagian" id="tentang">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Tentang Saya
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Kepo Yaa?
      </motion.span>
      <div className="wadah__tentang wadah jaringan">
        <motion.img
          variants={Muncul("atas", 0.3)}
          initial="hilang"
          whileInView={"ada"}
          viewport={{ once: false, amount: 0 }}
          src={gambarTentang}
          alt="gambar"
          className="img__tentang"
        />

        <motion.div
          variants={Muncul("atas", 0.3)}
          initial="hilang"
          whileInView={"ada"}
          viewport={{ once: false, amount: 0 }}
          className="data__tentang"
        >
          <Info />
          <p className="deskripsi__tentang">
            Halo, saya Sandro Anugrah Tambunan, seorang backend developer dengan
            pengalaman 1,5 tahun. Saya mahir dalam Node.js, Firebase, React.js,
            dan Next.js. Saat ini, saya sedang mempelajari Three.js dan
            TypeScript, serta bertekad untuk semakin menguasainya. Saya juga
            memiliki pengetahuan dalam MySQL, SQL, MongoDB, dan Java. Siap
            menerima dukungan dari Anda selama aktif 1/24 jam.
          </p>
          <div className="unduh-cv">
            <a
              download="Sandro-Anugrah-Tambunan-CV-ID.pdf"
              href="/Sandro-Indonesia.pdf"
              className="tombol tombol--flex kecil"
            >
              Unduh CV (ID)
              <FaDownload className="tombol__ikon" />
            </a>
            <a
              download="Sandro-Anugrah-Tambunan-CV-EN.pdf"
              href="/Sandro-English.pdf"
              className="tombol tombol--flex kecil"
            >
              Unduh CV (EN)
              <FaDownload className="tombol__ikon" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang;
