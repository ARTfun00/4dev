export default function (state=null, action) {
    switch (action.type)
    {
        case "Article selected!":
            return action.payload;
        break;
        
        default:
            return state;
    }
}