import { useState } from "react";
import { useVoteContext } from "../context/VoteContext";
import { useNavigate } from "react-router-dom";

export default function CreateVote() {
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");

  const { addCandidate } = useVoteContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addCandidate({
      id: Date.now(),
      name,
      party,
      image,
      bio,
    });
    navigate("/vote");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a Vote Option</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Candidate Name"
          className="w-full border rounded p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Party (optional)"
          className="w-full border rounded p-2"
          value={party}
          onChange={(e) => setParty(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="w-full border rounded p-2"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Short bio (optional)"
          className="w-full border rounded p-2"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Create Vote Option
        </button>
      </form>
    </div>
  );
}
