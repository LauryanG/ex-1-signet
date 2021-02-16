import './Entete.scss';
import './Entete.scss';
import Utilisateur from './Utilisateur';

export default function Entete(props) {
    return(
        <header className="Entete">
            <div className="logo">Signets</div>
            <Utilisateur />
        </header>
    )
}