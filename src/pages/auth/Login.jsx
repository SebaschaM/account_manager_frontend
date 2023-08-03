import styles from "../../styles/Login.module.css";

function Login() {
  return (
    <section className={styles.container}>
      <img
        src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1690616024/account_manager/login_xalhvi.jpg"
        alt="login_img"
        className={styles.img_login}
      />
      <section className={styles.container_login}>
        <h1>LOGIN</h1>
        <form className={styles.container_form}></form>
      </section>
    </section>
  );
}

export default Login;
