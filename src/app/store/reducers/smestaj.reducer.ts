import { EnumSmestajAction, SmestajActions } from "../actions/smestaj.actions";
import { initialSmestajState } from "../state/smestaj.state";

export function smestajReducer(
    state = initialSmestajState,
    action: SmestajActions
){
    switch(action.type){
        case EnumSmestajAction.GetSmestajiSuccess: {
            return {
                ...state,
                smestaji: action.payload
            };
        }
        default:
            return state;
    }
}