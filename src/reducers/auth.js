const initState ={
    currentUser:'',
    isLogin:false
}
const auth = (state =initState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            let newstate={
                currentUser:action.user,
                isLogin:true
            }
            return newstate

        case 'LOG_OUT':
            return initState
        default:
            return state
    }
}
export default auth