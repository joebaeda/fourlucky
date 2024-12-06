'use client'

import { abi } from "@/lib/contract";
import { formatEther } from "viem";
import { useReadContract, useReadContracts } from "wagmi";
import { useState, useEffect, useMemo } from "react";
import { truncateAddress } from "@/lib/truncateAddress";

const FourNumberContract = process.env.NEXT_PUBLIC_FOURLUCKY_CONTRACT as `0x${string}`;

const UserStatsData = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [playerStats, setPlayerStats] = useState<any[]>([]);

  // Fetch the current round number
  const { data: currentRoundData } = useReadContract({
    abi,
    address: FourNumberContract,
    functionName: "currentRound",
  });

  const currentRound = currentRoundData ? Number(currentRoundData) : 1;

  // Fetch the list of player addresses for the current round
  const { data: playerAddresses } = useReadContract({
    abi,
    address: FourNumberContract,
    functionName: "getPlayersForRound",
    args: [BigInt(currentRound)],
  });

  // UseMemo to ensure 'players' remains stable
  const players = useMemo(() => playerAddresses || [], [playerAddresses]);

  // Prepare contract calls for all players
  const calls = useMemo(() => {
    return players.map((player) => ({
      abi,
      address: FourNumberContract,
      functionName: "getUserStats",
      args: [player as `0x${string}`],
    }));
  }, [players]);

  // Fetch stats for all players
  const { data: playersStatsData } = useReadContracts({
    contracts: calls,
  });

  // Process player stats when data is available
  useEffect(() => {
    if (playersStatsData && players.length > 0) {
      const statsData = playersStatsData.map((result, index) => {
        const stats = result.result as unknown as [bigint, bigint, bigint, bigint] || [BigInt(0), BigInt(0), BigInt(0), BigInt(0)];
        return {
          address: players[index],
          betCount: stats[0].toString(),
          totalSpent: stats[1],
          wins: Number(stats[2]),
          roundsCompleted: stats[3].toString(),
        };
      });

      setPlayerStats(statsData);
    }
  }, [playersStatsData, players]);

  // Rank players by wins
  const rankedPlayers = useMemo(() => {
    return [...playerStats].sort((a, b) => b.wins - a.wins);
  }, [playerStats]);

  // Define ranking icons
  const rankIcons = ["🥇", "🥈", "🥉"];

  return (
    <div>
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full table-auto border-none">
          <thead>
            <tr className="bg-[#282828] text-gray-500">
              <th className="p-2">Rank</th>
              <th className="p-2">Address</th>
              <th className="p-2">Wins</th>
              <th className="p-2">Total Spent (ETH)</th>
              <th className="p-2">Rounds Played</th>
            </tr>
          </thead>
          <tbody>
            {rankedPlayers.map((player, index) => (
              <tr
                key={player.address}
                className="text-center even:bg-gray-50 odd:bg-white"
              >
                <td className="p-2 border border-gray-300 font-bold">
                  {index < 3 ? rankIcons[index] : index + 1}
                </td>
                <td className="p-2 text-gray-700 border border-gray-300 text-sm break-words">
                  {truncateAddress(player.address)}
                </td>
                <td className="p-2 text-gray-700 border border-gray-300">{player.wins}</td>
                <td className="p-2 text-gray-700 border border-gray-300">
                  {formatEther(player.totalSpent)}
                </td>
                <td className="p-2 text-gray-700 border border-gray-300">{player.roundsCompleted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserStatsData;

