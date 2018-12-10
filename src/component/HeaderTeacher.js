import React, { Component } from 'react';

class HeaderTeacher extends Component {
    render() {
        return (
            <header className="header d-flex flex-row">
                <div className="header_content d-flex flex-row align-items-center">
                    <div className="logo_container">
                        <div class="logo">
                            <img src={require('../images/logo.png')} />
                            <span>course</span>
                        </div>
                    </div>
                    <nav className="main_nav_container">
                        <div className="main_nav">
                            <ul className="main_nav_list">
                                <li className="main_nav_item"><a href="#">Trang chủ</a></li>
                                <li className="main_nav_item"><a href="#">Tạo bài thi mới</a></li>
                                <li className="main_nav_item"><a href="#">Danh sách bài thi đã tạo</a></li>
                                <li className="main_nav_item"><a href="#">Bảng xếp hạng</a></li>
                                <li className="main_nav_item"><a href="#">Tin tức</a></li>
                                <li className="main_nav_item"><a href="#">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div className="main_nav navbar-right">
                            <ul className="main_nav_list">
                                <li className="main_nav_item"><a href="#">Tên Giáo Viên</a></li>
                                <li className="main_nav_item"><a href="#">Đăng xuất</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="header_side d-flex flex-row justify-content-center align-items-center">
                    <img src={require('../images/phone-call.svg')} alt=""></img>
                    <span>+43 4566 7788 2457</span>
                </div>

                <div className="hamburger_container">
                    <i classNam="fas fa-bars trans_200"></i>
                </div>
            </header>

        );
    }
}

export default HeaderTeacher;


