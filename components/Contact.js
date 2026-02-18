import styles from '../styles/Contact.module.css';
import { useRouter } from "next/router";

function Contact(){
      const router = useRouter();
    

    return (
<div className={styles.global}>
    <section className={styles.header}>

         <h1 className={styles.title}> Contact Page</h1>
         <button onClick={() => router.push("/")}>Home</button>
    </section>

    <section className={styles.main}>

    </section>
</div>
 

    )
}

export default Contact