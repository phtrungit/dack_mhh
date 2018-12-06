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
import Header from './HeaderComponent'
import Footer from './FoooterComponent'
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

let id = 0;
function createData(made, tende, ngaytao, nguoitao) {
    id += 1;
    return { id,made, tende, ngaytao, nguoitao};
}

const rows = [
    createData('D001', 'Trắc nghiệm toán nâng cao', '06/12/2018 9:49', 'Trung Phạm'),
    createData('D001', 'Trắc nghiệm toán nâng cao', '06/12/2018 9:49', 'Trung Phạm'),
    createData('D001', 'Trắc nghiệm toán nâng cao', '06/12/2018 9:49', 'Trung Phạm'),
    createData('D001', 'Trắc nghiệm toán nâng cao', '06/12/2018 9:49', 'Trung Phạm'),
    createData('D001', 'Trắc nghiệm toán nâng cao', '06/12/2018 9:49', 'Trung Phạm'),


];

function SimpleTable(props) {
    const { classes } = props;

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
                            <TableCell >Thời gian tạo</TableCell>
                            <TableCell >Người tạo</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.made}
                                    </TableCell>
                                    <TableCell>{row.tende}</TableCell>
                                    <TableCell >{row.ngaytao}</TableCell>
                                    <TableCell >{row.nguoitao}</TableCell>
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

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
