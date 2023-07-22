import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  const [time, setTime] = useState(moment());

  // componentDidMount
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);

    // unmount
    return () => {
            clearInterval(interval);
        }
  }, []);

  return (
    <div className="text-center rounded time text-warning display-1 bg-black pt-5 pb-4 px-4 fw-bold">
      <span className="text-success">{time.format("HH")}</span>
      <span className="text-primary">
        <span className="text-warning">
          {time.format("ss") % 2 === 0 ? ":" : " "}
        </span>
        {time.format("mm")}
      </span>
      <span className="text-danger">
        <span className="text-warning">
          {time.format("ss") % 2 === 0 ? ":" : " "}
        </span>
        {time.format("ss")}
      </span>
      <div className="text-end fs-5 fw-normal utc"> (UTC+2) </div>
    </div>
  );
};

export default Clock;
