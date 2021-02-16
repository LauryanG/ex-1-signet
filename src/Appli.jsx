import { useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeCartes from './ListeCartes';
import PiedDePage from './PiedDePage';

export default function Appli() {
  const [etatDossier, setEtatDossier] = useState({});
  return (
    <div className="Appli">
        <Entete />
        <section className="contenuPrincipal">
          <ListeCartes etatDossier={etatDossier}/>
        </section>
        <PiedDePage />
    </div>
  );
}
