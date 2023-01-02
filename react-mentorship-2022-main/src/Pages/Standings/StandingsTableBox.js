import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const StandingsTableSelectionBox = ({ competition, setCompetition }) => {
  const handleChange = (event) => {
    setCompetition(event.target.value);
  };

  return (
    <Box>
      <FormControl margin="dense" variant="standard" sx={{ width: "18%" }}>
        <InputLabel id="demo-simple-select-label">
          Select Competition
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={competition}
          label="Competition"
          onChange={handleChange}
        >
          <MenuItem value={"Scottish Premiership - Season 2022/2023"}>
            Scottish Premiership
          </MenuItem>
          <MenuItem value={"World Cup Qatar 2022"}>World Cup</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default StandingsTableSelectionBox;
