import { TableCell, TableHead, TableRow } from "@mui/material";
import "./standings.css";

const StandingsTableHead = () => {
  return (
    <TableHead className="table-head">
      <TableRow>
        <TableCell padding="normal">Ranking</TableCell>
        <TableCell padding="normal">Team</TableCell>
        <TableCell padding="normal" align="center">
          Overall
        </TableCell>
        <TableCell padding="normal" align="center">
          Won
        </TableCell>
        <TableCell padding="normal" align="center">
          Draw
        </TableCell>
        <TableCell padding="normal" align="center">
          Lost
        </TableCell>
        <TableCell padding="normal" align="center">
          Goal difference
        </TableCell>
        <TableCell padding="normal" align="center">
          Points
        </TableCell>
        <TableCell padding="normal" align="center">
          Form
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default StandingsTableHead;
