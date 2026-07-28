import DestinationHero from "./DestinationHero";
import StatsCards from "./StatsCards";
import SummaryCard from "./SummaryCard";
import Timeline from "./Timeline";

export default function ItineraryLayout({ data }) {
  return (
    <div className="space-y-10">

      <DestinationHero data={data} />

      <StatsCards data={data} />

      <SummaryCard data={data} />

      <Timeline 
      itinerary={data.itinerary}
      destination={data.destination} />

    </div>
  );
}