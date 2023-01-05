import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";
import { Smestaj } from "src/app/models/smestaj";
import { SmestajCrudService } from "src/app/services/smestaj-crud.service";
import { EnumSmestajAction, GetSmestaji, GetSmestajiSuccess } from "../actions/smestaj.actions";

@Injectable()
export class SmestajEffect {

    constructor(private _actions$ : Actions, 
                private _smestajService : SmestajCrudService) {

    }

    getSmestaji$ = createEffect(() =>  
        this._actions$.pipe(
            ofType<GetSmestaji>(EnumSmestajAction.GetSmestaji),
            switchMap(() => this._smestajService.getSmestaji()),
            switchMap((smestajiHttp: Smestaj[]) => {
                return of(new GetSmestajiSuccess(smestajiHttp))
            })
        )
    )

}
