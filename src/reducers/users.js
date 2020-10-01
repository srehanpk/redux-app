

export default function users (state = {name : "Rayhan" }, action) {

    //return state

    switch (action.type) {

        case "USERS":
            
        return {...state, 
            ...action.users
        }
            
    
        default:
            return state
    }
}