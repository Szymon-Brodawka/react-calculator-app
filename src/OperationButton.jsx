import { ACTIONS } from "./App";

export default function OperationButton({ dispatch, operation })
{
    return ( <button 
            onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
            className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700"
           >
        {operation}
        </button>
    )
}