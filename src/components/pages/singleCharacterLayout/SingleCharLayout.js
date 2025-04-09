import { Helmet } from "react-helmet";
import './singleCharLayout.scss';
import { Link } from 'react-router-dom';

const SingleCharacterLayout = ({data}) => {
    if (!data) {
        return (
            <div className="single-comic">
                <div className="single-comic__info">
                    <h2 className="single-comic__name">Character not found</h2>
                    <Link to="/" className="single-comic__back">Back to all</Link>
                </div>
            </div>
        )
    }

    const {name, description, thumbnail, comics = []} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} page`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics.length === 0 ? 'Comics with this character not found in database.' : null}
                    {comics.map((item, i) => {
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                <Link to={`/comics/${(item.resourceURI).split('/').slice(-1)}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                </div>
                <Link to="/" className="single-comic__back">Back to all</Link>
            
        </div>
    )
}

export default SingleCharacterLayout;