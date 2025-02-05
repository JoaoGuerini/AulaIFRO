'use client'
import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";

const ListaDeMedicos = () => {
  const [medicos, setMedicos] = useState(['']);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("")
  const medicoBusca = medicos.filter(medico => (medico.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase())));
  const [error, setError] = useState(null); 
  

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const res = await fetch('http://localhost:7777/medicos');
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
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody className={styles.corpoTabela}>
          {medicos.map((medico, index) => (
            <tr key={medico.id} className={index % 2 === 0 ? styles.linhaClara : ""}>
              <td>{medico.id}</td>
              <td>{medico.nome}</td>
              <td>{medico.telefone}</td>
              <td>{medico.email}</td>
              <td>{medico.especialidade}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaDeMedicos;