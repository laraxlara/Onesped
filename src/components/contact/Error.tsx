import React from "react";
import { FormattedMessage } from "react-intl";

type Props = {};

const Error = (props: Props) => {
  return (
    <div className="h-[350px]">
      <div className="bg-red-100 rounded-md p-3 flex">
        <svg
          className="stroke-2 stroke-current text-red-600 h-8 w-8 mr-2 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>

        <div className="text-red-700">
          <div className="font-bold text-xl">
            <FormattedMessage id="error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
