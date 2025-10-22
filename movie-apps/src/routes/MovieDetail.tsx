// Import hook และเครื่องมือที่จำเป็น
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import type { Driver, Team, Race, F1Item } from "../types/movie";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import type { RootState, AppDispatch } from "../store/store";

// Component สำหรับหน้ารายละเอียด F1 (เวอร์ชันใช้ Redux)
export default function F1Detail() {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [item, setItem] = useState<F1Item | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  // --- Redux-related hooks ---
  const dispatch = useDispatch<AppDispatch>();
  const { ids: favIds } = useSelector((state: RootState) => state.favorites);
  // ---------------------------

  useEffect(() => {
    const run = async () => {
      if (!id || !category) return;
      setStatus("loading");
      try {
        // ใช้ mock data แทนการเรียก API จริง
        const { mockDrivers, mockTeams, mockRaces } = await import("../lib/mockF1Data");
        
        let foundItem: F1Item | null = null;
        
        if (category === "drivers") {
          foundItem = mockDrivers.find(driver => driver.driverId === id) || null;
        } else if (category === "teams") {
          foundItem = mockTeams.find(team => team.teamId === id) || null;
        } else if (category === "races") {
          foundItem = mockRaces.find(race => race.raceId === id) || null;
        }
        
        setItem(foundItem);
        setStatus("idle");
      } catch {
        setStatus("error");
      }
    };
    run();
  }, [id, category]);

  if (status === "loading") {
    return <div className="container mx-auto p-4"><div className="text-center"><span className="loading loading-lg loading-spinner"></span></div></div>;
  }
  if (status === "error" || !item) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="alert alert-error mb-4">No data found</div>
        <Link to="/" className="btn">← back to home</Link>
      </div>
    );
  }

  // เช็คสถานะรายการโปรดจาก Redux state
  const itemId = 'driverId' in item ? item.driverId : 
                 'teamId' in item ? item.teamId : 
                 'raceId' in item ? item.raceId : 
                 'circuitId' in item ? item.circuitId : '';
  const isFavorited = favIds.includes(itemId);

  // Render different content based on category
  const renderDriverDetails = (driver: Driver) => (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="text-6xl font-bold mb-2">#{driver.number}</div>
        <div className="text-2xl font-bold">{driver.name} {driver.surname}</div>
        <div className="text-lg opacity-80">{driver.nationality}</div>
        <div className="text-sm opacity-60 mt-2">Born: {new Date(driver.birthday).toLocaleDateString()}</div>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{driver.name} {driver.surname}</h1>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-outline">{driver.nationality}</div>
          <div className="badge badge-outline">#{driver.number}</div>
          <div className="badge badge-outline">{driver.shortName}</div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Driver Information</h3>
          <p><strong>Full Name:</strong> {driver.name} {driver.surname}</p>
          <p><strong>Nationality:</strong> {driver.nationality}</p>
          <p><strong>Driver Number:</strong> #{driver.number}</p>
          <p><strong>Date of Birth:</strong> {new Date(driver.birthday).toLocaleDateString()}</p>
          <p><strong>Short Name:</strong> {driver.shortName}</p>
        </div>
      </div>
    </div>
  );

  const renderTeamDetails = (team: Team) => (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-lg p-8 text-white">
        <div className="text-4xl font-bold mb-2">{team.teamName}</div>
        <div className="text-lg opacity-80">{team.teamNationality}</div>
        <div className="text-sm opacity-60 mt-2">Since {team.firstAppeareance}</div>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{team.teamName}</h1>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-outline">{team.teamNationality}</div>
          <div className="badge badge-outline">Since {team.firstAppeareance}</div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Team Information</h3>
          <p><strong>Team Name:</strong> {team.teamName}</p>
          <p><strong>Nationality:</strong> {team.teamNationality}</p>
          <p><strong>First Appearance:</strong> {team.firstAppeareance}</p>
          <p><strong>Constructor Championships:</strong> {team.constructorsChampionships}</p>
          <p><strong>Driver Championships:</strong> {team.driversChampionships}</p>
        </div>
      </div>
    </div>
  );

  const renderRaceDetails = (race: Race) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold">{race.raceName}</h1>
        <div className="text-lg opacity-80">{race.circuit.circuitName}</div>
        <div className="text-sm opacity-60">{race.circuit.country}, {race.circuit.city}</div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title">Race Information</h3>
            <p><strong>Round:</strong> {race.round}</p>
            <p><strong>Laps:</strong> {race.laps}</p>
            <p><strong>Circuit Length:</strong> {race.circuit.circuitLength}</p>
            <p><strong>Corners:</strong> {race.circuit.corners}</p>
            <p><strong>Lap Record:</strong> {race.circuit.lapRecord}</p>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title">Schedule</h3>
            <p><strong>Race:</strong> {new Date(race.schedule.race).toLocaleString()}</p>
            <p><strong>Qualifying:</strong> {new Date(race.schedule.qualy).toLocaleString()}</p>
            <p><strong>FP1:</strong> {new Date(race.schedule.fp1).toLocaleString()}</p>
            <p><strong>FP2:</strong> {new Date(race.schedule.fp2).toLocaleString()}</p>
            <p><strong>FP3:</strong> {new Date(race.schedule.fp3).toLocaleString()}</p>
          </div>
        </div>
      </div>

      {race.winner && (
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title">Winner</h3>
            <p><strong>Driver:</strong> {race.winner.name} {race.winner.surname}</p>
            <p><strong>Team:</strong> {race.teamWinner?.teamName}</p>
            <p><strong>Fastest Lap:</strong> {race.fast_lap.fast_lap}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="btn btn-ghost mb-4">← back to home</Link>

      {category === "drivers" && 'name' in item && renderDriverDetails(item as Driver)}
      {category === "teams" && 'teamName' in item && renderTeamDetails(item as Team)}
      {category === "races" && 'raceName' in item && renderRaceDetails(item as Race)}

      <div className="flex gap-2 mt-8">
        <button 
          className={`btn ${isFavorited ? "btn-secondary" : "btn-outline"}`} 
          onClick={() => dispatch(toggleFavorite(itemId))}
        >
          {isFavorited ? "★ Favorited" : "☆ Favorite"}
        </button>
        {item && 'url' in item && item.url && (
          <a className="btn btn-primary" href={item.url} target="_blank" rel="noreferrer">
            View Official Page
          </a>
        )}
      </div>
    </div>
  );
}