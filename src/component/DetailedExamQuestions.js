import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent.js'
import FoooterComponent from './FoooterComponent.js'
import '../styles/test_styles.css'
import axios from 'axios';

var listExam = [{ "_id": "5c16635508943720ec5056fb", "id": "QT0001", "examId": "EX0001", "text": "Gía trị của biểu thức x=...+y/abs(z)", "optionA": "Câu A", "optionB": "Câu B", "optionC": "Câu C", "optionD": "Câu D", "correctOption": "A", "point": "0.5", "__v": 0 }];
var title = [{"_id":"5c11f9b5d059693da8f5fbbf","id":"EX0001","title":"Bài thi toán cao cấp 01","creator":"TC0001","subject":"Toán","time":"45 phút","object":"Học sinh lớp 10","__v":0}];
var teacher = [{"_id":"5c175d03d0bee63dc42c2b01","id": "TC0001","displayName": "Teacher1","mail": "email1@xmail.com","username": "taikhoan11","password": "matkhau11","point": 0,"certificate": "Thạc sĩ","phone": "0909090909", "__v": 0}]

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exam: listExam,
            titleExam: title,
            teachers: teacher,
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4200/getTestExam?id=EX0001')
        .then(res => {
            var data = res.data;

            this.setState({
                exam: data.data,
                titleExam: res.data.title,
                teachers: res.data.teacher
            })
            console.log(this.state.exam.length);
        });
}
    render() {
        return (

                <div className="container mt-30 color_black ">
                    <div className="test_center">
                      <h1>Chi tiết đề thi</h1>
                    </div>
                    <div className="cau_hoi noi_dung">
                        <ul>
                            <li>Người tạo: {this.state.teachers[0].displayName}</li>
                            <li>Ngày tạo: {this.state.titleExam[0].time}</li>
                            <li>Tên đề thi: {this.state.titleExam[0].title}</li>
                        </ul>
                    </div>
                    <div className="row khung4">

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-30 test_center  ">
                            <div className=" cau_hoi2">
                                Nội dung đề thi
                                </div>
                            <div className="cau_hoi noi_dung">
                                <ul>
                                    <li>Thời gian: {this.state.titleExam[0].time}</li>
                                    <li>Số lượng: {this.state.exam.length} câu</li>
                                    <li>Đối tượng: {this.state.titleExam[0].object}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 mt-30 khung">
                            <div className="test_center mt-3"><h3>Đề thi mã #{this.state.exam[0].examId}</h3></div>
                            <br></br>
                            {/* Danh sach cau hoi */}
                            <p className="cau_hoi2">Tìm đáp án đúng của câu hỏi sau</p>
                            <div>{this.state.exam.map((exam) => {
                                return <div className="cau_hoi ml-5">
                                    <pre>
                                        {exam.id}: {exam.text}
                                    </pre>
                                    <br></br>
                                    <div className="ml-5 dap-an">
                                        <input type="radio" id="Fastlearning" name = {exam.id} value='A' disabled = "true"></input>
                                        <label for="Fastlearning">&nbsp; &nbsp;{exam.optionA}</label><br />
                                        <input type="radio" name = {exam.id} value = 'B' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionB}</label><br />
                                        <input type="radio" name = {exam.id} value='C' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionC}</label> <br />
                                        <input type="radio" name = {exam.id} value = 'D' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionD}</label>
                                    </div>
                                </div>
                            })}</div>
                            <p className="color_black"></p>

                            <p className="cau_hoi2">Tìm đáp án đúng của câu hỏi sau</p>
                            <div>{this.state.exam.map((exam) => {
                                return <div className="cau_hoi ml-5">
                                    <pre>
                                        {exam.id}: {exam.text}
                                    </pre>
                                    <br></br>
                                    <div className="ml-5 dap-an">
                                        <input type="radio" id="Fastlearning" name = {exam.id} value='A' disabled = "true"></input>
                                        <label for="Fastlearning">&nbsp; &nbsp;{exam.optionA}</label><br />
                                        <input type="radio" name = {exam.id} value = 'B' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionB}</label><br />
                                        <input type="radio" name = {exam.id} value='C' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionC}</label> <br />
                                        <input type="radio" name = {exam.id} value = 'D' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionD}</label>
                                    </div>
                                </div>
                            })}</div>
                            <p className="color_black"></p>

                            <p className="cau_hoi2">Tìm đáp án đúng của câu hỏi sau</p>
                            <div>{this.state.exam.map((exam) => {
                                return <div className="cau_hoi ml-5">
                                    <pre>
                                        {exam.id}: {exam.text}
                                    </pre>
                                    <br></br>
                                    <div className="ml-5 dap-an">
                                        <input type="radio" id="Fastlearning" name = {exam.id} value='A' disabled = "true"></input>
                                        <label for="Fastlearning">&nbsp; &nbsp;{exam.optionA}</label><br />
                                        <input type="radio" name = {exam.id} value = 'B' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionB}</label><br />
                                        <input type="radio" name = {exam.id} value='C' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionC}</label> <br />
                                        <input type="radio" name = {exam.id} value = 'D' disabled = "true"></input>
                                        <label>&nbsp; &nbsp;{exam.optionD}</label>
                                    </div>
                                </div>
                            })}</div>
                            <p className="color_black"></p>
                        </div>
                    </div>
                </div>
            );
        }
}
export default TestComponent;
