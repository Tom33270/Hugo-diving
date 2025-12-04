import styles from '../styles/Wikipage.module.css';
import { useRouter } from "next/router";

function Wikipage(){
     const router = useRouter();


    return (
<div className={styles.global}>
    <section className={styles.header}>

         <h1 className={styles.title}> Wiki Page</h1>
            <button onClick={() => router.push("/")}>Home</button>
    </section>

    <section className={styles.main}>

    </section>
</div>
 

    )
}

export default Wikipage