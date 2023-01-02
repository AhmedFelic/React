import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../config";
import StatisticsComponent from "../../Components/StatisticsComponent";
import "./statistics.css";
import StatisticsComponentWC from "../../Components/StatisticsComponentWC";
import { COMPETITIONS } from "../../common/competitions";

const goalscorersApi = `${config.API_URL}/topscorers/season/19735?api_token=${config.API_KEY}&include=goalscorers.player&include=goalscorers.player.team`;
const assistscorersApi = `${config.API_URL}/topscorers/season/19735?api_token=${config.API_KEY}&include=assistscorers.player&include=assistscorers.player.team`;
const goalscorersApi_WC = `${config.API_URL}/topscorers/season/19686?api_token=${config.API_KEY}&include=goalscorers.player&include=goalscorers.player.team`;
const assistscorersApi_WC = `${config.API_URL}/topscorers/season/19686?api_token=${config.API_KEY}&include=assistscorers.player&include=assistscorers.player.team`;

const Statistics = () => {
  const [statisticsData, setStatistisData] = useState([]);
  const [statisticsDataWC, setStatisticsDataWC] = useState([]);
  const [statisticsDataVisible, setStatisticsDataVisible] = useState(false);
  const [statisticsDataWcVisible, setStatisticsDataWcVisible] = useState(false);
  const [competition, setCompetition] = useState("select-competition");
  const handleOnChange = (e) => {
    setCompetition(e.target.value);
  };

  const fetchData = async () => {
    try {
      const goalscorersResponse = await axios(goalscorersApi);
      const assistscorersResponse = await axios(assistscorersApi);
      const goalscorersApi_WcResponse = await axios(goalscorersApi_WC);
      const assistscorersApi_WcResponse = await axios(assistscorersApi_WC);

      goalscorersResponse.data.data.goalscorers.data.map((row) => {
        var filterAssistscorers =
          assistscorersResponse.data.data.assistscorers.data.filter(
            (f) => f.player_id == row.player_id
          );

        if (filterAssistscorers.length > 0) {
          row.assists = filterAssistscorers.find(
            (f) => f.player_id == row.player_id
          ).assists;
        } else {
          row.assists = 0;
        }
      });

      goalscorersApi_WcResponse.data.data.goalscorers.data.map((row) => {
        var filterAssitsscorersWC =
          assistscorersApi_WcResponse.data.data.assistscorers.data.filter(
            (f) => f.player_id == row.player.id
          );

        if (filterAssitsscorersWC.length > 0) {
          row.assists = filterAssitsscorersWC.find(
            (f) => f.player_id == row.player_id
          ).assists;
        } else {
          row.assists = 0;
        }
      });

      setStatistisData(goalscorersResponse.data.data.goalscorers.data);
      setStatisticsDataWC(goalscorersApi_WcResponse.data.data.goalscorers.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();

    setStatisticsDataVisible(true);
    if (competition === "StatisticsData") {
      setStatisticsDataWcVisible(false);
    }
    if (competition === "StatisticsDataWC") {
      setStatisticsDataWcVisible(true);
      setStatisticsDataVisible(false);
    }
  }, [competition]);

  return (
    <div className="container">
      <div>
        <select
          className="form-select custom-select"
          value={competition}
          onChange={handleOnChange}
        >
          <option className="first-option" value="StatisticsData">
            {COMPETITIONS.SCSHP}{" "}
          </option>
          <option className="second-option " value="StatisticsDataWC">
            {COMPETITIONS.WC}
          </option>
        </select>
      </div>

      {statisticsDataVisible && (
        <StatisticsComponent statisticsData={statisticsData} />
      )}
      {statisticsDataWcVisible && (
        <StatisticsComponentWC statisticsDataWC={statisticsDataWC} />
      )}
    </div>
  );
};
export default Statistics;
