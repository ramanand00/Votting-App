export default function VoteCard({ candidate, onVote, hasVoted, votes, votedFor }) {
  const isSelected = votedFor === candidate.id;

  return (
    <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3 text-center">
      <img
        src={candidate.image}
        alt={candidate.name}
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="text-xl font-bold mt-2">{candidate.name}</h3>
      {candidate.party && (
        <p className="text-sm text-blue-600 font-semibold mt-1">{candidate.party}</p>
      )}
      <p className="text-gray-600">Votes: {votes}</p>
      <button
        onClick={() => onVote(candidate.id)}
        className={`mt-2 px-4 py-2 rounded text-white ${hasVoted ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}
        disabled={hasVoted}
      >
        {hasVoted ? (isSelected ? "Voted" : "Vote") : "Vote"}
      </button>
      {candidate.bio && (
        <p className="text-xs text-gray-500 mt-2">{candidate.bio}</p>
      )}
    </div>
  );
}
