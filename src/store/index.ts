// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer, // counter 상태 관리
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import counterReducer from "../features/counter/counterSlice";
import { combineReducers } from "redux";

// 저장 위치는 어디인지
const persistConfig = {
  key: "basket",
  storage,
};

// 여러 Slice 리듀서를 하나의 루트 리듀서로 결합
const rootReducer = combineReducers({
  // counter라는 이름으로 스토어에 연결
  counter: counterReducer,
});

//  Redux 상태를 로컬 스토리지에 저장하고, 브라우저를 새로고침해도 상태를 유지할 수 있도록 만들어진 리듀서
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // 로컬 스토리지를 저장할 때 주로 함수가 액션에 포함된다.
  // 이 값은 직렬화 할 수 없는 값이기 때문에 비직렬화 경고를 만든다.
  // 이 코드는 비직렬화 경고를 해결하기 위한 코드이다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Redux 스토어와 로컬 스토리지 사이의 동기화를 관리하는 역할
// 애플리케이션 시작 시 저장된 상태를 로드하고, 상태가 변경될 때마다 이를 로컬 스토리지에 저장
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

// 애플리케이션 초기화:
// persist/PERSIST 액션이 자동으로 디스패치되어 상태를 저장할 준비를 합니다.
// 만약 로컬 스토리지에 이전에 저장된 상태가 있다면, persist/REHYDRATE 액션을 통해 해당 상태를 Redux 스토어에 복원합니다.

// 상태 변경 및 로컬 스토리지 동기화:
// Redux 상태가 변경될 때마다 persistedReducer는 새로운 상태를 로컬 스토리지에 저장합니다.
// persistConfig 설정에 따라 상태가 특정 키(root)로 로컬 스토리지에 저장됩니다.

// 애플리케이션 종료 또는 새로고침:
// 로컬 스토리지에 저장된 상태는 새로고침 또는 브라우저 종료 후에도 유지됩니다.
// 애플리케이션이 다시 로드될 때 persist/REHYDRATE 액션을 통해 로컬 스토리지의 상태가 Redux 스토어로 복원됩니다.

// Redux Middleware, createAsyncThunk, RTK query 사용
