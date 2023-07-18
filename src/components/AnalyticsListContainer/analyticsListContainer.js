import React, { useEffect, useState } from "react";
import useStyles from "./styles";

const AnalyticsListContainer = (props) => {
  const { data } = props;
  const { analyticsNotificationList, analyticsNotificationListItems } =
    useStyles();

  const handleListItem = (val) => {
    props.selectedList(val);
  };

  return (
    <>
      <div>
        <div className={analyticsNotificationList}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <>
                  {item.title === "OVERALL ANALYTICS" ? null : (
                    <div
                      key={index}
                      className={analyticsNotificationListItems}
                      onClick={() => handleListItem(item?.title)}
                    >
                      {item.title}
                    </div>
                  )}
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AnalyticsListContainer;
