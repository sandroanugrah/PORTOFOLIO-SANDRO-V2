// LIBRARY REACT
import React from "react";
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
              <svg
                className="tombol__ikon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="var(--warna-container)"
                ></path>
              </svg>
            </a>
            <a
              download="Sandro-Anugrah-Tambunan-CV-EN.pdf"
              href="/Sandro-English.pdf"
              className="tombol tombol--flex kecil"
            >
              Unduh CV (EN)
              <svg
                className="tombol__ikon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="var(--warna-container)"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang;
