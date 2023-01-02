import { Chip } from "@mui/material";
import "./standings.css";
import { form } from "../../common/form";

const StandingsTableBodyRowChip = ({ result }) => {
  let resultBackgroundColor;

  if (result == form.WON) {
    resultBackgroundColor = "success";
  } else if (result == form.LOST) {
    resultBackgroundColor = "error";
  } else {
    resultBackgroundColor = "primary";
  }

  return (
    <Chip
      label={result}
      sx={{
        width: 37,
      }}
      color={resultBackgroundColor}
    />
  );
};

export default StandingsTableBodyRowChip;
