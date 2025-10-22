// Import hooks ที่จำเป็นจาก React
import { useCallback, useEffect, useState } from "react";

// กำหนด Key ที่จะใช้สำหรับเก็บข้อมูลใน localStorage
const KEY = "fav_movie_ids";

// Custom Hook สำหรับจัดการรายการหนังโปรด
export function useFavorites() {
  // สร้าง state `ids` เพื่อเก็บ ID ของหนังโปรดทั้งหมด เป็น array ของ string
  const [ids, setIds] = useState<string[]>([]);

  // useEffect นี้จะทำงานแค่ครั้งเดียวตอนที่ hook ถูกเรียกใช้ครั้งแรก
  // เพื่อดึงข้อมูลจาก localStorage มาใส่ใน state
  useEffect(() => {
    const raw = localStorage.getItem(KEY); // อ่านข้อมูลดิบจาก localStorage
    if (raw) {
      try {
        setIds(JSON.parse(raw)); // แปลง JSON string กลับเป็น array แล้วอัปเดต state
      } catch {
        setIds([]); // หากข้อมูลใน localStorage ไม่ถูกต้อง ให้ใช้ array ว่างๆ แทน
      }
    }
  }, []); // dependency array ว่างเปล่า หมายถึงให้ทำงานแค่ครั้งเดียว

  // useEffect นี้จะทำงานทุกครั้งที่ state `ids` มีการเปลี่ยนแปลง
  // เพื่อบันทึกข้อมูลล่าสุดลงใน localStorage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(ids)); // แปลง array เป็น JSON string แล้วบันทึก
  }, [ids]); // dependency array คือ [ids] หมายถึงให้ทำงานเมื่อ ids เปลี่ยน

  // ฟังก์ชันสำหรับเพิ่มหรือลบ ID ออกจากรายการโปรด
  // ใช้ useCallback เพื่อ optimize ไม่ให้ฟังก์ชันนี้ถูกสร้างใหม่ทุกครั้งที่ re-render โดยไม่จำเป็น
  const toggle = useCallback((id: string | number) => {
    setIds(prev => { // ใช้ updater function เพื่อให้ได้ค่า state ล่าสุดเสมอ
      const sid = String(id); // แปลง id เป็น string
      // ถ้า id นี้มีอยู่แล้วใน array ให้กรองออก (ลบ), ถ้ายังไม่มี ให้เพิ่มเข้าไปใหม่
      return prev.includes(sid) ? prev.filter(x => x !== sid) : [...prev, sid];
    });
  }, []); // dependency array ว่างเปล่า เพราะฟังก์ชันนี้ไม่ขึ้นกับค่า props หรือ state ภายนอก

  // ฟังก์ชันสำหรับตรวจสอบว่า ID นี้อยู่ในรายการโปรดหรือไม่
  // ใช้ useCallback และจะสร้างฟังก์ชันใหม่เมื่อ ids เปลี่ยนแปลงเท่านั้น
  const has = useCallback((id: string | number) => ids.includes(String(id)), [ids]);

  // คืนค่า state และฟังก์ชันต่างๆ ออกไปให้ Component ที่เรียกใช้ hook นี้
  return { ids, toggle, has };
}