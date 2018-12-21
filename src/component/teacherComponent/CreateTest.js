import React, { Component } from 'react';
import '../../App.css';

import '../../styles/test_styles.css'

class CreateTestComponent extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark justify-content-left">
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a class="navbar-brand" href="#">Trang chủ</a>
                </nav>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tạo đề thi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tạo câu hỏi đề thi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bảng xếp hạng giáo viên</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bảng  xếp hạng học sinh</a>
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

                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-30  ">
                            
                       
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-30 khung">
                        
                        <form method="POST" role="form" action="add" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="">Mã đề thi</label>
                                <select name="MaDeThi" class="form-control">
                                       <option value=""></option>
                                        
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Môn học</label>
                                <select name="MaMonHoc" class="form-control">
                                   
                                    <option value=""></option>
                                
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Nội dung</label>
                                <input type="text" class="form-control" name="NoiDung" placeholder="Nội dung câu hỏi"></input>
                            </div>
                            <div class="form-group ">
                                <label for="">Hình minh họa, video minh họa</label><br></br>
                                <input type="file"  name="HinhMinhHoa"></input>
                            </div>
                            <div class="form-group">
                                <label for="">Đáp án A</label>
                                <input type="text" class="form-control" name="DapAn1" placeholder="Đáp án A"></input>
                            </div>
                            <div class="form-group">
                                <label for="">Đáp án B</label>
                                <input type="text" class="form-control" name="DapAn2" placeholder="Đáp án B"></input>
                            </div>
                            <div class="form-group">
                                <label for="">Đáp án C</label>
                                <input type="text" class="form-control" name="DapAn3" placeholder="Đáp án C"></input>
                            </div>
                            <div class="form-group">
                                <label for="">Đáp án D</label>
                                <input type="text" class="form-control" name="DapAn4" placeholder="Đáp án D"></input>
                            </div>
                            
                            

                            <div class="form-group">
                                <label for="">Đáp án đúng</label>
                                <select name="DapAnDung" class="form-control">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                            <div className="test_right mr-30">
                                <a class="btn btn-danger" href="" role="button">
                                    <span class="glyphicon glyphicon-arrow-left"></span>
                                    Trở về
                                </a>
                                &nbsp;
                                <button type="submit" class="btn btn-primary">
                                    <span class="glyphicon glyphicon-ok"></span>
                                    Thêm
                                </button>
                             </div>
                            <br></br>
                            <br></br>
                            <br></br>
                           
                        </form>

                        
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-30 ">
                        

                    </div>

                 </div>
            </div>      
</div>


  

    );
  }
}

export default CreateTestComponent;
