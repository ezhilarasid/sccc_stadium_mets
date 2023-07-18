import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  accordionTitle: {
    fontFamily: `'Poppins', sans-serif !important`,
    fontWeight: 600,
    fontSize: "16px !important",
    lineHeight: "31px",
  },
}));

export default useStyles;

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #ffffff`,
  background: "#1F1F1F",
  borderRadius: "5px",
  color: "#ffffff",
  "&:before": {
    display: "none",
  },
  margin: "15px 15px 0 15px",
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={
    //   <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#ffffff" }} />
    // }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const RootContainer = styled("div")`
  border-radius: 5px;
  margin: 0 0 10px 0;
  background: #1f1f1f;
  border: 1px solid #ffffff;
  cursor: pointer;
`;

export const EditRootContainer = styled("div")`
border-radius: "5px",
margin: "0 0 10px 0",
background: "#1f1f1f",
border: "1px solid #ffffff",
cursor: "pointer",
padding: "10px",
`;

export const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  color: #ffffff;
`;

export const TitleText = styled("div")`
  font-size: 20px;
  flex: 1;
`;

export const EditContainer = styled("div")`
  flex: 0.2;
`;
export const DeleteContainer = styled("div")`
  flex: 0.2;
`;

export const ArrowContainer = styled("div")`
  flex: 0.1;
`;
