import styles from "./card.module.css";

export default function Card({ id, nome, geracao, evo }){
    return(
        <div className={styles.card}>
            <h2>{nome}</h2>
            <p>{id}</p>
            <p>{geracao}</p>
            <p>{evo}</p>
        </div>
    )
}