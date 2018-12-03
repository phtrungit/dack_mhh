import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <header className="header d-flex flex-row">
		<div className="header_content d-flex flex-row align-items-center">
			<div className="logo_container">
				<div class="logo">
                <img src={require('../images/logo.png')}/>
					<span>course</span>
                </div>
			</div>
            <nav className="main_nav_container">
				<div className="main_nav">
					<ul className="main_nav_list">
						<li className="main_nav_item"><a href="#">home</a></li>
						<li className="main_nav_item"><a href="#">about us</a></li>
						<li className="main_nav_item"><a href="courses.html">courses</a></li>
						<li className="main_nav_item"><a href="elements.html">elements</a></li>
						<li className="main_nav_item"><a href="news.html">news</a></li>
						<li className="main_nav_item"><a href="contact.html">contact</a></li>
					</ul>
				</div>
			</nav>
		</div>
        <div class="header_side d-flex flex-row justify-content-center align-items-center">
			<img src= {require('../images/phone-call.svg')} alt=""></img>
			<span>+43 4566 7788 2457</span>
		</div>

		<div className="hamburger_container">
			<i classNam="fas fa-bars trans_200"></i>
		</div>
        </header>
        
    );
  }
}

export default HeaderComponent;
