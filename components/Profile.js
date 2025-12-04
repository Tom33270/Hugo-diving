import styles from '../styles/Profile.module.css';
import { useRouter } from "next/router";

function Profile(){
     const router = useRouter();


    return (
<div className={styles.global}>
    <section className={styles.header}>

         <h1 className={styles.title}> Profile Page</h1>
            <button onClick={() => router.push("/")}>Home</button>
    </section>

    <section className={styles.main}>

    </section>
</div>
 

    )
}

export default Profile