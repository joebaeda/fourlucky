import FourNumberPlay from "./components/FourNumberPlay";
import RoundStatsData from "./components/RoundStatsData";
import UserStatsData from "./components/UserStatsData";


export default function Home() {

  return (
    <div className="p-4">
      <FourNumberPlay />
      <RoundStatsData />
      <UserStatsData />
    </div>
  );
}
