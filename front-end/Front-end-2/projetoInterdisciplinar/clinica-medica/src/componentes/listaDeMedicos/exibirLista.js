'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./page.module.css";
import ButtonBusca from '../buttonBusca/page';
import ModalBusca from '../modalBusca/page';

export default function ExibirLista ({url, tipoPagina}){
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("")
  const [secondModalAberta, setSecondModalAberta] = useState(false)
  const [modalAberta, setModalAberta] = useState(false);

  var medicoBusca = null
  console.log(tipoPagina)

  if (tipoPagina === 'Médicos' || tipoPagina === 'Pacientes') {
    medicoBusca = medicos.filter(medico => medico.nome.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase()))
  }
  else{
    medicoBusca = medicos.filter(consulta => consulta.medico.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase()))
  }
  const [error, setError] = useState(null); 
  

  useEffect(() => {  
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
      <h1 className={styles.title}>Lista de {tipoPagina}</h1>
      
      {tipoPagina === 'Consultas' ? 
        <div className={styles.Buttons}>
          <ButtonBusca tipoBusca={tipoPagina} onClick={() => setModalAberta(!modalAberta)}>Buscar Médicos</ButtonBusca>
          <ButtonBusca tipoBusca={tipoPagina} onClick={() => setSecondModalAberta(!secondModalAberta)}>Buscar Pacientes</ButtonBusca>

          <ModalBusca lista={medicos} isOpen={secondModalAberta} onClose={() => setSecondModalAberta(false)} tipoBusca={1}>Buscar {tipoPagina}</ModalBusca>
          <ModalBusca lista={medicos} isOpen={modalAberta} onClose={() => setModalAberta(false)} tipoBusca={2}>Buscar {tipoPagina}</ModalBusca>
        </div>
        :
        <div className={styles.Buttons}>
          <ButtonBusca tipoBusca={tipoPagina} onClick={() => setModalAberta(!modalAberta)}>Buscar {tipoPagina}</ButtonBusca>
          <ModalBusca lista={medicos} isOpen={modalAberta} onClose={() => setModalAberta(false)} tipoBusca={0}>Buscar {tipoPagina}</ModalBusca>
        </div>}
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            {tipoPagina == 'Médicos' || tipoPagina == 'Pacientes' ? <th>Nome</th>: null}
            {tipoPagina == 'Médicos' || tipoPagina == 'Pacientes' ? <th>Telefone</th>: null} 
            {tipoPagina == 'Médicos' || tipoPagina == 'Pacientes' ? <th>Email</th> : null}

            {tipoPagina == 'Pacientes' ? <th>CPF</th> : null}
            {tipoPagina == 'Médicos' || tipoPagina == 'Consultas' ? <th>Especialidade</th>: null}
            {tipoPagina == 'Consultas'  ? <th>Medico</th> : null}
            {tipoPagina == 'Consultas' ? <th>Paciente</th> : null}
            {tipoPagina == 'Consultas' ? <th>Tipo</th> : null}
          </tr>
        </thead>
      
        <tbody className={styles.corpoTabela}>
          {medicos.map((medico, index) => (
            <tr key={medico.id} className={index % 2 === 0 ? styles.linhaClara : ""}>
              <td>{medico.id}</td>
              {tipoPagina == 'Médicos' || tipoPagina == 'Pacientes' ? <td>{medico.nome}</td> : null}
              {tipoPagina == 'Médicos' || tipoPagina == 'Pacientes' ? <td>{medico.telefone}</td> : null}
              {tipoPagina == 'Pacientes' || tipoPagina == 'Médicos' ? <td>{medico.email}</td> : null}
              {tipoPagina == 'Pacientes' ? <td>{medico.cpf}</td> : null}
              {tipoPagina == 'Médicos' || tipoPagina == 'Consultas' ? <td>{medico.especialidade}</td> : null}
              {tipoPagina == 'Consultas' ? <td>{medico.medico}</td> : null}
              {tipoPagina == 'Consultas' ? <td>{medico.paciente}</td> : null}
              {tipoPagina == 'Consultas' ? <td>{medico.tipo}</td> : null}
            </tr>))}
        </tbody>
      </table> 
    </div>
  );
};
