import Image from 'next/image'
import styles from './page.module.css'
import logo from '../../app/img/autismo.png'


export default function Header(){
    return(
        <header className={styles.Header}>
            <div className={styles.divImg}>
                <Image src={logo} width={200} height={200}></Image>
            </div>
            <nav className={styles.HeaderNav}>
                <ul className={styles.HeaderUl}>
                    <li className={styles.HeaderLi}>
                        <a href='/'>Home</a>
                    </li>
                    <li className={styles.HeaderLi}>
                        <a href='/listaMedica'>Médicos</a>
                        <ul></ul>
                    </li>
                    <li className={styles.HeaderLi}>
                        <a href='#'>Pacientes</a>
                        <ul></ul>
                    </li>
                    <li className={styles.HeaderLi}>
                        <a href='#'>Agendamento</a>
                        <ul></ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}