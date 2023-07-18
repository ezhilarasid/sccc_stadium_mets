import { styled } from "@mui/material/styles";
import theme from "../../theme";

export const RootContainer = styled("div")`
  padding: 10px 10px 10px 20px;
  background-color: ${theme.palette.darkGraySix};
  // height: 350px;
  color: white;
  @media only screen and (max-width: 1024px) {
    padding: 10px 10px 10px 10px;
  }
`;
export const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  font-size: 13px;
  line-height: 17.7px;
  font-weight: 400;
`;

export const Heading = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  font-size: 13px;
  line-height: 17.7px;
  font-weight: 400;
`;

export const Heading2 = styled("div")`
  display: flex;
  align-items: center;
  justify-self: end;

  font-size: 13px;
  line-height: 17.7px;
  font-weight: 400;
`;

export const HeadingItem1 = styled("div")`
  font-size: 18px;
  line-height: 17px;
  font-weight: 700;
  letter-spacing: 2px;
  @media only screen and (max-width: 1024px) {
    font-size: 14px !important;
    line-height: 21px;
  }
`;

export const HeadingItem2 = styled("div")`
  display: flex;
  align-items: baseline;
  font-size: 13px;
  line-height: 17.7px;
  font-weight: 400;
`;
export const HeadingSubItemAvailable = styled("div")`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: white;
`;
export const HeadingSubItem = styled("div")`
  font-size: ${({ totalCount }) => (totalCount ? "20px" : "30px")};
  line-height: 33px;
  font-weight: 600;
  color: ${({ totalCount }) =>
    totalCount ? `${theme.palette.white}` : `${theme.palette.scccYellowOne}`};
  display: flex;
  .emptySlash {
    margin: 0 6px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 22px !important;
    line-height: 27px;
  }
`;

export const FooterContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  @media only screen and (max-width: 1024px) {
    padding-left: 5px;
  }
  flex: 1;
  //   font-size: 13px;
  //   line-height: 17.7px;
  //   font-weight: 400;
`;

export const FooterItems = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  //   justify-content: space-between;
  //   font-size: 13px;
  //   line-height: 17.7px;
  //   font-weight: 400;
`;

export const FooterItemValue = styled("div")`
  margin-bottom: ${({ totalCount }) => (totalCount ? "0" : "7px")};
  margin-top: ${({ totalCount }) => (totalCount ? "7px" : "0")};
  font-size: 16px;
  line-height: 17.7px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ totalCount }) =>
    totalCount ? `${theme.palette.white}` : `${theme.palette.scccYellowTwo}`};
  @media (max-width: 1181px) {
    font-size: 10px;
  }
  @media (max-width: 1025px) {
    font-size: 10px;
  }
`;

export const FooterIcons = styled("div")`
  cursor: pointer;
`;

export const ChartSection = styled("div")``;

export const ChartTitle = styled("div")`
  display: flex;
  justify-content: flex-start;
`;

export const ChartText = styled("div")`
  font-size: 13px;
  margin-right: 15px;

  line-height: 16.34px;
`;

export const FooterItemsSecurityIcon = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  cursor: pointer;
  marginbottom: 0;
`;

export const FooterItemsSecurityText = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 6px;
  marginbottom: 0;
`;

export const GraphVarientSection = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const GraphVarientItemSection = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 5px;
`;

export const GraphVarientItemBox = styled("div")`
  width: 12px;
  height: 12px;
  background-color: ${({ varient }) =>
    varient === "Tailgating"
      ? `${theme.palette.scccYellowThree}`
      : varient === "crowdForming"
      ? `${theme.palette.scccGreenOne}`
      : varient === "unauthorizedAccess"
      ? `${theme.palette.darkOrange}`
      : null};

  border-radius: 20%;
  margin-right: 7px;
`;

export const GraphVarientItem = styled("div")`
  font-size: 10px;

  flex: 1;
  margin-right: 4px;
`;

export const SecurityAnalyticsBg = styled("div")`
  background: ${theme.palette.darkGraySeven};
  padding: 6px;
  border-radius: 5px;
`;

export const FooterItemsSecurityTagLine = styled("div")`
  font-size: 8px;
  margin: 2px 6px;
`;

export const SpanPercentageStyle = styled("span")`
  font-size: 12px !important;
  margin-left: 2px;
`;
