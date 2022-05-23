import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { postTodo } from '../redux/Action/index';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import TodoList from './todoList';
import Grid from '@mui/material/Grid';
const Todo = () => {
    const [textField, setTextField] = useState();
    const dataList = useSelector((state) => state.todoReducer.todoList)
    const dispatch = useDispatch();
    console.log(dataList);

    const addtodoFun = () => {
        dispatch(postTodo(textField),
            setTextField(''))
    }
    const paperStyle = { padding: 20, height: "60vh", width: 380, margin: "50px auto", borderRadius: "10px" }
    return (
        <>
            <Grid>
                <Paper elevation={5} style={paperStyle}>
                    <Grid align="center">
                        <Typography variant='h5' sx={{ pt: 1 }} >Todo App</Typography>
                        <TextField sx={{ mt: 2 }} size="small" value={textField}
                            onChange={(event) => setTextField(event.target.value)} />
                        <Button variant="contained" sx={{ ml: 0.5, mt: 2.2 }} onClick={addtodoFun}>
                            Add Todo
                        </Button>
                    </Grid>
                    {
                        dataList.map((a) => {
                            return (<>
                                <TodoList a={a} />
                            </>)
                        })
                    }
                </Paper>

            </Grid>
        </>
    )
}

export default Todo;
