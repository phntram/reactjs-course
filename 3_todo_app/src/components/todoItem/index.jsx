import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

function TodoItem({ todo }) {
    console.log(todo);
    return (
        <Card sx={{
            maxWidth: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: blue[200],
            opacity: "0.75"
        }}>
            <CardContent>
                <Typography variant='h5' color={"black"}>{todo?.todo}</Typography>
            </CardContent>
            <CardActions>
                <Button sx={{
                    backgroundColor: "#000000",
                    color: "#fff",
                    opacity: "0.75",
                    "&:hover": {
                        backgroundColor: "#000000",
                        color: "#fff",
                        opacity: "1",
                    }
                }}>Details</Button>
            </CardActions>
        </Card>
    );
}

export default TodoItem;