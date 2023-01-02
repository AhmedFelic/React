import "./standings.css";

const TieBrakerRules = () => {
  return (
    <span className="tie-breaker-rules">
      In the event that two (or more) teams have an equal number of points, the
      following rules break the tie during the season: 1. Goal difference 2.
      Goals scored. At the end of the season, the following tie-breaking
      procedures are used: 1. Head-to-head 2. Goal difference 3. Goals scored
    </span>
  );
};

export default TieBrakerRules;
