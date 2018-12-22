import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Redirect} from 'react-router-dom'

import '../../App.css';
import axios from 'axios';
import '../../styles/test_styles.css'
import {connect} from "react-redux";
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '50px',
        overflowX: 'auto',
        marginBottom: '100px',
    },
    table: {
        minWidth: 700,
    },
    title: {
        marginTop: '200px',
        fontSize: '50px',
        textAlign: 'center',
        color: '#000000',
    },
});


const rows = [
    { id: 'D001', title: 'Trắc nghiệm toán nâng cao', time: 'null', number: 'null' }
];


class EditTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: rows
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4200/selectExam?id=${this.props.users.id}`)
            .then(res => {
                var data = res.data;
                console.log(data);
                this.setState({
                        data: data,
                    }
                )
            });

    }

    render() {
        const {classes}=this.props;
        if(this.props.isLogin===false)
            return <Redirect to={'/login'}/>
        else {
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
                                <a className="nav-link" href="#">Bảng xếp hạng học sinh</a>
                            </li>

                        </ul>
                        <div className="navbarMenu">
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

                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 mt-30   ">
                                <h3>Danh sách đề thi đã tạo</h3>
                                <br></br>
                                <Paper>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Mã đề thi</TableCell>
                                                <TableCell>Tên đề thi</TableCell>
                                                <TableCell>Môn học</TableCell>
                                                <TableCell>Thời gian</TableCell>
                                                <TableCell>Số lượng</TableCell>
                                                <TableCell>Chỉnh sửa</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.data.map(row => {
                                                return (
                                                    <TableRow key={row.id}>
                                                        <TableCell component="th" scope="row">
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell> {row.title}</TableCell>
                                                        <TableCell> {row.subject}</TableCell>
                                                        <TableCell>{row.time}</TableCell>
                                                        <TableCell>{row.number}</TableCell>
                                                        <TableCell>
                                                            <Button color="primary">
                                                                Chỉnh sửa
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </Paper>

                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-30 khung">
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
                                        <input type="text" className="form-control" name="TenDethi"
                                               placeholder="Tên đề thi"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="">Số câu hỏi</label>
                                        <input type="text" className="form-control" name="TenDethi"
                                               placeholder="SoCauHoi"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="">Thời gian</label>
                                        <input type="text" className="form-control" name="TenDethi"
                                               placeholder="Time"></input>
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
}
const mapStateToProps =(state) =>{


    return{
        users: state.auth.currentUser,
        isLogin:state.auth.isLogin
    };

}
export default connect(mapStateToProps)(EditTestComponent);
