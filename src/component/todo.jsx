import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { postTodo, putTodo, editValue, update } from '../redux/Action/index';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
const Todo = () => {
    const [textField, setTextField] = useState();
    const dataList = useSelector((state) => state.todoReducer.todoList)
    const dispatch = useDispatch();
    // const [show, setShow] = useState(false)
    const isEdit = useSelector(state => state.todoReducer.isEdit);
    // const [change, setChange] = useState('')
    console.log(dataList);

    const addtodoFun = () => {
        dispatch(postTodo(textField),
            setTextField(''))

    }
    return (
        <>
            <Box sx={{ m: 5 }} textAlign='center'>
                <Paper elevation={5} sx={{ width: "30%", height: '60vh' }}>
                    <Typography variant='h5' >Todo App</Typography>
                    <TextField sx={{ mt: 2 }} size="small" value={textField}
                        onChange={(event) => setTextField(event.target.value)} />
                    <Button variant="contained" sx={{ ml: 0.5, mt: 2.2 }} onClick={addtodoFun}>
                        Add Todo
                    </Button>

                    {
                        dataList.map((a, index) => {
                            return (<>
                                <Data a={a} />
                            </>)
                        })
                    }
                </Paper>
            </Box>
        </>
    )
}

export default Todo;


const Data = ({ a }) => {
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(a.data)
    const dispatch = useDispatch();
    return (
        <Box sx={{ display: 'flex', mt: 2, ml: 5 }} key={a.id}>
            {!show ? <Typography variant='h6' sx={{ mt: 0.3 }} >
                {a.data}
            </Typography > :
                <TextField value={change}
                    onChange={(e) => setChange(e.target.value)} />}
            <IconButton color='error' aria-label="delete" onClick={() => dispatch(putTodo(a.id))}>
                <DeleteIcon />
            </IconButton>

            {!show ? <IconButton color="primary" onClick={() => setShow(true)} >
                <EditIcon />
            </IconButton> : <Button variant="contained" sx={{ ml: 0.5, mt: 2.2 }} onClick={() => { setShow(false); dispatch(update(change, a.id)) }}>Updates</Button>}
        </Box>
    )
}