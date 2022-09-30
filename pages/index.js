import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <section className={styles.contact}>
        <div className={styles.contactMain}>
          <div className={styles.contactTitle}>
            <p>お問合せ</p>
            <h1>Contact</h1>
          </div>

          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            className={styles.form}
          >
            <input
              type="hidden"
              name="accessKey"
              value="7adf81ec-942f-4a70-b8d5-e01074e1b7d4"
            />
            {/* <textarea name="message"></textarea> */}

            <div className={styles.contactItem}>
              <label className={styles.label}>お名前</label>
              <input type="text" className={styles.input} name="name" />
            </div>

            <div className={styles.contactItem}>
              <label className={styles.label}>メールアドレス</label>
              <input
                type="email"
                className={styles.input}
                name="email"
                required
              />
            </div>

            <div className={styles.contactItem}>
              <label className={styles.label}>ご質問</label>
              <textarea
                name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="ご質問はこちら"
              ></textarea>
            </div>

            <div className={styles.buttonArea}>
              <input className={styles.button} type="submit" value="送信" />
              <input className={styles.button} type="reset" value="リセット" />
              <p>＊送信後に別画面に遷移しますが、スワイプすると元に戻ります</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
