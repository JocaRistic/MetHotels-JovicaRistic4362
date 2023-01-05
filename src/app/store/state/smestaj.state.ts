import { Smestaj } from "src/app/models/smestaj";

export interface SmestajState {
    smestaji: Smestaj[];
}

export const initialSmestajState: SmestajState = {
    smestaji: []
}
