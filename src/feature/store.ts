import {
  createSliceWithFlower,
  createStoreWithFlower,
} from "@flowerforce/flower-react";
// import { createSlice } from "@reduxjs/toolkit";
export const myStore = createSliceWithFlower({
  name: "myStore",
  initialState: {
    gino: 1,
  },
  reducers: {
    add: (state) => ({ ...state, gino: state.gino + 1 }),
  },
});
// export const myStore = createSlice({
//   name: "myStore",
//   initialState: {
//     gino: 1,
//   } as Record<string, number>,
//   reducers: {
//     add: (state) => ({ ...state, gino: state.gino + 1 }),
//   },
// });

export const storeWithFlower = createStoreWithFlower(
  {
    reducer: {
      myStore: myStore.reducer,
    },
    devTools: true,
  },
  [],
);
// export const store = configureStore({
//   reducer: {
//     myStore: myStore.reducer,
//   },
//   devTools: true,
// });

export const storeActions = myStore.actions;

export type RootState = ReturnType<typeof storeWithFlower.getState>;
export type AppDispatch = typeof storeWithFlower.dispatch;
