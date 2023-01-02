import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ImageListItem,
  TablePagination,
} from "@mui/material";
import { Box } from "@mui/system";
import "../Pages/Statistics/statistics.css";
import { useState, React } from "react";


const StatisticsComponentWC = (props) => {
  const statisticsDataWC = props.statisticsDataWC;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const pages = [5, 10, 25, { label: "All", value: statisticsDataWC.length }];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer className="table-container">
        <TablePagination
          className="pagination-main"
          component="div"
          count={statisticsDataWC.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={pages}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Table>
          <TableHead>
            <TableRow className="main-row">
              <TableCell className="table-cell">#</TableCell>
              <TableCell>PLAYER</TableCell>
              <TableCell>TEAM</TableCell>
              <TableCell title="Goals" className="tableCell_G">
                <span className="titleText">G</span>
              </TableCell>
              <TableCell title="Assists" className="tableCell_A">
                <span className="titleText">A</span>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? statisticsDataWC.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : pages
            ).map((row) => (
              <TableRow key={row.player.data.player_id}>
                <TableCell className="position-numbers">
                  {row.position}
                </TableCell>
                <TableCell>
                  <Box className="rowBox">
                    <ImageListItem
                      className="image-list"
                      key={row.player.data.player_id}
                    >
                      <img src={row.player.data.team.data.logo_path}></img>
                    </ImageListItem>
                    <p className="pTag">{row.player.data.display_name}</p>
                  </Box>
                </TableCell>
                <TableCell>{row.player.data.team.data.name}</TableCell>
                <TableCell className="goal-number">
                  <span>{row.goals}</span>
                </TableCell>
                <TableCell className="assist-number">{row.assists}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default StatisticsComponentWC;
