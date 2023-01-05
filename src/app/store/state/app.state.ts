import { ActionReducerMap } from "@ngrx/store";
import { smestajReducer } from "../reducers/smestaj.reducer";
import { SmestajState } from "./smestaj.state";

export interface AppState{
    smestaji: SmestajState;
};

export const appReducers: ActionReducerMap< AppState, any> = {
    smestaji: smestajReducer
};