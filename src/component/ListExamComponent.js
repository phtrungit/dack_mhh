import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from './HeaderComponent';
import Footer from './FoooterComponent';
import axios from 'axios';
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
    title:{
        marginTop: '200px',
        fontSize:'50px',
        textAlign:'center',
        color:'#000000',
    },
});

const rows = [
    {id: 'D001', title: 'Trắc nghiệm toán nâng cao', creator:'Trung Phạm'}
];

class SimpleTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            exam: rows,
            titleExam: 'null'
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/selectAllExam')
        .then(res => {
            var data = res.data;
            this.setState({
                exam: data.data,
                titleExam: res.data.teacher
            })
            console.log(this.state.titleExam[0].displayName);
        });

      
    }

    render(){
        const {classes}=this.props;
        return (
        <div>
            <Header/>
            <div className={classes.title}>
                Danh sách đề thi
            </div>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã đề thi</TableCell>
                            <TableCell >Tên đề thi</TableCell>
            
                            <TableCell >Người tạo</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {this.state.exam[0].id}
                                    </TableCell>
                                    <TableCell> {this.state.exam[0].title}</TableCell>
                                   
                                    <TableCell >{this.state.titleExam[0].displayName}</TableCell>
                                    <TableCell>
                                        <Button color="primary">
                                            Làm bài
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
            <Footer/>
        </div>

    );
}
}

export default withStyles(styles)(SimpleTable);
