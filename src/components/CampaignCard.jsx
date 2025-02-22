import { Link } from "react-router-dom";

function CampaignCard({ campaign }) {
  return (
    <Link to={`/campaign/${campaign.id}`} className="campaign-card">
      <img src={campaign.image} alt={campaign.title} />
      <h3>{campaign.title}</h3>
      <p>{campaign.shortDescription}</p>
      <button className="donate-btn">Donate</button>
    </Link>
  );
}

export default CampaignCard;