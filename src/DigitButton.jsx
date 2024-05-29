import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit })
{
    return ( <button 
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
            className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700"
           >
        {digit}
        </button>
    )
}