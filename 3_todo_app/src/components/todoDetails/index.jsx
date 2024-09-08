import { DialogTitle, IconButton, DialogContent, Typography, DialogActions, Dialog, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment } from 'react';

function TodoDetails({ openDialog, todoDetail, setOpenDialog, setTodoDetail }) {

    function handleClose() {
        setOpenDialog(false);
        setTodoDetail(null);
    }

    console.log(openDialog);
    return (
        <Fragment>
            <Dialog
                onClose={handleClose}
                aria-labelledby="todo-detail-dialog-title"
                open={openDialog}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id={`todo-detail-${todoDetail?.id}`}>Todo #{todoDetail?.id} Detail</DialogTitle>
                {/* <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}>
                    <CloseIcon />
                </IconButton> */}

                <DialogContent dividers>
                    <Typography>{todoDetail?.todo}</Typography>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>

    );
}

export default TodoDetails;