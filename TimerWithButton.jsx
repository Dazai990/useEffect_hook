import { useState , useEffect, useRef } from "react";

const TimerWithButton = () =>{

    const [count,setCount] = useState(0);
    const [isRunning,setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() =>{
        if (isRunning){
            intervalRef.current = setInterval(() =>{
                setCount(prev=> prev+1)
            },1000)
        }
        return ()=> clearInterval(intervalRef.current)
    },[isRunning])

    const handlePause = ()=> setIsRunning(false);
    const handleResume = ()=> setIsRunning(true);
    
    return (
        <div className="border border-dark p-4 text-center">
            <h2>Count : {count} times/s</h2>
            <div className="d-flex justify-content-center gap-4 mt-3">
            <button className="btn btn-danger gap-3" onClick={handlePause} disabled={!isRunning}>Pause</button>
            <button className="btn btn-success" onClick={handleResume} disabled={isRunning}>Resume</button>
            </div>
        </div>
    )
}
export default TimerWithButton;

