import {useState, useEffect} from 'react';
import { setContent } from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService';
import {_transformCharDescription} from '../../services/MarvelService';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { Link } from 'react-router-dom';
const RandomChar = () => {
    const [char, setChar] = useState(null);
    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 6000);

        // return() => {
        //     clearInterval(timerId);
        // }
        // eslint-disable-next-line
    }, [])


    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400-1011000) + 1011000);
        getCharacter(id)
            .then(data => _transformCharDescription(data))
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

 return (
        <div className="randomchar">
            {setContent(process, View, char)}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
    
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki} = data;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                    </p>
                <div className="randomchar__btns">
                    <Link to={`/characters/${data.id}`} className="button button__main">
                        <div className="inner">details</div>
                    </Link>
                    <a href={`https://www.google.com/search?q=${encodeURIComponent(name)} marvel character`} target="_blank" className="button button__secondary">
                        <div className="inner">Search</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;

