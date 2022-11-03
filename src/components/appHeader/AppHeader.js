import './appHeader.scss';

const AppHeader = () => {
    
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4&oq=&aqs=chrome.0.35i39i362l7j46i39i362.1514507j0j7&sourceid=chrome&ie=UTF-8">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4&oq=&aqs=chrome.0.35i39i362l7j46i39i362.1514507j0j7&sourceid=chrome&ie=UTF-8">Characters</a></li>
                    /
                    <li><a href="https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4&oq=&aqs=chrome.0.35i39i362l7j46i39i362.1514507j0j7&sourceid=chrome&ie=UTF-8">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;