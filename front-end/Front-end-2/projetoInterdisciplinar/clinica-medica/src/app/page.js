import Image from "next/image";
import logo from './img/autismo.png';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.divPrincipal}>
      <h1 className={styles.TituloPage}>Bem-vindo à Clínica Autista</h1>
      <p className={styles.Text}>
        Nossa equipe de profissionais altamente qualificados está pronta para oferecer a você um atendimento médico de excelência, 
        com dedicação e compromisso com a sua saúde. Na Clínica Autista, unimos tecnologia de ponta, atendimento humanizado e uma ampla 
        variedade de especialidades para proporcionar o melhor cuidado e bem-estar para você e sua família.
      </p>
    </div>
  );
}
