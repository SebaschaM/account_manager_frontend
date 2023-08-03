import styles from "../../styles/Home.module.css";
import { FaUserShield } from "react-icons/fa";

function Home() {
  return (
    <section className={styles.container}>
      <header className={styles.container_nav}>
        <div className={styles.container_logo}>
          <FaUserShield className={styles.logo} />
          <span className={styles.logo_name}>Accountrix</span>
        </div>
        <ul className={styles.container_options}>
          <li className={styles.option}>
            <a href="/login">
              <span className={styles.text_option}>Login</span>
            </a>
          </li>
          <li className={styles.option}>
            <a href="/register">
              <span className={styles.text_option}>Register</span>
            </a>
          </li>
        </ul>
      </header>
      <section className={styles.container_main}>
        <div className={styles.main_img}>
          <img
            src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1690531984/account_manager/security_font_oawedd.jpg"
            alt="security_font"
            className={styles.security_img}
          />
          <p className={styles.text_phrase}>
            Tu Aliado en la Gestión Financiera con Total Privacidad
          </p>
        </div>
        <section className={styles.contain_offer}>
          <p className={styles.offer_question}>What do we offer?</p>
          <section className={styles.container_card_offers}>
            <div className={styles.card_offer}>
              <div className={styles.card_info}>
                <img
                  src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1690530737/account_manager/offer_1_slivc8.png"
                  alt="seguridad"
                  className={styles.img_offer}
                />
                <span className={styles.item_offer}>Facilidad</span>
              </div>
              <p className={styles.text_offer}>
                Facilitar las cosas al manejar las tareas de la cuenta y
                responder a preguntas.
              </p>
            </div>
            <div className={styles.card_offer}>
              <div className={styles.card_info}>
                <img
                  src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1690532173/account_manager/offer_2_u6ywqo.jpg"
                  alt="seguridad"
                  className={styles.img_offer}
                />
                <span className={styles.item_offer}>Servicio</span>
              </div>
              <p className={styles.text_offer}>
                Proporcionar un excelente servicio al cliente al estar
                disponible para responder preguntas y resolver problemas.
              </p>
            </div>
            <div className={styles.card_offer}>
              <div className={styles.card_info}>
                <img
                  src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1690532283/account_manager/offer_3_vuqh4j.jpg"
                  alt="seguridad"
                  className={styles.img_offer}
                />
                <span className={styles.item_offer}>Confianza</span>
              </div>
              <p className={styles.text_offer}>
                Construir confianza, al proporcionar un servicio de alta calidad
                y estar disponible para responder preguntas.
              </p>
            </div>
          </section>
          <footer className={styles.container_footer}>
            <p className={styles.footer_text}>
              <span className={styles.brand_text}>Accountrix</span> - Todos los
              derechos reservados &copy; 2023
            </p>
          </footer>
        </section>
      </section>
    </section>
  );
}

export default Home;
