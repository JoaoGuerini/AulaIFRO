import styles from './sobre.module.css'
import Header from '@/components/Header'



export default function Sobre(){

    return(
        <div>
            <Header/>
            <h1>
                Page Sobre
            </h1>
            <p className={styles.paragrafo}>Paragrafo</p>
            <p id={styles.paragrafoEspecial}>Paragrafo Especial</p>
        </div>
    )
}   