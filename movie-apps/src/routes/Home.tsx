// Import hook ที่จำเป็นจาก React และ Redux
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import actions และ types จาก store ของเรา
import { fetchF1Data, setOffset, setQuery, setCategory } from "../store/moviesSlice";
import type { RootState, AppDispatch } from "../store/store";

// Import UI components
import F1Grid from "../components/F1Grid";
import Pagination from "../components/Pagination";

// Component สำหรับหน้าแรก
export default function Home() {
  // useDispatch คือ hook สำหรับส่ง action ไปให้ Redux
  const dispatch = useDispatch<AppDispatch>();

  // useSelector คือ hook สำหรับดึงข้อมูลจาก Redux store
  // เราดึง state ทั้งหมดที่เกี่ยวกับ F1 มาใช้งาน
  const { items, status, error, count, limit, offset, query, category } = useSelector((s: RootState) => s.f1);

  // useEffect จะทำงานเมื่อ component ถูก render หรือเมื่อค่าใน dependency array ([]) เปลี่ยนไป
  useEffect(() => {
    // สั่งให้ Redux เริ่มกระบวนการดึงข้อมูล F1 โดยใช้ offset, limit และ category ปัจจุบัน
    dispatch(fetchF1Data({ category, offset, limit }));
  }, [dispatch, offset, limit, category]); // จะทำงานใหม่เมื่อ offset, limit หรือ category เปลี่ยน

  // useMemo ใช้เพื่อคำนวณค่าที่ซับซ้อน และจะคำนวณใหม่ก็ต่อเมื่อ dependency เปลี่ยน
  // ในที่นี้คือการกรองข้อมูล F1 ตามคำค้นหา (query)
  const filtered = useMemo(() => {
    if (!query) return items; // ถ้าไม่มีคำค้นหา ก็คืนค่าข้อมูลทั้งหมด
    const q = query.toLowerCase(); // แปลงคำค้นหาเป็นตัวพิมพ์เล็ก
    
    // กรองข้อมูลตามประเภท
    return items.filter(item => {
      if ('name' in item && 'surname' in item) {
        // Driver
        return item.name?.toLowerCase().includes(q) || 
               item.surname?.toLowerCase().includes(q) ||
               item.nationality?.toLowerCase().includes(q);
      } else if ('teamName' in item) {
        // Team
        return item.teamName?.toLowerCase().includes(q) ||
               item.teamNationality?.toLowerCase().includes(q);
      } else if ('raceName' in item) {
        // Race
        return item.raceName?.toLowerCase().includes(q) ||
               item.circuit?.circuitName?.toLowerCase().includes(q) ||
               item.circuit?.country?.toLowerCase().includes(q);
      }
      return false;
    });
  }, [items, query]); // จะกรองใหม่เมื่อ items (ข้อมูล F1) หรือ query (คำค้นหา) เปลี่ยน

  return (
    <div className="container mx-auto p-4">
      {/* ส่วนของ UI สำหรับการค้นหาและ Refresh */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* Category Selector */}
        <select
          className="select select-bordered"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value as "drivers" | "teams" | "races"))}
        >
          <option value="drivers">Drivers</option>
          <option value="teams">Teams</option>
          <option value="races">Races</option>
        </select>
        
        <input
          type="text"
          className="input input-bordered w-full max-w-sm"
          placeholder={`Search ${category}...`}
          value={query} // ค่าในช่องค้นหาผูกกับ query ใน Redux
          onChange={(e) => dispatch(setQuery(e.target.value))} // เมื่อพิมพ์ ให้ส่ง action ไปอัปเดต query
        />
        <button className="btn" onClick={() => dispatch(fetchF1Data({ category, offset, limit }))}>
          Refresh
        </button>
      </div>

      {/* การแสดงผลตามสถานะการโหลดข้อมูล */}
      {status === "loading" && <div className="text-center"><span className="loading loading-lg loading-spinner"></span></div>}
      {status === "failed" && <div className="alert alert-error mb-4">{error}</div>}

      {/* แสดงตาราง F1 โดยส่งข้อมูลที่กรองแล้วไปให้ F1Grid */}
      <F1Grid items={filtered} category={category} />

      {/* แสดง Component สำหรับการแบ่งหน้า */}
      <Pagination
        total={count} // จำนวนข้อมูลทั้งหมด
        limit={limit} // จำนวนข้อมูลต่อหน้า
        offset={offset} // หน้าปัจจุบัน
        onChange={(newOffset) => dispatch(setOffset(newOffset))} // เมื่อเปลี่ยนหน้า ให้ส่ง action ไปอัปเดต offset
      />
    </div>
  );
}
