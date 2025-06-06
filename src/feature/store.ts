import { configureStore, createSlice } from "@reduxjs/toolkit";

export const myStore = createSlice({
  name: "myStore",
  initialState: {
    gino: 1,
  } as Record<string, number>,
  reducers: {
    add: (state) => ({ ...state, gino: state.gino + 1 }),
  },
});

export const store = configureStore({
  reducer: {
    myStore: myStore.reducer,
  },
  devTools: true,
});

export const storeActions = myStore.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
