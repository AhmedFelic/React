import { TableBody } from "@mui/material";
import StandingsTableBodyRow from "./StandingsTableBodyRow";

const StandingsTableBody = ({ standingsData }) => {
  return (
    <TableBody>
      {standingsData.map((team) => (
        <StandingsTableBodyRow
          team={team}
          leagueTeamsCount={standingsData.length}
        />
      ))}
    </TableBody>
  );
};

export default StandingsTableBody;
