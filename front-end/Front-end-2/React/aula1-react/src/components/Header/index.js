import styles from './header.module.css'
import Link from "next/link"


export default function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        <Link href={'/'}>
                            Main
                        </Link>
                    </li>
                    <li>
                        <Link href={'/sobre'}>
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contato'}>
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link href={'/states'}>
                            State
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}