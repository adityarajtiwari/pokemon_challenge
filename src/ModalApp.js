import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const getdata = async () => {
            const { data } = await axios.get(props.url)
            setData(data)
            console.log(data)
        }
        getdata()
    }, [])
    return (
        <div>
            <Button onClick={handleOpen}>Click to Open</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* image */}
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <img src={props.imagerurl} alt="img not available"  style={
                                {
                                    width: "100%",
                                    height: "100%",
                                }
                            }/>
                        </Grid>
                        {/* name */}
                        <Grid item xs={3} >
                            <h1>{data.name}</h1>
                            <h2>Base Exp. {data.base_experience}</h2>
                            <h2>Height {data.height}</h2>
                            <h2>Weight {data.weight}</h2>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
