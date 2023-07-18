import React, { useState } from "react";
import { Grid, Tabs, Tab } from "@mui/material";
import Tooltip from "elements/Tooltip";
import useStyles from "./styles";

const INF_Tabs = (props) => {
  const {
    initialIndex,
    tabsList,
    handleTabs,
    dashboardNotificationClassName,
    parkingNotificationClassName,
    tabIndex,
    pageName,
  } = props;
  const { itemCount, disabledTooltip } = useStyles();
  const [value, setValue] = useState(initialIndex);
  const handleChange = (event, val) => {
    setValue(val);
    handleTabs(val);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={dashboardNotificationClassName}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            indicatorColor="secondary"
          >
            {tabsList &&
              tabsList.map((item, index) => (
                <Tab
                  key={index}
                  value={index}
                  label={
                    item?.count ? (
                      <div>
                        <div className={itemCount}>{item?.count}</div>
                        <div>{item?.name}</div>
                      </div>
                    ) : (
                      <div className={parkingNotificationClassName}>
                        {pageName === "operations" ||
                        pageName === "foodconcessions" ? (
                          item?.name === "ALL" ? (
                            item?.name
                          ) : (
                            <Tooltip tooltipValue={item.iconName}>
                              <img src={item.name} width={20} height={20} />
                            </Tooltip>
                          )
                        ) : pageName === "analytics" ? (
                          item?.val === 0 || item?.val === 3 ? (
                            <Tooltip tooltipValue={item.iconName}>
                              <img src={item.name} width={24} height={24} />
                            </Tooltip>
                          ) : item?.val !== 0 || item?.val !== 3 ? (
                            <Tooltip tooltipValue={item.iconName}>
                              <img src={item.name} width={24} height={24} />
                            </Tooltip>
                          ) : null
                        ) : (
                          item?.name
                        )}
                      </div>
                    )
                  }
                />
              ))}
          </Tabs>
        </div>
      </Grid>
    </Grid>
  );
};
export default INF_Tabs;
