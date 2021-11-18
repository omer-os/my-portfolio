
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cards({img,title,content}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>


        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
            />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" onClick={()=>setOpen(handleClickOpen)}>Demo</Button>
                <Button size="small" onClick={()=>setOpen(handleClickOpen)}>More Info</Button>
                </CardActions>
            </Card>



      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"im so sorry but"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            These projects are missing some information, I will add additional information to each project as soon as possible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}













