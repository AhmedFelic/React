import { useEffect, useState } from "react";
import Axios from "axios";
import "./standings.css";
import { Table, TableContainer, Paper } from "@mui/material";
import { config } from "../../config";
import StandingsTableBody from "./StandingsTableBody";
import StandingsTableHead from "./StandingsTableHead";
import StandingsTableSelectionBox from "./StandingsTableBox";
import TieBrakerRules from "./TieBrakerRules";

const Standings = () => {
  const [competition, setCompetition] = useState();

  const [standingsData, setStandingsData] = useState([]);

  useEffect(() => {
    Axios.get(
      `${config.API_URL}/standings/season/19735?include=league&api_token=${config.API_KEY}`
    ).then((response) => {
      setStandingsData(response.data.data[0].standings.data);
    });
  }, []);

  return (
    <div className="standings-container">
      <div className="standingsHeader">{competition}</div>
      <StandingsTableSelectionBox
        competition={competition}
        setCompetition={setCompetition}
      />

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table
          padding="none"
          sx={{ borderRadius: 5 }}
          aria-label="a dense table"
          size="small"
        >
          <StandingsTableHead />

          <StandingsTableBody standingsData={standingsData} />
        </Table>
      </TableContainer>
      <TieBrakerRules />
    </div>
  );
};

export default Standings;
