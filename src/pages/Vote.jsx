import VoteCard from "../components/VoteCard";
import { useVoteContext } from "../context/VoteContext";

export default function Vote() {
  const {
    candidates,
    votes,
    setVotes,
    hasVoted,
    setHasVoted,
    votedFor,
    setVotedFor,
  } = useVoteContext();

  // ✅ Handle vote button click
  const handleVote = (id) => {
    if (!hasVoted) {
      setVotes((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
      setHasVoted(true);
      setVotedFor(id);
    }
  };

  // ✅ Reset vote
  const handleReset = () => {
    if (votedFor !== null) {
      setVotes((prev) => ({
        ...prev,
        [votedFor]: Math.max((prev[votedFor] || 1) - 1, 0),
      }));
    }
    setHasVoted(false);
    setVotedFor(null);
  };

  // ✅ Get leading candidate
  const leadingCandidate = Object.keys(votes).length
    ? candidates.reduce(
        (max, c) => (votes[c.id] || 0) > (votes[max.id] || 0) ? c : max,
        candidates[0]
      )
    : null;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Vote for your favorite
      </h2>

      {hasVoted && (
        <div className="mb-4 text-center">
          <p className="text-green-600 font-semibold">Thank you for voting!</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleReset}
          >
            Reset Vote
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-6 justify-center">
        {candidates.map((c) => (
          <VoteCard
            key={c.id}
            candidate={c}
            onVote={handleVote} // ✅ Corrected this line
            hasVoted={hasVoted}
            votes={votes[c.id] || 0}
            votedFor={votedFor}
          />
        ))}
      </div>

      {hasVoted && leadingCandidate && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold">Leading Candidate:</h3>
          <p className="text-lg">
            {leadingCandidate.name} ({votes[leadingCandidate.id] || 0} votes)
          </p>
        </div>
      )}
    </div>
  );
}
