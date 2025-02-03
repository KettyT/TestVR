function AppHeader() {
  return (
      <header>
          <nav className="main-navigation">
              <div className="navigation-menu">
                  <div className="user-info">
                      <div className="user-info--menu"></div>
                      <div className="user-info--brief">
                          <img src="img/avatar.png" width="32" height="32" alt="Аватар"/>
                          <div className="user-name">Алексей</div>
                      </div>
                  </div>
                  <div><a><img src="img/Logo.svg" width="176" height="44" alt="Логотип"/></a></div>
                  <div className="user-notification">
                      <button className="user-notification--btn">Кабинет</button>
                      <a href="blank.html"><img src="img/notification.svg" width="" height="" alt="Уведомления"/></a>
                  </div>
              </div>
          </nav>

      </header>
  );
}

export default AppHeader;
