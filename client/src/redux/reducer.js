import actionCreators from './action-creators';
const {OPERATIONS} = actionCreators
const initialState = {
    operations: [],
    user: {}
}

export default (state = initialState, action) =>{
    switch(action.type){
        case OPERATIONS:
            return{
                ...state,
                operations: action.payload
            }
        default:
            return {...state}
    }
}