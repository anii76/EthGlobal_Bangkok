import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import kintoReducer from "./reducers/kinto.reducer"

export const store = configureStore({
  reducer: {
    kinto: kintoReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
