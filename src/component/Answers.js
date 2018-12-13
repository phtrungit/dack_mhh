import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent.js'
import FoooterComponent from './FoooterComponent.js'
import '../styles/test_styles.css'

class TestComponent extends Component {
  render() {
    return (
            <div className="container mt-30 color_black ">
                <div className="row ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="test_center">
                            <h2>Bài thi trắc nghiệm Tiếng Anh lớp 10</h2>
                        </div>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-30  ">
                            <div className=" cau_hoi2">
                                Nội dung đề thi
                            </div>
                            <div className="cau_hoi noi_dung">
                                <ul>
                                    <li>Thời gian: 45 phút</li>
                                    <li>Số lượng: 20 câu</li>
                                    <li>Kiến thức: C/C++</li>
                                    <li>Đối tượng: học sinh lớp 10</li>
                                    <li>Điểm:</li>
                                </ul>
                            </div>
                    </div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 mt-30 khung">
                        <div className="test_center mt-3"><h3>Đề thi mã #134</h3></div>
                        <br></br>
                        <div className="cau_hoi ml-5">
                            <p className="cau_hoi2">Câu 1: Tìm đáp án đúng của câu hỏi sau</p>
                            <pre>
                             {`
                #include < studio.h>
                main()
                {
                   int x = 5;

                   if(x=5)
                   {
                      if(x=5) printf("Fast");
                   }
                   printf("learning");
                }
                            `}
                            </pre>
                            <br></br>
                            <div className = "ml-5">
                                <div className="answers ">
                                <input type="radio" id="Fastlearning" name="question2" ></input>
                                   <label for="Fastlearning">&nbsp; &nbsp;A. Fastlearning</label><br/>
                                   </div>
                                <input type="radio"  name="question2"></input>
                                   <label>&nbsp; &nbsp;B. learning</label><br/>
                                <input type="radio" name="question2"></input>
                                   <label>&nbsp; &nbsp;C. learningFast</label> <br/>
                                <input type="radio" name="question2"></input>
                                 <label>&nbsp; &nbsp;D. Fast</label>
                            </div>
                        </div>
                        {/* câu hỏi*/}
                        <div className="cau_hoi ml-5">
                            <p className="cau_hoi2">Câu 2: Tìm đáp án đúng của câu hỏi sau</p>
                            <pre>
                             {`
                #include < iostream>
                main()
                {
                   int x = 5;

                   if(x=5)
                   {
                      x++;
                   }
                   cout<< x ;
                }
                            `}
                            </pre>
                            <br></br>
                            <div className = "ml-5">
                                <input type="radio" id="Fastlearning" name="question1"></input>
                                   <label for="Fastlearning">&nbsp; &nbsp;A. 2</label><br/>
                                <input type="radio"  name="question1"></input>
                                   <label>&nbsp; &nbsp;B. 4</label><br/>
                                <input type="radio" name="question1"></input>
                                   <label>&nbsp; &nbsp;B. 5</label> <br/>
                                   <div className="answers ">
                                <input type="radio" name="question1"></input>
                                 <label>&nbsp; &nbsp;D. 6</label>
                                 </div>
                            </div>
                        </div>
                         {/* câu hỏi*/}
                         <div className="test_center">
                            <button className="button">Kết thúc</button>
                         </div>
                        <p className="color_black"></p>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-30 ">
                        <div className="test_center cau_hoi2">
                            Các đề thi liên quan
                        </div>
                        <div className="  mt-3">
                          <div className="">
                            <img className="images_gioithieu ml-3" src={require('../images/course_1.jpg')} alt="https://unsplash.com/@kellybrito" />
                            <div className=" text-center ml-3">
                              <div className=""><a href="courses.html">A complete guide to design</a></div>
                              <div className="">Adobe Guide, Layes, Smart Objects etc...</div>
                            </div>
                            <div className="khung3 d-flex flex-row align-items-center ml-3">
                              <div className="course_author_image">
                                <img src={require('../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                              </div>
                              <div className="">Michael Smith, <span>Author</span></div>
                              <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                            </div>
                          </div>
                        </div>

                         <div className="  mt-3">
                          <div className="">
                            <img className="images_gioithieu ml-3" src={require('../images/course_2.jpg')} alt="https://unsplash.com/@kellybrito" />
                            <div className=" text-center ml-3">
                              <div className=""><a href="courses.html">A complete guide to design</a></div>
                              <div className="">Adobe Guide, Layes, Smart Objects etc...</div>
                            </div>
                            <div className="khung3 d-flex flex-row align-items-center ml-3">
                              <div className="course_author_image">
                                <img src={require('../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                              </div>
                              <div className="">Michael Smith, <span>Author</span></div>
                              <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                            </div>
                          </div>
                        </div>
                    </div>
                 </div>
            </div>

    );
  }
}

export default TestComponent;
