import { createSlice } from "@reduxjs/toolkit";

interface CounterType {
  value: number;
}

const initialState: CounterType = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter", // Slice 이름
  initialState,
  reducers: {
    // 상태를 변경하는 함수들을 정의하는 객체
    // state는 현재 상태를 참조하며, Redux Toolkit을 사용하면 state를 직접 수정해도 불변성이 자동으로 보장되도록 처리됩니다.
    add: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      if (state.value === 0) {
        return;
      } else {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { add, minus, reset } = counterSlice.actions;
export default counterSlice.reducer;
