

export default function GeneralReducer(state, action) {
    switch(action.type) {
        case "LOAD_CATEGORY":
            return {...state, categories: Array.isArray(action.payload) ? [...action.payload] : []};
        case "LOAD_ARTICLES":
            return {...state, articles: Array.isArray(action.payload) ? [...action.payload] : []};
        case "IS_ACTIVE":
            return {...state, isActive: !action.payload}
        default:
            return state;   
    } 
}