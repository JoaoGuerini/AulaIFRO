import Image from "next/image";
import logo from '../img/autismo.png';
import styles from "./page.module.css";
import ListaDeMedicos from "@/componentes/listaDeMedicos/listaDeMedicos.js";

export default function listaMedica() {
  return (
    <div>
      <ListaDeMedicos />
    </div>
  );
}
