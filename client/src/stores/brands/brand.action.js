import { createAction } from "../../utils/reducer/reducer.utils";
import { BRANDS_ACTION_TYPES } from "./brand.types";

export const setBrands = (brands) => createAction(BRANDS_ACTION_TYPES.SET_BRANDS, brands)