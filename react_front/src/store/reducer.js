import * as actions from './actions'

const initalState = {
    records : [],
    loading  : true
}


const reducer = (state = initalState,action)=>
{
    switch(action.type){

        case actions.RECORDS_INIT:
        {
            return state;
        }

        case actions.RECORDS_ERROR:
        {
                return state;
        }
        case actions.RECORDS_SUCCESS:
        {
            console.log(action.content)
        const newState =  { ...state,loading : false,
        records: state.records.concat(action.content)}
        console.log(newState)
return newState;
        }

        default :
        return state;
    }
}


export default reducer;