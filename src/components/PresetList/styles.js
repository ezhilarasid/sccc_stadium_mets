import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  noResultStyle: {
    textAlign: "center",
    color: theme.palette.lightGrayTwo,
    fontWeight: 600,
  },
  accordionTitle: {
    fontFamily: `'Poppins', sans-serif !important`,
    fontWeight: 600,
    fontSize: "16px !important",
    lineHeight: "31px",
  },
  rootContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  listContainer: {
    paddingTop: "15px",
  },
}));

export default useStyles;

export const RootContainer = styled("div")`
  border-radius: 5px;
  margin: 0 15px 10px 15px;
  background: #1f1f1f;
  border: 1px solid ${theme.palette.white};
  cursor: pointer;
  padding: 10px 15px;
`;

export const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  color: ${theme.palette.white};
`;

export const TitleText = styled("div")`
  display: flex;
  align-items: center;
  font-size: 20px;
  flex: 1;
`;

export const EditContainer = styled("div")`
  display: flex;
  align-items: center;
  flex: 0.2;
`;
export const DeleteContainer = styled("div")`
  display: flex;
  align-items: center;
  flex: 0.2;
`;

export const ArrowContainer = styled("div")`
  display: flex;
  align-items: center;
  flex: 0.1;
`;

export const ListContainer = styled("div")`
  border-radius: 5px;
  margin: 0 0 15px 0;
  background: #1f1f1f;
  border: 1px solid ${theme.palette.white};
  cursor: pointer;
`;

export const Container = styled("div")`
  display: flex;
  align-items: center;
`;
