// LIBRARY REACT
import React, { useState } from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./layanan.css";

const Layanan = () => {
  const [modal, setModal] = useState(0);

  const bukakanModal = (index) => {
    setModal(index);
  };
  return (
    <div className="layanan bagian" id="layanan">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Layanan
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Apa Yang Saya Tawarkan
      </motion.span>

      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="wadah__layanan wadah jaringan"
      >
        <div className="konten__layanan">
          <div>
            <i className="uil uil-setting ikon__layanan"></i>
            <h3 className="judul__layanan">Jasa Backend</h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(2)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 2 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul"> Jasa Backend</h3>
              <p className="modal__layanan-deskripsi">
                Layanan ini fokus pada pengembangan backend untuk aplikasi web,
                termasuk penyusunan basis data menggunakan MySQL, SQL, atau
                MongoDB. Anda dapat menawarkan integrasi dengan PHP, Node JS,
                atau Firebase untuk membuat backend yang efisien dan aman.
                Layanan ini juga mencakup pengaturan keamanan dan otentikasi
                pengguna menggunakan Firebase Authentication atau JWT.
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Pengembangan backend menggunakan PHP, Node JS, atau
                    Firebase.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Penyusunan basis data dengan MySQL, SQL, atau MongoDB untuk
                    penyimpanan dan pengelolaan data.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Implementasi RESTful API untuk komunikasi antara frontend
                    dan backend.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Pengaturan keamanan dan otentikasi pengguna menggunakan
                    Firebase Authentication atau JWT.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Layanan;
