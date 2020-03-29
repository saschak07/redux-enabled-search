import * as  actionType from './action'
const initialState = {
    transantionList:[],
    fileredList:null
}

const reducer = (state = initialState,action) => {
    switch(action.type){
         case actionType.SET_LIST: 
            return {
                transantionList:action.transactions,
            }
         case actionType.FILTER_LIST:
             return{
                 fileredList:state.transantionList.find(data => 
                    data["Balance AMT"]===action.balance)
             } 
    }
    return state;
}
export default reducer