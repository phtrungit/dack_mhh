import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent.js'
import FoooterComponent from './FoooterComponent.js'
import '../styles/detailed_exam_questions.css'
import TakeATest from './TakeATest.js'
class TestComponent extends Component {
  render() {
    return (

            <div className="container mt-30 color_black">
                <div className="row ">
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <div className=" de_thi test_center">
                                Chi tiết đề thi
                            </div>
                            <div className="cau_hoi noi_dung">
                                <ul>
                                    <li>Người tạo: </li>
                                    <li>Ngày tạo: </li>
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
                                <input type="radio" id="Fastlearning" name="question2"></input>
                                   <label for="Fastlearning">&nbsp; &nbsp;A. Fastlearning</label><br/>
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
                                <input type="radio" name="question1"></input>
                                 <label>&nbsp; &nbsp;D. 6</label>
                            </div>
                        </div>
                    </div>

                 </div>
            </div>




    );
  }
}

export default TestComponent;
