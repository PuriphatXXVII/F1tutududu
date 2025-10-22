// Import ที่จำเป็น
import { Link } from "react-router-dom";
import type { F1Item, Driver, Team, Race } from "../types/movie";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import type { RootState, AppDispatch } from "../store/store";

// Import รูปภาพแบบ static
import maxImage from "../img/max.png";
import lewisImage from "../img/lewis.png";
import charlesImage from "../img/Charles.png";
import carlosImage from "../img/Carlos.png";
import landoImage from "../img/Lando.png";
import oscarImage from "../img/Oscar.png";
import georgeImage from "../img/George.png";
import fernandoImage from "../img/Fernando.png";
import sergioImage from "../img/Sergio.png";
import alexanderImage from "../img/Alexander.png";
import danielImage from "../img/Daniel.png";
import estebanImage from "../img/Esteban.png";
import guanyuImage from "../img/Guanyu.png";
import kevinImage from "../img/Kevin.png";
import lanceImage from "../img/Lance.png";
import loganImage from "../img/Logan.png";
import nicoImage from "../img/Nico.png";
import pierreImage from "../img/Pierre.png";
import valtterriImage from "../img/Valtteri.png";
import yukiImage from "../img/Yuki.png";

// Import รูปภาพทีม
import redBullImage from "../img/redbull.png";
import ferrariImage from "../img/Ferrari.png";
import mclarenImage from "../img/Mclaren.png";
import mercedesImage from "../img/Mercedes.png";
import astonMartinImage from "../img/Aston Martin.png";
import alpineImage from "../img/Alpine.png";
import alphaTauriImage from "../img/AlphaTauri.png";
import alfaRomeoImage from "../img/Alfa Romeo.png";
import williamsImage from "../img/Williams.png";
import haasImage from "../img/Haas.png";

// Import รูปภาพประเทศ/เรซ
import australiaImage from "../img/Australia.png";
import germanyImage from "../img/Germany.png";
import saudiArabiaImage from "../img/Saudi Arabia.png";
import bahrainImage from "../img/Bahrain.png";

// กำหนด Type ของ Props ที่ Component นี้จะได้รับ
type Props = { 
  item: F1Item; 
  category: "drivers" | "teams" | "races";
};

