export default function Header({ onToggleDarkMode, isDarkMode }) {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={onToggleDarkMode}>
          <i
            className={`fa-${isDarkMode ? 'solid' : 'regular'} fa-${isDarkMode ? 'sun' : 'moon'}`}
          />
          &nbsp;&nbsp;{isDarkMode ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  );
}
