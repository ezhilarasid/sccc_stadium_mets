import { createStyles } from "@mui/styles";

const overrides = {
    MuiMenuItem: createStyles({
        root: {
            "&&:hover": {
                backgroundColor: "pink",
                "& *": {
                    color: "white"
                }
            }
        },
        selected: {
            "&&": {
                backgroundColor: "blue",
                "& *": {
                    color: "white"
                }
            },
            "&&:hover": {
                backgroundColor: "darkblue",
                "& *": {
                    color: "white"
                }
            }
        }
    })
};

export default overrides;