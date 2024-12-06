import Card from "@/components/card.js"
import styles from "./props.module.css"

export default function Props(){

    const pokes = [
        {
            id: 1,
            nome: 'Charmander',
            geracao: '1',
            evo: 'Charmeleon'
        },
        {
            id: 2,
            nome: 'Bulbasaur',
            geracao: '1',
            evo: 'Ivysaur'
        },
        {
            id: 3,
            nome: 'Squirtle',
            geracao: '1',
            evo: 'Wartortle'
        },
        {
            id: 4,
            nome: 'Chikorita',
            geracao: '2',
            evo: 'Bayleef'
        },
        {
            id: 5,
            nome: 'Cyndaquil',
            geracao: '2',
            evo: 'Quilava'
        },
        {
            id: 6,
            nome: 'Totodile',
            geracao: '2',
            evo: 'Croconaw'
        }
    ];
    
    return(
        <div className={styles.divMaster}>
        
            {pokes.map((pokemon) => (
                <Card 
                    nome={pokemon.nome}
                    id={pokemon.id}
                    evo={pokemon.evo}
                    geracao={pokemon.geracao}
                    key={pokemon.id}/>
            ))}
        
        </div>
    )
}