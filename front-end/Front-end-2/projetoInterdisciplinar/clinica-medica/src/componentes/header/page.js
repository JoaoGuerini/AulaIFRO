import Image from 'next/image'
import styles from './page.module.css'
import logo from '../../app/img/autismo.png'


export default function Header(){
    return(
        <header className={styles.Header}>
            <div className={styles.divImg}>
                <Image src={logo} width={100} height={100} alt='Logo'></Image>
            </div>
            <nav className={styles.HeaderNav}>
                <ul className={styles.HeaderUl}>
                    <li className={styles.HeaderLi}>
                        <a href='/'>Home</a>
                    </li>
                    <li className={styles.HeaderLi}>
                        <a href='#'>Médicos</a>
                        <ul className={styles.dropdownUL}>
                            <li className={styles.dropdownLI}><a href='/listaMedica'>Listar</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Adicionar</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Editar</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Excluir</a></li>
                        </ul>
                    </li>
                    <li className={styles.HeaderLi}>
                        <a href='#'>Pacientes</a>
                        <ul className={styles.dropdownUL}>
                            <li className={styles.dropdownLI}><a href='#'>Listar</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Adicionar</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Editar</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Excluir</a></li>
                        </ul>
                    </li>
                    <li className={styles.HeaderLi}>
                        <a href='#'>Agendamento</a>
                        <ul className={styles.dropdownUL}>
                            <li className={styles.dropdownLI}><a href='#'>Listar Consultas</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Agendar Consultas</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Editar Consultas</a></li>
                            <li className={styles.dropdownLI}><a href='#'>Cancelar</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}