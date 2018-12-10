import React, { Component } from 'react';

class listExamTeacher extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div className={classes.title}>
                Danh sách đề thi gần đây
            </div>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã đề thi</TableCell>
                            <TableCell >Tên đề thi</TableCell>
                            <TableCell >Thời gian tạo</TableCell>
                            <TableCell >Tình trạng</TableCell>
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
                                    <TableCell >{row.tinhtrang}</TableCell>
                                    <TableCell>
                                        <Button color="primary">
                                            Chỉnh sửa
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary">
                                            Xóa
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary">
                                            Công bố kết quả
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary">
                                            Thống kê thông tin làm bài của học viên
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary">
                                            Xem phổ điểm
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

export default listExamTeacher;