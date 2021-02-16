import './Carte.scss';
import NotesIcon from '@material-ui/icons/Notes';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import OptionsCarte from './OptionsCarte';

export default function Carte(props) {
    const {id, titre, date} = props;
    return(
        <li className="Carte">
            <NotesIcon />
            <img src={'image-dossiers/' + props.id + '.png'} alt=""/>
            <div className="info">
                <h1 className="nom">{props.titre}</h1>
                <p className="date">Modifié : {props.date}</p>
            </div>
            <button> <MoreVertIcon /> </button>
            <OptionsCarte />
        </li>
    )
}