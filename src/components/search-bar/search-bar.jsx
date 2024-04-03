import { useId, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import style from './search-bar.module.css';

const SearchBar = ({ label, placeholder, className, onSearch }) => {

    // Gestion des "id" des balises du formulaire
    const formId = useId();

    // Gestion du contenu du formulaire (Composant controlé)
    const [query, setQuery] = useState('');

    // Utilisation d'une "ref" pour la gestion du focus
    const inputRef = useRef();

    // Gestion de la validation du formulaire
    const handleSubmit = (e) => {
        //? Désactivé le comportement de l'event
        e.preventDefault();

        //? Test de garde (Pas de submit de chaine vide)
        if (query.trim() === '') {
            return;
        }

        //? Envois de la donnée vers la composant parent
        onSearch(query.trim());

        //? Reset le formulaire (Contenu / Focus)
        setQuery('');
        inputRef.current.focus();
    }

    // Rendu
    return (
        <form className={style['search-form'] + ' ' + className}
            onSubmit={handleSubmit}>
            {label && (
                <label htmlFor={formId}>{label}</label>
            )}
            <input type="text" id={formId}
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                ref={inputRef}
            />
            <button type="submit"
                disabled={query.trim() === ''}>
                Chercher
            </button>
        </form>
    )
};

SearchBar.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onSearch: PropTypes.func
};

SearchBar.defaultProps = {
    label: '',
    placeholder: '',
    className: '',
    onSearch: () => { } // NOOP
}

export default SearchBar;