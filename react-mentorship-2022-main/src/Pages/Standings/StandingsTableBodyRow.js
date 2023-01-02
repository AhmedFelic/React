import { TableCell, TableRow, Stack } from "@mui/material";
import StandingsTableBodyRowChip from "./StandingsTableBodyRowChip";
import "./standings.css";

const StandingsTableBodyRow = ({ team, leagueTeamsCount }) => {
  let positionBackgroundColor;

  if (team.position <= 4) {
    positionBackgroundColor = "promotion-color";
  } else if (team.position > 4 && team.position < leagueTeamsCount) {
    positionBackgroundColor = "mid-table-color";
  } else {
    positionBackgroundColor = "relegation-color";
  }

  return (
    <TableRow key={team.team_id}>
      <TableCell
        component="th"
        scope="row"
        size="small"
        padding="checkbox"
        align="center"
        className={positionBackgroundColor}
      >
        {team.position}.
      </TableCell>
      <TableCell padding="checkbox" align="left" component="th" scope="row">
        {team.team_name}
      </TableCell>
      <TableCell align="center">{team.overall.games_played}</TableCell>
      <TableCell align="center">{team.overall.won}</TableCell>
      <TableCell align="center">{team.overall.draw}</TableCell>
      <TableCell align="center">{team.overall.lost}</TableCell>
      <TableCell align="center">{team.total.goal_difference}</TableCell>
      <TableCell align="center">{team.overall.points}</TableCell>
      <TableCell align="right">
        <Stack spacing={1} alignItems="center">
          <Stack sx={{ paddingTop: 1 }} direction="row" spacing={1}>
            {team.recent_form.split("").map((result) => {
              return (
                <StandingsTableBodyRowChip result={result} key={team.team_id} />
              );
            })}
          </Stack>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default StandingsTableBodyRow;
