
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";


function App() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()
  return (
    <>
    
      <div className=" flex justify-center items-center h-screen w-full">
        <div className="flex justify-center items-center bg-red-50  border border-blue-800 rounded-md p-8 gap-4">
          <button onClick={()=>{dispatch(increment())}} className="bg-green-500 p-3 rounded-md">Increment</button>
          <button onClick={()=>{dispatch(incrementByAmount(5))}} className="bg-green-500 p-3 rounded-md">Increment by 5</button>
          <p className=" text-lg font-bold ">{count}</p>
          <button onClick={()=>{dispatch(decrement())}} className="bg-red-500 p-3 rounded-md ">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
