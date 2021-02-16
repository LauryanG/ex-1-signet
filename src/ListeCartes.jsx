import './ListeCartes.scss';
import Carte from './Carte';
import tabDossier from './data/dossiers.json';

export default function ListeCartes(props) {
    return(
        <div className="ListeCartes">
            <ul>
                {
                    tabDossier.map(dossier => 
                    <Carte etatDossier={props.etatDossier} key={dossier.id} titre={dossier.titre} couleur={dossier.couleur} date={dossier.date} id={dossier.id}/>
                )}
            </ul>
        </div>
    )
}