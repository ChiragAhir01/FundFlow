import { useParams } from "react-router-dom";

function CampaignDetails() {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === parseInt(id)); // Replace with your data source

  return (
    <div className="campaign-details">
      <div className="campaign-image">
        <img src="campaign1.jpg" alt="campaign1" />
      </div>
      <div className="campaign-info">
      <h2>{campaign.title}</h2>
      <p><strong>Description:</strong> {campaign.description}</p>
      <p><strong>Goal:</strong> ${campaign.goal}</p>
      <p><strong>Raised:</strong> ${campaign.raised}</p>
      <button className="fund-button">Give Funds</button>
      </div>
    </div>
  );
}

export default CampaignDetails;