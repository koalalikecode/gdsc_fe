import { MENU_RESPONSE } from "../../utils/string";

const MenuResponseReducer = (state=false,action)=>{
    if(action.type===MENU_RESPONSE){
        return action.payload
    }
    return state;
}
export default MenuResponseReducer;