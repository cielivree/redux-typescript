import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store/reducers";
import { AppDispatch } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()