/* eslint-disable react/prop-types */
import { showMessage } from "../../utils";
import { useDispatch, useSelector } from "react-redux";

const Error = ({action}) => {
  const { message } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 flex-wrap">
      <p className="text-[18px] font-[600] text-gray-900">
        Error occurred: {showMessage(message)}
      </p>
      <button
              onClick={() => dispatch(action())}
        className="rounded-full px-4 py-2 bg-rose-200 text-rose700 font-[600] text-[18px]"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;