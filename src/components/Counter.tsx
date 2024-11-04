import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { add, minus, reset } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(reset())}>초기화</button>
      <button onClick={() => dispatch(minus())}>빼기</button>
      <button onClick={() => dispatch(add())}>더하기</button>
    </div>
  );
}
