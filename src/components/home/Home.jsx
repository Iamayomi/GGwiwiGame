import React, { useState } from "react";
import Carousel from "./middle/Carousel";
import Mainpage from "./middle/Mainpage";
import Leftside from "./leftside/Leftside";
import Rightside from "./rightside/Rightside";
import TopBarMenu from "./topBarMenu/TopBarMenu";
import LiveMatchResults from "./liveMatchResult/liveMatchResult";
import Topcard from "../mobile/mobile-home/games/Topcard";
import LiveSportsNav from "../mobile/mobile-home/games/LiveSportsNav";
import MatchEventBox from "../mobile/mobile-home/games/MatchEventBox";
import Livematch from "../mobile/mobile-home/games/Livematch";
import Games from "../mobile/mobile-home/games/Games";
import Slots from "../mobile/mobile-home/games/Slots";
import Livecasino from "../mobile/mobile-home/games/Livecasino";
import Tvgames from "../mobile/mobile-home/games/Tvgames";
import Livegames from "../mobile/mobile-home/games/Livegames";
import GamingUI from "./gamesUI";

const Home = () => {
  const [hasPlacedBet, setHasPlacedBet] = useState(false);

  const placeBet = () => {
    setHasPlacedBet(true);
  };
  return (
    <section className="w-full  font-poppins">
      <TopBarMenu />
      {/* --------------computer-version---------------- */}
      <section className="xl:flex w-full justify-center">
        <div className="w-1/6 xl:block hidden bg-[#1a1a1a] text-white p-4">{hasPlacedBet ? <LiveMatchResults hasPlacedBet={hasPlacedBet} /> : <Leftside />}</div>

        <Mainpage />
        <Rightside />
      </section>
      {/* ------------------mobile-version---------------------- */}
      {/* <section className="xl:hidden">
        <Topcard />
        <GamingUI />
        <LiveSportsNav />
        <Livematch />
        <Livegames />
        <Games />
        <Slots />
        <Livecasino />
        <Tvgames />
      </section> */}
      <button onClick={placeBet} className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">
        Place Bet
      </button>
    </section>
  );
};

export default Home;
