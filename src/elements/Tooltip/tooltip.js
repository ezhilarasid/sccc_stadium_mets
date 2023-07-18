import * as React from "react";
import { useState, useEffect } from "react";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";

const INF_Tooltip = (props) => {
  const tipRef = React.createRef(null);

  const [inView, setInView] = useState(false);

  const cb = (entries) => {
    const [entry] = entries;
    entry.isIntersecting ? setInView(true) : setInView(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
    };
    const ref = tipRef.current;
    const observer = new IntersectionObserver(cb, options);

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [tipRef]);

  const { tooltipValue, children } = props;

  return (
    <div>
      <Tooltip
        className="tooltipTest"
        arrow
        ref={tipRef}
        title={tooltipValue}
        disableInteractive
        TransitionComponent={Zoom}
        PopperProps={{
          sx: { display: inView ? "block" : "none" },
          modifiers: [
            {
              name: "offset",

              options: {
                offset: [0, -8],
              },
            },
          ],
        }}
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "black",
              "& .MuiTooltip-arrow": {
                color: "black",
              },
              color: "white",
              fontSize: "13px",
            },
          },
        }}
      >
        <div>{children}</div>
      </Tooltip>
    </div>
  );
};

export default INF_Tooltip;
