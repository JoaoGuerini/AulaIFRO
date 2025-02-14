'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./page.module.css";

export default function ExibirLista ({url, tipoPagina}){
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("")
  var medicoBusca = null
  console.log(tipoPagina)

  if (tipoPagina === 'Medico' || tipoPagina === 'Paciente') {
    medicoBusca = medicos.filter(medico => medico.nome.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase()))

  }
  else{
    medicoBusca = medicos.filter(consulta => consulta.medico.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase()))
  }
  const [error, setError] = useState(null); 
  

  useEffect(() => {
    setMedicos([])

    const fetchMedicos = async () => {
      try { 
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Erro ao buscar os dados ${res.status}`);
        }
        const text = await res.text();
        console.log(text);
        const data = JSON.parse(text);
        setMedicos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

      
    };

    fetchMedicos();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className={styles.tabelaContainer}>
      <h1 className={styles.title}>Lista de Médicos</h1>
      <input 
          value={busca}
          type="text" 
          onChange={(ev) => (setBusca(ev.target.value))}/>
      <ul>
          {medicoBusca.map((medico) =>(
              <li key={medico.id}>{medico.nome}</li>
          ))}   
      </ul>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            {tipoPagina == 'Medico' || tipoPagina == 'Paciente' ? <th>Nome</th>: null}
            {tipoPagina == 'Medico' || tipoPagina == 'Paciente' ? <th>Telefone</th>: null} 
            {tipoPagina == 'Medico' || tipoPagina == 'Paciente' ? <th>Email</th> : null}
            {tipoPagina == 'Consulta'  ? <th>Medico</th> : null}
            {tipoPagina == 'Medico' || tipoPagina == 'Consulta' ? <th>Especialidade</th>: null}
            {tipoPagina == 'Paciente' ? <th>CPF</th> : null}
            {tipoPagina == 'Consulta' ? <th>Paciente</th> : null}
            {tipoPagina == 'Consulta' ? <th>Tipo</th> : null}
          </tr>
        </thead>
      
        <tbody className={styles.corpoTabela}>
          {medicos.map((medico, index) => (
            <tr key={medico.id} className={index % 2 === 0 ? styles.linhaClara : ""}>
              <td>{medico.id}</td>
              <td>{medico.nome}</td>
              <td>{medico.telefone}</td>
              {tipoPagina == 'Paciente' || tipoPagina == 'Medico' ? <td>{medico.email}</td> : null}
              {tipoPagina == 'Paciente' ? <td>{medico.cpf}</td> : null}
              {tipoPagina == 'Medico' || tipoPagina == 'Consulta' ? <td>{medico.especialidade}</td> : null}
              {tipoPagina == 'Consulta' ? <td>{medico.medico}</td> : null}
              {tipoPagina == 'Consulta' ? <td>{medico.paciente}</td> : null}
              {tipoPagina == 'Consulta' ? <td>{medico.tipo}</td> : null}
            </tr>))}
        </tbody>
      </table> 
    </div>
  );
};
