import axios from 'axios';

const actionCreators = { 
    OPERATION: 'OPERATION',
    getOperations: function(){
        return dispatch => {
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/operation`)
            this._dispatchPromise(promise, this.OPERATION, dispatch)
        }
    },
    updateOperation: function(id, operation){
        return dispatch => {
            const promise = axios.put(`${process.env.REACT_APP_API_URL}/operation/${id}`, operation)
            this._dispatchPromise(promise, this.OPERATION, dispatch)
        }
    },
    createOperation: function(operation){
        return dispatch => {
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/operation`, operation)
            this._dispatchPromise(promise, this.OPERATION, dispatch)
        }
    },
    deleteOperation: function(id) {
        return dispatch => {
            const promise = axios.delete(`${process.env.REACT_APP_API_URL}/operation/${id}`)
            this._dispatchPromise(promise, this.OPERATION, dispatch)
        }
    },
    FORMRESPOND: 'FORMRESPOND',

    _dispatchPromise: function(promise, type, dispatch){
        return promise
        .then(({data}) => {
            dispatch({ type: type, payload: data });
        })
        .catch(err => {
            if (err.response) {
                alert(`Error! \n Status: ${err.response.status}\n${err.response.data}`);
            } else {
                alert(`Error! ${err}`);
            }
        })
    },
}
export default actionCreators;