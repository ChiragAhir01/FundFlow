import { useState } from "react";

export default function CreateCampaign() {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Campaign "${title}" with goal $${goal} created!`);
  };

  return (
    <div className="create-campaign-card">
    <form onSubmit={handleSubmit} className="p-6 card max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Campaign</h2>
      <input type="text" placeholder="Campaign Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
      <input type="number" placeholder="Goal Amount" value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
      <button type="submit" className="btn-primary w-full">Create</button>
    </form>
    </div>
  );
}

