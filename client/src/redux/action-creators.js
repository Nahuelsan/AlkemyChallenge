import axios from 'axios';

const actionCreators = {
    OPERATIONS: 'OPERATIONS',
    getOperations: function(){
        return dispatch =>{
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/operation`)
            this._dispatchPromise(promise, this.OPERATIONS, dispatch)

        }
    },
    createOperation: function(operation){
        return dispatch => {
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/operation`, operation)
            this._dispatchPromise(promise, this.OPERATIONS, dispatch)
        }
    },
    updateOperation: function(id, operation){
        return dispatch => {
            const promise = axios.put(`${process.env.REACT_APP_API_URL}/operation/${id}`, operation)
            this._dispatchPromise(promise, this.OPERATIONS, dispatch)
        }
    },
    deleteOperation: function(id){
        return dispatch => {
            const promise = axios.delete(`${process.env.REACT_APP_API_URL}/operation/${id}`)
            this._dispatchPromise(promise, this.OPERATIONS, dispatch)
        }
    }
}

export default actionCreators;