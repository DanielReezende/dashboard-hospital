import {Syringe, Stethoscope, Exam, PencilLine, AddressBook, Person, Prescription } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link to="/CadPacientes">Pacientes <Person size={17} /></Link>            
      <Link to="/Prescricoes">Prescrição UTI <Prescription size={17}/></Link>
      <Link to="/Resumoalta">Resumo de Alta <AddressBook size={17} /></Link>
      <Link to="/Admissao">Admissão <PencilLine size={17} /></Link>
      <Link to="/Exames">Exames <Exam size={17} /></Link>
      <Link to="/Evolucaodiaria">Evolução Diária <Stethoscope size={17} /></Link>
      <Link to="/Evolucaonoturna">Evolução Noturna <Stethoscope size={17}/> </Link>
      <Link to="/Evolucaoenfermagem">Evolução Enfermagem <Syringe size={17} /></Link>
    </aside>
  );
}
