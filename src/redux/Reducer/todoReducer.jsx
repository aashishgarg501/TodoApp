const initalState = {
    todoList: [],
    inputValue: "",

}

const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case "Post_Todo":
            const { id, data } = action.payload;
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "Put_Todo":
            const newlist = state.todoList.filter((b) => b.id !== action.id)
            return {
                ...state,
                todoList: newlist
            }


        case "Update_Value":

            let objIndex = state.todoList.findIndex((obj => obj.id == action.id));
            state.todoList[objIndex].data = action.change
            let update = state.todoList
            return {
                ...state, update
            }
        default: return state;
    }

}

export default todoReducer;