// Component สำหรับแสดงผลการ์ด F1 1 ใบ
export default function F1Card({ item, category }: Props) {
  // useDispatch สำหรับส่ง action ไปยัง store
  const dispatch = useDispatch<AppDispatch>();
  // useSelector สำหรับดึง state จาก store
  const { ids: favIds } = useSelector((state: RootState) => state.favorites);

  // ฟังก์ชันสำหรับดึง ID ของ item
  const getItemId = (item: F1Item): string => {
    if ('driverId' in item) return item.driverId;
    if ('teamId' in item) return item.teamId;
    if ('raceId' in item) return item.raceId;
    if ('circuitId' in item) return item.circuitId;
    return '';
  };

  // ฟังก์ชันสำหรับดึงชื่อของ item
  const getItemName = (item: F1Item): string => {
    if ('name' in item && 'surname' in item) {
      return `${item.name} ${item.surname}`;
    }
    if ('teamName' in item) return item.teamName;
    if ('raceName' in item) return item.raceName;
    if ('circuitName' in item) return item.circuitName;
    return 'Unknown';
  };

  // ฟังก์ชันสำหรับดึงข้อมูลเพิ่มเติม
  const getItemSubtitle = (item: F1Item): string => {
    if ('nationality' in item) return item.nationality;
    if ('teamNationality' in item) return item.teamNationality;
    if ('circuit' in item) return `${item.circuit.country}, ${item.circuit.city}`;
    return '';
  };

  // ฟังก์ชันสำหรับดึงข้อมูลเพิ่มเติม
  const getItemDetails = (item: F1Item): string => {
    if ('number' in item) return `#${item.number}`;
    if ('constructorsChampionships' in item) return `${item.constructorsChampionships} Constructor Championships`;
    if ('round' in item) return `Round ${item.round}`;
    if ('circuitLength' in item) return item.circuitLength;
    return '';
  };

  const itemId = getItemId(item);
  const itemName = getItemName(item);
  const itemSubtitle = getItemSubtitle(item);
  const itemDetails = getItemDetails(item);

  // ฟังก์ชันสำหรับดึงรูปภาพ
  const getItemImage = (item: F1Item, category: string): string => {
    if (category === "drivers" && 'name' in item) {
      // สำหรับนักขับ ใช้ static imports
      const driverImages: { [key: string]: string } = {
        "max": maxImage,
        "lewis": lewisImage,
        "charles": charlesImage,
        "carlos": carlosImage,
        "lando": landoImage,
        "oscar": oscarImage,
        "george": georgeImage,
        "fernando": fernandoImage,
        "sergio": sergioImage,
        "alexander": alexanderImage,
        "daniel": danielImage,
        "esteban": estebanImage,
        "guanyu": guanyuImage,
        "kevin": kevinImage,
        "lance": lanceImage,
        "logan": loganImage,
        "nico": nicoImage,
        "pierre": pierreImage,
        "valtteri": valtterriImage,
        "yuki": yukiImage
      };
      
      const imageName = item.name.toLowerCase();
      return driverImages[imageName] || "https://placehold.co/300x200?text=F1";
      
    } else if (category === "teams" && 'teamName' in item) {
      // สำหรับทีม ใช้ static imports
      const teamImages: { [key: string]: string } = {
        "Red Bull Racing": redBullImage,
        "Ferrari": ferrariImage,
        "McLaren": mclarenImage,
        "Mercedes": mercedesImage,
        "Aston Martin": astonMartinImage,
        "Alpine": alpineImage,
        "AlphaTauri": alphaTauriImage,
        "Alfa Romeo": alfaRomeoImage,
        "Williams": williamsImage,
        "Haas F1 Team": haasImage
      };
      
      return teamImages[item.teamName] || "https://placehold.co/300x200?text=F1";
      
    } else if (category === "races" && 'circuit' in item && item.circuit.country) {
      // สำหรับเรซ ใช้ static imports
      const countryImages: { [key: string]: string } = {
        "Australia": australiaImage,
        "Germany": germanyImage,
        "Saudi Arabia": saudiArabiaImage,
        "Bahrain": bahrainImage
      };
      
      return countryImages[item.circuit.country] || "https://placehold.co/300x200?text=" + encodeURIComponent(item.circuit.country);
    } else if (category === "races" && 'raceName' in item) {
      // ถ้าไม่มีข้อมูล circuit ให้ใช้ชื่อเรซ
      return "https://placehold.co/300x200?text=" + encodeURIComponent(item.raceName);
    }
    
    return "https://placehold.co/300x200?text=F1";
  };

  const itemImage = getItemImage(item, category);

  // เช็คสถานะรายการโปรดจาก Redux state
  const isFavorited = favIds.includes(itemId);

  const handleFavoriteClick = () => {
    // เมื่อคลิก, dispatch action `toggleFavorite` พร้อมกับส่ง ID ของรายการไป
    dispatch(toggleFavorite(itemId));
  };

  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition">
      <figure className="aspect-[4/3] overflow-hidden">
        <img
          src={itemImage}
          alt={itemName}
          className="object-cover w-full h-full"
          loading="lazy"
          onError={(e) => {
            // ถ้าโหลดรูปไม่ได้ ให้ใช้ placeholder
            e.currentTarget.src = "https://placehold.co/300x200?text=F1";
          }}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg line-clamp-2 h-14">{itemName}</h2>
        {itemSubtitle && (
          <p className="text-sm opacity-70 truncate">{itemSubtitle}</p>
        )}
        {itemDetails && (
          <p className="text-xs opacity-60 truncate">{itemDetails}</p>
        )}
        
        <div className="card-actions justify-between items-center mt-3">
          <Link 
            to={`/${category}/${itemId}`} 
            className="btn btn-primary btn-sm"
          >
            Details
          </Link>
          <button
            className={`btn btn-outline btn-sm ${isFavorited ? "btn-secondary" : ""}`}
            onClick={handleFavoriteClick}
          >
            {isFavorited ? "★ Favorited" : "☆ Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}
