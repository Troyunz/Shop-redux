const initialState = {
    items: [],
    filteredItems: []
}



const items = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                items: [
                    ...state.items, {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ],
                filteredItems: [
                    ...state.filteredItems, {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case "FILTER_ITEM":
            console.log("state")
            console.log(state.filteredItems)
            console.log(state.items)
            return {
                items: state.items,
                filteredItems: action.text === '' ? state.items : state.filteredItems.filter(function (str) {
                    console.log("str =>")
                    console.log(str)
                    return str.text.includes(action.text);
                })
            }

        default:
            return state;
    }
}

export default items;