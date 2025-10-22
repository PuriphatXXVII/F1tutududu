// Import hook และ component ที่จำเป็น
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import F1Grid from "../components/F1Grid";
import type { F1Item, Driver, Team, Race } from "../types/movie";

// Component สำหรับหน้าแสดงรายการโปรด (เวอร์ชันใช้ Redux)
export default function Favorites() {
  // 1. ดึง ID ของรายการโปรดทั้งหมดจาก Redux store
  const { ids } = useSelector((state: RootState) => state.favorites);
  
  // 2. สร้าง state ของตัวเองเพื่อเก็บข้อมูล F1 และสถานะการโหลด
  const [favItems, setFavItems] = useState<F1Item[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // 3. useEffect จะทำงานเมื่อรายการ id ของรายการโปรด (จาก Redux) เปลี่ยนไป
  useEffect(() => {
    if (!ids || ids.length === 0) {
      setFavItems([]);
      return;
    }

    const fetchFavoriteItems = async () => {
      setStatus("loading");
      setError(null);
      try {
        // ใช้ mock data แทนการเรียก API จริง
        const { mockDrivers, mockTeams, mockRaces } = await import("../lib/mockF1Data");

        const allItems: F1Item[] = [
          ...mockDrivers,
          ...mockTeams,
          ...mockRaces
        ];

        // กรองเฉพาะรายการที่อยู่ใน favorites
        const favoriteItems = allItems.filter(item => {
          const itemId = 'driverId' in item ? item.driverId :
                        'teamId' in item ? item.teamId :
                        'raceId' in item ? item.raceId :
                        'circuitId' in item ? item.circuitId : '';
          return ids.includes(itemId);
        });

        setFavItems(favoriteItems);
        setStatus("idle");
      } catch (err) {
        console.error(err);
        setError("Can't load favorite items");
        setStatus("error");
      }
    };

    fetchFavoriteItems();
  }, [ids]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

      {status === "loading" && <div className="text-center"><span className="loading loading-lg loading-spinner"></span></div>}
      {status === "error" && <div className="alert alert-error mb-4">{error}</div>}
      
      {status === "idle" && <F1Grid items={favItems} category="drivers" />}

      {status === "idle" && !favItems.length && (
        <div className="text-center opacity-70 p-10">
          Don't have any favorite items — go to Home page and click "Favorite" on the data card
        </div>
      )}
    </div>
  );
}