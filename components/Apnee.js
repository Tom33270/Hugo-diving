import styles from '../styles/Apnee.module.css';
import { useRouter } from "next/router";

function Apnee(){
     const router = useRouter();


    return (
<div className={styles.global}>
    <section className={styles.header}>

         <h1 className={styles.title}> Apnee Page</h1>
            <button onClick={() => router.push("/")}>Home</button>
    </section>

    <section className={styles.main}>

    </section>
</div>
 

    )
}

export default Apnee