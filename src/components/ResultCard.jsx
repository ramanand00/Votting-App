export default function ResultCard({ candidate, votes, totalVotes, isWinner }) {
  const percentage = totalVotes ? ((votes / totalVotes) * 100).toFixed(1) : 0;

  return (
    <div className={`bg-white p-4 rounded shadow-md w-full md:w-1/3 text-center ${isWinner ? "border-4 border-green-500" : ""}`}>
      <div className="flex justify-end">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mb-2 animate-pulse">
          Live
        </span>
      </div>
      <img
        src={candidate.image}
        className="w-32 h-32 mx-auto rounded-full"
        alt={candidate.name}
      />
      <h2 className="text-xl font-bold mt-2">{candidate.name}</h2>
      {candidate.party && (
        <p className="text-sm text-blue-600 font-semibold mt-1">{candidate.party}</p>
      )}
      <p className="text-lg text-gray-600 mt-1">Votes: {votes}</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2 mb-2 overflow-hidden">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{percentage}% of total votes</p>
      {candidate.bio && (
        <p className="text-xs text-gray-500 mt-2">{candidate.bio}</p>
      )}
      {isWinner && (
        <div className="mt-2 text-green-600 font-bold">🏆 Winner!</div>
      )}
    </div>
  );
}
