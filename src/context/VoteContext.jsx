import { createContext, useContext, useState } from "react";
import { candidates as initialCandidates } from "../data/candidates";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [votes, setVotes] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [votedFor, setVotedFor] = useState(null);

  const addCandidate = (candidate) => {
    setCandidates((prev) => [...prev, candidate]);
  };

  return (
    <VoteContext.Provider
      value={{
        candidates,
        setCandidates,
        votes,
        setVotes,
        hasVoted,
        setHasVoted,
        votedFor,
        setVotedFor,
        addCandidate,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};

export const useVoteContext = () => useContext(VoteContext);
