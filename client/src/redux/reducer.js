import actionCreators from './action-creators';
const {OPERATION, FORMRESPOND} = actionCreators;

const initialState = {
    operations: [],
    formRespond: false,
    user: {}
}

export default (state = initialState, action) =>{
    switch(action.type){
        case OPERATION:
            return{
                ...state,
                operations: action.payload.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime())
            }
        case FORMRESPOND:
            return {
                ...state,
                formRespond: action.payload
            }
        default:
            return {...state}
    }
}