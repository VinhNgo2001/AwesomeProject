const initialState ={
    authToken: null,
    userData:{},
    anyData:{},
}

export default function actionForReducer(state = initialState, payload){
    switch(payload.type){
        case "login":
            return {
                ...state,
                authToken :actionForReducer.payload

            }
        default:
            return state
    }
}