import { useVoteContext } from "../context/VoteContext";
import ResultCard from "../components/ResultCard";
import { candidates } from "../data/candidates";

export default function Results() {
  const { votes } = useVoteContext();

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  const maxVotes = Math.max(...Object.values(votes), 0);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-center flex-1">
          Live Voting Results
        </h2>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-4 animate-pulse">
          Live
        </span>
      </div>
      <p className="text-center text-gray-600 mb-4">
        Total Votes: {totalVotes}
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {candidates.map((c) => {
          const candidateVotes = votes[c.id] || 0;
          const isWinner = candidateVotes === maxVotes && maxVotes !== 0;
          return (
            <ResultCard
              key={c.id}
              candidate={c}
              votes={candidateVotes}
              totalVotes={totalVotes}
              isWinner={isWinner}
            />
          );
        })}
      </div>
    </div>
  );
}
