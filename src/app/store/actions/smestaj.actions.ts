import { Action } from "@ngrx/store";
import { Smestaj } from "src/app/models/smestaj";

export enum EnumSmestajAction {
    GetSmestaji = '[Smestaj] Get Smestaji',
    GetSmestajiSuccess = '[Smestaj] Get Smestaji Success'
}

export class GetSmestaji implements Action {
    public readonly type = EnumSmestajAction.GetSmestaji;
} 

export class GetSmestajiSuccess implements Action {
    public readonly type = EnumSmestajAction.GetSmestajiSuccess;
    constructor(public payload: Smestaj[]){}
} 

export type SmestajActions = GetSmestaji | GetSmestajiSuccess;