/* eslint-disable react/prop-types */

import { showMessage } from "../../utils";
import { useDispatch } from "react-redux";

/**
 * Error component for displaying an error message and providing a retry button.
 */
const Error = ({ action, message }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 flex-wrap">
      <p className="text-[18px] font-[600] text-gray-900">
        Error occurred: {showMessage(message)}
      </p>
      <button
        onClick={() => dispatch(action())}
        className="rounded-full px-4 py-2 bg-rose-200 text-rose700 font-[600] text-[18px] outline-none"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
