// LIBRARY REACT
import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// LIBRARY EMAILJS
import emailjs from "@emailjs/browser";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./kontak.css";

const Kontak = () => {
  const formulir = useRef();
  const [sedangMengirim, setSedangMengirim] = useState(false);
  const [tandaMengirim, setTandaMengirim] = useState("");

  const kirimEmail = async (e) => {
    e.preventDefault();
    if (formulirValidasi()) {
      try {
        setSedangMengirim(true);
        setTandaMengirim(".");
        // Kirim formulir ke EmailJS
        await emailjs.sendForm(
          "service_mssaa3g", // Ganti dengan Service ID kamu
          "template_hdjmn08", // Ganti dengan Template ID kamu
          formulir.current, // Formulir yang ingin dikirim
          "LE4nxpzu046TvFJJo" // Public Key kamu
        );
        // Tampilkan pesan sukses
        toast.success("Pesan berhasil terkirim!", {
          position: toast.POSITION ? toast.POSITION.TOP_CENTER : "top-center",
        });
        e.target.reset(); // Reset formulir setelah pengiriman
      } catch (error) {
        // Tampilkan pesan error jika pengiriman gagal
        toast.error("Oops! Terjadi kesalahan. Mohon coba lagi nanti.", {
          position: toast.POSITION ? toast.POSITION.TOP_CENTER : "top-center",
        });
      } finally {
        setSedangMengirim(false);
        setTandaMengirim("");
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTandaMengirim((prev) => (prev === "..." ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [tandaMengirim]);

  const formulirValidasi = () => {
    const nama = formulir.current.nama.value.trim();
    const email = formulir.current.email.value.trim();
    const proyek = formulir.current.proyek.value.trim();
    const formulirApakahValid = nama !== "" && email !== "" && proyek !== "";
    if (!formulirApakahValid) {
      toast.error(
        "Oops! Terjadi kesalahan. Mohon mengisi semua formulir yang tersedia.",
        {
          position: toast.POSITION ? toast.POSITION.TOP_CENTER : "top-center",
        }
      );
    }
    return formulirApakahValid;
  };

  return (
    <section className="kontak bagian" id="kontak">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Terhubung Dengan Saya
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Kontak Saya
      </motion.span>
      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="wadah__kontak wadah jaringan"
      >
        <div className="konten__kontak">
          <h3 className="judul__kontak">Hubungi Saya</h3>
          <div className="info__kontak">
            <div className="kartu__kontak">
              <i className="bx bx-mail-send ikon__kartu-kontak"></i>
              <h3 className="judul__kartu-kontak">Email</h3>
              <span className="data__kartu-kontak">
                sandroanugrahtambunan6@gmail.com
              </span>
              <a
                href="mailto:sandroanugrahtambunan6@gmail.com"
                className="tombol__kontak"
              >
                Tuliskan Pesan{" "}
                <i className="bx bx-right-arrow-alt ikon__tombol-kontak"></i>
              </a>
            </div>
            <div className="kartu__kontak">
              <i className="bx bxl-whatsapp ikon__kartu-kontak"></i>
              <h3 className="judul__kartu-kontak">Whatsapp</h3>
              <span className="data__kartu-kontak">+62 853-6387-2317</span>
              <a
                href="https://api.whatsapp.com/send?phone=+6285363972317&text=Halo, Saya ingin bertanya tentang proyek anda."
                className="tombol__kontak"
              >
                Tuliskan Pesan{" "}
                <i className="bx bx-right-arrow-alt ikon__tombol-kontak"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="konten__kontak">
          <h3 className="judul__kontak">Apa Proyek Anda?</h3>
          <form className="form__kontak" ref={formulir} onSubmit={kirimEmail}>
            <div className="form__kontak-div">
              <label className="form__kontak-label">Nama</label>
              <input
                type="text"
                name="nama"
                className="form__kontak-input"
                placeholder="Masukkan Nama Anda"
                autoComplete="off"
              />
            </div>
            <div className="form__kontak-div">
              <label className="form__kontak-label">Email</label>
              <input
                type="email"
                name="email"
                className="form__kontak-input"
                placeholder="Masukkan Email Anda"
                autoComplete="off"
              />
            </div>
            <div className="form__kontak-div form__kontak-area">
              <label className="form__kontak-label">Proyek</label>
              <textarea
                name="proyek"
                cols="30"
                rows="10"
                className="form__kontak-input"
                placeholder="Tuliskan Proyek Anda"
                autoComplete="off"
              ></textarea>
            </div>
            <button
              className={`tombol tombol--flex ${
                sedangMengirim ? "tombol--sedang-mengirim" : ""
              }`}
              type="submit"
              disabled={sedangMengirim}
            >
              {sedangMengirim
                ? `Mengirim Pesan${tandaMengirim}`
                : `Kirim Pesan`}
            </button>
          </form>
        </div>
      </motion.div>
      <ToastContainer />
    </section>
  );
};

export default Kontak;
