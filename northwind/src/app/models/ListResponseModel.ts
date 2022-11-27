import { ResponseModel } from "./responseModel";

// extends  = inheritance demek(implemente amacıyla kulanılır.)
export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}