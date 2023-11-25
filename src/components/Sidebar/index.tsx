import { Link } from "react-router-dom";

import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link to="/CadPacientes">Pacientes</Link>
      <Link to="/Prescricoes">Prescrição UTI</Link>
      <Link to="/Resumoalta">Resumo de Alta</Link>
      <Link to="/Admissao">Admissão</Link>
      <Link to="/Exames">Exames</Link>
      <Link to="/Evolucaodiaria">Evolução Diária</Link>
      <Link to="/Evolucaonoturna">Evolução Noturna</Link>
      <Link to="/Evolucaoenfermagem">Evolução Enfermagem</Link>
    </aside>
  );
}
