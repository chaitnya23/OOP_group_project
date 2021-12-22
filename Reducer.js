
const reducer = (state ,action)=>{

    switch (action.type) {
        
        case "login":
            return true
            break;

        case "logout":
            return false
            break;

        default:
            break;
    }
}

export default reducer;