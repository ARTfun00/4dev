export default function (state=null, action) {
    switch (action.type)
    {
        case "Car selected!":
            return action.payload;
        break;
        
        default:
            return state;
    }
}