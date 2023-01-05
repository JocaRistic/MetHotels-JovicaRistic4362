import { createSelector } from '@ngrx/store';

const selectSmestaji = (state: any) => state.smestaji;

export const selectedSmestaji = createSelector(
    selectSmestaji,
    (state: any) => {
        return state.smestaji;
    }
);