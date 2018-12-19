import React, { Component } from 'react';
import '../../App.css';

import '../../styles/test_styles.css'

class EditTestComponent extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark justify-content-left">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">Trang chủ</a>
                </nav>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tạo đề thi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tạo câu hỏi đề thi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bảng xếp hạng giáo viên</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bảng  xếp hạng học sinh</a>
                    </li>
                    
                </ul>
                <div className="navbarMenu" >
                    <form className="form-inline" action="/action_page.php">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                        <button class="btn btn-success" type="submit">Search</button>

                    </form>
                </div>
            </nav>
            
            <div className="container mt-30 color_black mb-20 ">
                
                <div className="row ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="test_center">
                            <h2>Tạo câu hỏi đề thi trắc nghiệm</h2>
                        </div>
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-30   ">
                        <h3>Danh sách đề thi đã tạo</h3>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Mã đề thi</th>
                                    <th>Tên đề thi</th>
                                    <th>Thời gian</th>
                                    <th>Số câu</th>
                                   
                                    <th>Chỉnh sửa</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                        </table>
                       
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-30 khung">
                        <div className="test_center">
                        <h3>Thêm đề thi mới</h3>
                        </div>
                        <form method="POST" role="form" action="add" enctype="multipart/form-data">
                           
                            <div className="form-group">
                                <label for="">Môn học</label>
                                <select name="MaMonHoc" className="form-control">
                                   
                                    <option value="0">Toán</option>
                                    <option value="1">Lý</option>
                                    <option value="2">Hóa</option>
                                    <option value="3">Tiếng Anh</option>
                                    <option value="4">Địa lý</option>
                                    
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="">Tên đề thi</label>
                                <input type="text" className="form-control" name="TenDethi" placeholder="Tên đề thi"></input>
                            </div>
                            <div className="form-group">
                                <label for="">Số câu hỏi</label>
                                <input type="text" className="form-control" name="TenDethi" placeholder="SoCauHoi"></input>
                            </div>
                            <div className="form-group">
                                <label for="">Thời gian</label>
                                <input type="text" className="form-control" name="TenDethi" placeholder="Time"></input>
                            </div>
                            
                        
                            
                            

                           
                            <div className="test_right mr-30">
                               
                                <button type="submit" className="btn btn-primary">
                                    <span className="glyphicon glyphicon-ok"></span>
                                    Thêm
                                </button>
                             </div>
                            <br></br>
                            <br></br>
                            <br></br>
                           
                        </form>

                        
                    </div>
                   

                 </div>
            </div>      
</div>


  

    );
  }
}

export default EditTestComponent;
