const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div class="header__top-inner">
            <a class="logo" href="https://faibysh.github.io/marketing/">
              <svg
                width="80"
                height="64"
                viewBox="0 0 80 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3474 55.2856C12.8034 55.2856 10.5114 54.7336 8.47141 53.6296C6.43141 52.5016 4.82341 50.9536 3.64741 48.9856C2.49541 47.0176 1.91941 44.8216 1.91941 42.3976C1.91941 39.9736 2.49541 37.7776 3.64741 35.8096C4.82341 33.8416 6.43141 32.3056 8.47141 31.2016C10.5114 30.0736 12.8034 29.5096 15.3474 29.5096C17.8674 29.5096 20.1474 30.0736 22.1874 31.2016C24.2274 32.3056 25.8234 33.8416 26.9754 35.8096C28.1274 37.7536 28.7034 39.9496 28.7034 42.3976C28.7034 44.8456 28.1274 47.0536 26.9754 49.0216C25.8234 50.9656 24.2274 52.5016 22.1874 53.6296C20.1474 54.7336 17.8674 55.2856 15.3474 55.2856ZM15.3474 52.0816C17.1954 52.0816 18.8514 51.6616 20.3154 50.8216C21.8034 49.9816 22.9674 48.8296 23.8074 47.3656C24.6714 45.8776 25.1034 44.2216 25.1034 42.3976C25.1034 40.5736 24.6714 38.9296 23.8074 37.4656C22.9674 35.9776 21.8034 34.8136 20.3154 33.9736C18.8514 33.1336 17.1954 32.7136 15.3474 32.7136C13.4994 32.7136 11.8194 33.1336 10.3074 33.9736C8.81941 34.8136 7.64341 35.9776 6.77941 37.4656C5.93941 38.9296 5.51941 40.5736 5.51941 42.3976C5.51941 44.2216 5.93941 45.8776 6.77941 47.3656C7.64341 48.8296 8.81941 49.9816 10.3074 50.8216C11.8194 51.6616 13.4994 52.0816 15.3474 52.0816ZM57.5698 54.9976L57.5338 36.6376L48.4258 51.9376H46.7698L37.6618 36.7456V54.9976H34.2058V29.7976H37.1578L47.6698 47.5096L58.0378 29.7976H60.9898L61.0258 54.9976H57.5698Z"
                  fill="#333333"
                />
                <path
                  d="M76.6783 19.6298L75.2649 19.1976C75.0688 19.1377 74.8618 19.1941 74.7294 19.3433C74.386 19.7309 74.0092 20.0994 73.6093 20.4387C70.6452 22.9537 66.9246 23.8125 62.85 22.9233C58.7957 22.0386 56.9322 19.692 54.353 16.4441C54.1686 16.2118 53.981 15.9756 53.7891 15.7357C53.7673 15.7083 53.7416 15.6724 53.7144 15.6344C53.6428 15.5343 53.5536 15.4098 53.4281 15.287C53.2576 15.1201 53.0719 14.9646 52.8761 14.825C52.4716 14.5364 52.2018 14.082 52.1361 13.5784L51.7024 10.2566C51.6836 10.1126 51.6098 9.97958 51.4971 9.88658C51.3846 9.79352 51.2423 9.74818 51.1017 9.76061L48.9617 9.94883C48.6692 9.97446 48.4637 10.2384 48.5027 10.5381L48.9187 13.7244C48.9642 14.0732 48.8514 14.428 48.6092 14.6977C48.2393 15.1095 48.0509 15.6178 48.0642 16.1673C48.2326 23.1161 52.8916 28.2594 60.5271 29.9255C63.8224 30.6445 67.3266 30.2145 70.3941 28.7146C71.0115 28.4127 71.5957 28.0749 72.1441 27.7029C72.9085 27.1844 73.6034 26.5995 74.2215 25.9536C75.3264 24.7991 76.1295 23.5062 76.6087 22.111C76.8142 21.5124 76.971 20.8917 77.0744 20.266C77.1203 19.989 76.948 19.7123 76.6783 19.6298ZM49.6332 10.9875L50.7136 10.8925L51.0011 13.0943L50.5648 13.105L49.9117 13.121L49.6332 10.9875ZM71.5314 26.7872C68.5608 28.8018 64.5296 29.6956 60.7032 28.8607C53.613 27.3135 49.2877 22.5775 49.1329 16.1918C49.1246 15.8488 49.2808 15.6009 49.4132 15.4535C49.728 15.1029 49.9232 14.6684 49.9802 14.2102L51.1886 14.1806C51.3811 14.7938 51.7672 15.3339 52.2911 15.7076C52.4387 15.8129 52.5786 15.9299 52.7067 16.0553C52.7595 16.107 52.8063 16.1726 52.8607 16.2485C52.8956 16.2973 52.9317 16.3477 52.9729 16.3992C53.1639 16.6383 53.3508 16.8735 53.5345 17.1049C56.1583 20.409 58.2307 23.0186 62.6737 23.9881C64.9004 24.474 67.0495 24.4727 69.0614 23.9844C70.8865 23.5414 72.5656 22.7073 74.0574 21.5031L74.0933 21.5206L74.2848 21.6142C73.5154 22.8093 72.5337 23.8047 71.3974 24.5753C68.9006 26.2686 65.662 26.879 62.3163 26.149C57.1068 25.0123 53.3962 22.2086 51.8678 18.2544C51.758 17.9702 51.4468 17.8198 51.1728 17.9184C50.8987 18.0169 50.7657 18.3273 50.8755 18.6116C52.548 22.9387 56.5485 25.9938 62.1401 27.2138C64.8685 27.8091 67.5783 27.5923 69.9764 26.5867C70.7048 26.2813 71.3903 25.9101 72.0272 25.478C73.3342 24.5915 74.4353 23.4491 75.2776 22.0992L75.424 22.1707C74.6693 24.0172 73.2854 25.5976 71.5314 26.7872ZM75.7706 21.1544L75.5521 21.0477L74.9213 20.7396C75.0568 20.6079 75.1891 20.4733 75.3175 20.3361L75.9274 20.5226C75.8817 20.7348 75.8294 20.9456 75.7706 21.1544Z"
                  fill="black"
                />
              </svg>
            </a>
            <nav class="menu">
              <button class="menu__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="18"
                  viewBox="0 0 30 18"
                  fill="none"
                >
                  <path d="M0 0H30V2H0V0Z" fill="black"></path>
                  <path d="M0 8H30V10H0V8Z" fill="black"></path>
                  <rect y="16" width="30" height="2" fill="black"></rect>
                </svg>
              </button>
              <ul class="menu__list">
                <li class="menu__list-item">
                  <a class="menu__list-link" href="#body">
                    HOME
                  </a>
                </li>
                <li class="menu__list-item">
                  <a class="menu__list-link" href="#about">
                    ABOUT US
                  </a>
                </li>
                <li class="menu__list-item">
                  <a class="menu__list-link" href="#portfolio">
                    PORTFOLIO
                  </a>
                </li>
                <li class="menu__list-item">
                  <a class="menu__list-link" href="#team">
                    OUR TEAM
                  </a>
                </li>
                <li class="menu__list-item">
                  <a class="menu__list-link" href="#blog">
                    BLOG
                  </a>
                </li>
                <li class="menu__list-item">
                  <a class="menu__list-link" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
