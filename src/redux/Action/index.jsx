
export const postTodo = (data) => {
    return {
        type: "Post_Todo",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const putTodo = (id) => {
    return {
        type: "Put_Todo",
        id
    }
}

export const update = (change, id) => {
    return {
        type: "Update_Value",
        change: change,
        id: id
    }
}