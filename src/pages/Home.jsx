import CampaignCard from "../components/CampaignCard";
import { Link } from "react-router-dom";

const campaigns = [
    { id: 1, title: "Help John", goal: 1000, raised: 450 },
    { id: 2, title: "Community Park Renovation", goal: 5000, raised: 3500 },
    { id: 3, title: "School Supplies for Kids", goal: 2000, raised: 1500 },
    { id: 4, title: "Animal Shelter Support", goal: 3000, raised: 1800 },
  ];

export default function Home() {
  return (
    <div className="card-container">
  {campaigns.map((campaign) => (
    <Link to={`/campaign/${campaign.id}`} key={campaign.id} className="campaign-card-link">
    <div className="card">
      <h3>{campaign.title}</h3>
      <p>Goal: ${campaign.goal}</p>
      <p>Raised: ${campaign.raised}</p>
    </div>
  </Link>
  ))}
</div>
  );
}

