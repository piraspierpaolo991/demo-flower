// import {
//   createSliceWithFlower,
//   createStoreWithFlower,
// } from "@flowerforce/flower-react";

// export const myStoreWithFlower = createSliceWithFlower({
//   name: "myStore",
//   initialState: {
//     gino: 1,
//   },
//   reducers: {
//     add: (state) => ({ ...state, gino: state.gino + 1 }),
//   },
// });

// export const storeWithFlower = createStoreWithFlower({
//   reducer: {
//     myStore: myStoreWithFlower.reducer,
//   },
//   devTools: true,
// });

// export const storeActions = myStoreWithFlower.actions;

// export type RootState = ReturnType<typeof storeWithFlower.getState>;
// export type AppDispatch = typeof storeWithFlower.dispatch;
