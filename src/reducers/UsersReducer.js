const UsersReducer = (state , action) =>
{switch
     (
        action.type
    )
    { case "SEARCH-USERS":
        return {
            ...state , users: action.users,loading : false
        }
        case "SET-LOADING":
                return {
                    ...state , loading:true
                }
            case "CLEAR-USERS":
                return{
                    ...state , users:[],loading : false
                }
                default : return state;

      }
}       

export default UsersReducer