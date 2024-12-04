export default function Listas(){
    const times = ['Warrios', 'Lakers', 'Celtics','Miami heat', 'Toronto Raptos', 'Bucks', "Nuggets", "Dalas"]
    const timesOBJ = [
        {
            time: "Warriors",
            id: 1
        },
        {
            time: "Lakers",
            id: 2
        },
        {
            time: "Celtics",
            id: 3
        },
        {
            time: "Miami heat",
            id: 4
        },
        {
            time: "Toronto Raptos",
            id: 5
        },
        {
            time: "Bucks",
            id: 6
        },
        {
            time: "Nuggets",
            id: 7
        },
        {
            time: "Dalas",
            id: 8
        },
        {
            time: "Chigago Bulls",
            id: 9
        }
    ]
    return(
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            
            <ul style={{display: "flex", flexDirection: "column", gap: 20}}>
                <h2>
                    Lista Comum
                </h2>
                {times.map((listas, indice) => (
                       <div key={indice}>
                            {indice + 1} - {listas} 
                       </div>
                ))}
                <h2>
                    Listas de objetos
                </h2>
                {timesOBJ.map(listas => (
                    <div key={listas.id}>
                        {listas.id} - {listas.time}
                    </div>
                ))}
            </ul>

        </div>
    )
}