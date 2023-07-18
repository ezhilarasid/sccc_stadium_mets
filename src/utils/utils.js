export const formattedCardListData = (tabIndex, data, type) => {
  const dataList = [];
  let notficationListData = [];
  switch (tabIndex) {
    case 0:
      notficationListData = data?.notifications?.events?.list;
      break;
    case 1:
      notficationListData = data?.notifications?.incidents?.list;
      break;
    case 2:
      notficationListData = data?.notifications?.operationalAlerts?.list;
      break;
    default:
      break;
  }

  const filteredList = type
    ? notficationListData?.length &&
      notficationListData?.filter((item) => item?.category === type)
    : notficationListData;
  filteredList &&
    filteredList.length > 0 &&
    filteredList.map((item, index) => {
      item.category !== "electricity" &&
        dataList.push({
          id: item?.id,
          title: item?.title,
          parkingArea: item?.parkingLot,
          timeStamp: item?.timeStamp,
          vehicleNumber: item?.vehicleId
            ? `Vehicle -  ${item?.vehicleId} |`
            : "",
          spot: item?.spot ? `Spot - ${item?.spot}` : "",
          index: index,
          category: item?.category,
          subTitle1: item?.subTitle1,
          subTitle2: item?.subTitle2,
          bodyContent: `${item?.subTitle1} | ${item?.subTitle2}`,
          restauratName: item?.restauratName,
          inventoryLevelBody: `Inventory Level - ${item?.inventoryLevel}`,

          orderDelayedBody: `Order ${item?.orderNumber} | Delayed Time - ${item?.delayedTime}`,
          pendingOrderBody: `Pending Orders - ${item?.pendingOrders} | Pending Time - ${item?.pendingTime}`,
        });
    });
  return dataList;
};

export const formattedAnalyticsListData = (label, data) => {
  const dataList = [];

  const getParkingAnalyticsList = (data) => {
    data?.analyticsList?.map((item) => {
      dataList.push({
        title: item?.title,
        iconData: item.data,
        totalAvailableSpot: item.data.weekly.totalAvailableSpot,
        totalOccupiedSpot: item.data.weekly.totalOccupiedSpot,
        totalIncidents: item.data.weekly.totalIncidents,
        totalOprAlerts: item.data.weekly.totalOprAlerts,
        totalHoursSaved: item.data.weekly.totalHoursSaved,
      });
    });
    return dataList;
  };

  const getRestaurentAnalyticsList = (data) => {
    data?.analyticsList?.map((item) => {
      dataList.push({
        title: item?.title,
        iconData: item?.data,
      });
    });
    return dataList;
  };

  switch (label) {
    case 0:
      return getParkingAnalyticsList(data);
    case 3:
      return getRestaurentAnalyticsList(data);
    default:
      break;
  }
};
