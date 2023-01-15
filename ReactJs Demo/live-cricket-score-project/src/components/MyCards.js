import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import LiveScoreService from '../services/Api';

const MyCards = ({ match }) => {

    const [details, setDeatils] = useState({});
    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        LiveScoreService.getMatcheDetails(id)
            .then((matchData) => {
                console.log(matchData.data.data);
                setDeatils(matchData.data.data);
                handleOpen();
            })
            .catch(error => alert("could not data load"))
    }

    const handleClose = () => {
        details.score.map(data=>{
            console.log(data);
        })
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }



    const getMatchCard = () => {

        return (

            <Card style={{ marginTop: 15 }}>
                <CardContent>

                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant='h6'>{match.teams[0]}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ width: 85 }} src={require("../img/vs.png")} alt="" />
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>{match.teams[1]}</Typography>
                        </Grid>
                    </Grid>

                </CardContent>

                <CardActions>
                    <Grid container justifyContent="center">
                        <Button variant='contained' color='primary' onClick={() => { handleClick(match.id) }}>Show Details</Button>
                        <Button style={{ marginLeft: 3 }} variant='contained' color='primary'>
                            Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>

                </CardActions>
            </Card>

        );
    }

    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>

            <DialogTitle id="alert-dailog-title">{"Match Detail..."}</DialogTitle>

            <DialogContent>

                <DialogContentText id="alert-dailog-description" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                    {details.status} {" "}
                </DialogContentText>

                <DialogContentText id="alert-dailog-description" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                    Match {details.fantasyEnabled ? "Started" : "Still not started"} {" "}
                </DialogContentText>

              
            </DialogContent>

            <DialogActions>
                <Button color="primary" variant="contained" onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );


    return (
        <>
            {getMatchCard()}
            {getDialog()}
        </>

    )
}

export default MyCards;
