// Import Type ของ F1Item และ Component F1Card
import type { F1Item } from "../types/movie";
import F1Card from "./F1Card";

// Component นี้ทำหน้าที่แสดงผลตารางของข้อมูล F1
// รับ props เป็น items ซึ่งเป็น array ของ F1Item และ category
export default function F1Grid({ 
  items, 
  category 
}: { 
  items: F1Item[]; 
  category: "drivers" | "teams" | "races";
}) {
  // ตรวจสอบว่ามีข้อมูลใน array หรือไม่
  if (!items?.length) {
    // ถ้าไม่มี ให้แสดงข้อความนี้
    return <div className="text-center opacity-70 p-10">No {category} to display.</div>;
  }

  // ถ้ามีข้อมูล ให้แสดงผลเป็นตาราง
  return (
    // ใช้ Tailwind CSS ในการสร้าง Grid Layout ที่ปรับขนาดตามหน้าจอ (responsive)
    // - grid-cols-1: 1 คอลัมน์ในจอเล็ก
    // - md:grid-cols-2: 2 คอลัมน์ในจอขนาดกลาง
    // - lg:grid-cols-3: 3 คอลัมน์ในจอขนาดใหญ่
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* วนลูป (map) ข้อมูล F1 แต่ละรายการใน items array */}
      {/* แล้วส่งไปให้ F1Card component แสดงผลทีละใบ */}
      {/* key ใช้ตามประเภทข้อมูล */}
      {items.map((item, index) => (
        <F1Card 
          key={
            'driverId' in item ? item.driverId :
            'teamId' in item ? item.teamId :
            'raceId' in item ? item.raceId :
            'circuitId' in item ? item.circuitId :
            index
          } 
          item={item} 
          category={category}
        />
      ))}
    </div>
  );
}
