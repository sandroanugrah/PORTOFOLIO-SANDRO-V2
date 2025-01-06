// LIBRARY REACT
import React, { useState } from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./kualifikasi.css";
import sandroImage from "../../assets/sertifikat.jpg";

const Kualifikasi = () => {
  const [aktif, setAktif] = useState(1);
  const alihkanAktif = (index) => {
    setAktif(index);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="kualifikasi bagian" id="kualifikasi">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Kualifikasi
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Jurnal Pribadi Saya
      </motion.span>

      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="wadah__kualifikasi wadah"
      >
        <div className="tabs__kualifikasi">
          <div
            className={
              aktif === 1
                ? "tombol__kualifikasi kualifikasi__aktif tombol--flex"
                : "tombol__kualifikasi tombol--flex"
            }
            onClick={() => alihkanAktif(1)}
          >
            <i className="uil uil-graduation-cap kualifikasi__ikon"></i> Edukasi
          </div>
          <div
            className={
              aktif === 2
                ? "tombol__kualifikasi kualifikasi__aktif tombol--flex"
                : "tombol__kualifikasi tombol--flex"
            }
            onClick={() => alihkanAktif(2)}
          >
            <i className="uil uil-briefcase-alt kualifikasi__ikon"></i>{" "}
            Pengalaman
          </div>
          <div
            className={
              aktif === 3
                ? "tombol__kualifikasi kualifikasi__aktif tombol--flex"
                : "tombol__kualifikasi tombol--flex"
            }
            onClick={() => alihkanAktif(3)}
          >
            <i className="uil uil-trophy kualifikasi__ikon"></i> Penghargaan
          </div>
        </div>
        <div className="bagian__kualifikasi">
          <div
            className={
              aktif === 1
                ? "konten__kualifikasi konten__kualifikasi-aktif"
                : "konten__kualifikasi"
            }
          >
            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi"> Mahasiswa-IF</h3>
                <span className="subjudul__kualifikasi">Unjani</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2022 - Sekarang</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Siswa-IPA</h3>
                <span className="subjudul__kualifikasi">
                  SMA Negeri 1 DOLOK PANRIBUAN
                </span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2019 - 2022</i>
                </div>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">Siswa</h3>
                <span className="subjudul__kualifikasi">
                  SMPN 3 JORLANG HATARAN
                </span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2016 - 2019</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Siswa</h3>
                <span className="subjudul__kualifikasi">SDN</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2009 - 2015</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              aktif === 2
                ? "konten__kualifikasi konten__kualifikasi-aktif"
                : "konten__kualifikasi"
            }
          >
            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">FSI UNJANI CIMAHI</h3>
                <span className="subjudul__kualifikasi">Backend Developer</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 02 - 14 Desember</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Basarnas Bengkulu</h3>
                <span className="subjudul__kualifikasi">Backend Developer</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt">
                    {" "}
                    18 Juli - 18 Juni 2024
                  </i>
                </div>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">BKMG Bengkulu</h3>
                <span className="subjudul__kualifikasi">Backend Developer</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt">
                    {" "}
                    2023 Desember - Sekarang
                  </i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>
          </div>

          <div
            className={
              aktif === 3
                ? "konten__kualifikasi konten__kualifikasi-aktif"
                : "konten__kualifikasi"
            }
          >
            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">Penghargaan 1</h3>
                <span className="subjudul__kualifikasi">Klik untuk detail</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2024</i>
                </div>
                <img
                  src={sandroImage}
                  alt="Penghargaan 1"
                  className="gambar__penghargaan"
                  onClick={handleImageClick}
                />
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>{" "}
              </div>
              {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <img
                    className="modal-content"
                    src={sandroImage}
                    alt="Zoomed"
                  />
                </div>
              )}
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Penghargaan 2</h3>
                <span className="subjudul__kualifikasi">Menyusul....</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Kualifikasi;
