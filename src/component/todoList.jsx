import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';
import { putTodo, update } from '../redux/Action/index';
import { useDispatch } from 'react-redux';

const Data = ({ a }) => {
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(a.data)
    const dispatch = useDispatch();


    return (
        <Box sx={{ display: 'flex', mt: 2, ml: 5 }} key={a.id}>
            {!show ? <Typography variant='h6' sx={{ mt: 0.3 }} >
                {a.data}
            </Typography > :
                <TextField size="small" value={change}
                    onChange={(e) => setChange(e.target.value)} />}
            <IconButton color='error' aria-label="delete" onClick={() => dispatch(putTodo(a.id))}>
                <DeleteIcon />
            </IconButton>

            {!show ? <IconButton color="primary" onClick={() => setShow(true)} >
                <EditIcon />
            </IconButton> : <Button variant="contained" sx={{ ml: 0.5 }} onClick={() => { setShow(false); dispatch(update(change, a.id)) }}>Updates</Button>}
        </Box>
    )
}

export default Data;