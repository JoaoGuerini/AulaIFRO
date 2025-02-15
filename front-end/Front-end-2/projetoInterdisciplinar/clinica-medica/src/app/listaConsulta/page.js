import Image from "next/image";
import logo from '../img/autismo.png';
import styles from "./page.module.css";
import ExibirLista from "@/componentes/listaDeMedicos/exibirLista.js";

export default function listaConsulta() {
  return (
    <div>
      <ExibirLista url={'https://api-clinica-2a.onrender.com/consultas'} tipoPagina={'Consultas'}/>
    </div>
  );
}
