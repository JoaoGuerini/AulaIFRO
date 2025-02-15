import React, { useState, useEffect, use } from "react";
import styles from "./page.module.css";

export default function ModalBusca({ lista, isOpen, onClose, tipoBusca, children }) {
  const [busca, setBusca] = useState("");
  const [tipoModalBusca, setTipoModalBusca] = useState('')
  const [resultados, setResultados] = useState([]);
  const [secondResultado, setSecondResultado] = useState([])

  useEffect(() => {
    if (!isOpen) return; 
    var filtrados = ''
    var secondFiltrados = ''
    
    switch (tipoBusca){
        case 0:
            filtrados = lista.filter((item) =>
                item.nome.toLowerCase().includes(busca.toLowerCase())
          );
          setTipoModalBusca(children)
          break

        case 1:
            filtrados = lista.filter((item) =>
                item.paciente.toLowerCase().includes(busca.toLowerCase()))
            setTipoModalBusca('Pacientes')
            break
        case 2:
            secondFiltrados = lista.filter((item) =>
                item.medico.toLowerCase().includes(busca.toLowerCase()))
            
            setSecondResultado(secondFiltrados)
            setTipoModalBusca('Medicos')
            break
    }

    setResultados(filtrados);
  }, [busca, isOpen, lista]);

  useEffect(() => {
    setBusca("")
  }, [onClose])

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2 className={styles.title}>{tipoBusca === 0 ? children : `Buscar ${tipoModalBusca}`}</h2>
        <input
          type="text"
          placeholder="Digite para buscar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className={styles.inputBusca}
        />
        <div className={styles.resultContainer}>
          <ul className={styles.resultList}>
            {resultados.length > 0 && tipoBusca === 0 ? (
              resultados.map((item, index) => <li key={index}>{item.nome}</li>)
            ) : (
              null
            )}

            {resultados.length > 0 && tipoBusca === 1 ? (
              resultados.map((item, index) => <li key={index}>{item.paciente}</li>)
            ) : (
              null
            )}

            {secondResultado.length > 0 && tipoBusca === 2? (
              secondResultado.map((item, index) => <li key={index}>{item.medico}</li>)
            ) : (
              null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
