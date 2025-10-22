// นำเข้าเครื่องมือที่จำเป็นจาก Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// นำเข้า Type Definitions เพื่อความถูกต้องของข้อมูล
import type { F1Item, DriversResponse, TeamsResponse, RacesResponse } from "../types/movie";

// กำหนดโครงสร้าง (Interface) ของ State สำหรับ Slice นี้
type F1State = {
  items: F1Item[]; // array สำหรับเก็บข้อมูล F1
  status: "idle" | "loading" | "succeeded" | "failed"; // สถานะการดึงข้อมูล
  error?: string; // สำหรับเก็บข้อความ error หากการดึงข้อมูลล้มเหลว
  count: number; // จำนวนข้อมูลทั้งหมดจาก API
  limit: number; // จำนวนข้อมูลที่ดึงมาต่อหนึ่งครั้ง
  offset: number; // ตำแหน่งเริ่มต้นของการดึงข้อมูล (สำหรับ Pagination)
  query: string; // คำค้นหา
  category: "drivers" | "teams" | "races"; // ประเภทข้อมูลที่แสดง
  season: number; // ปีที่แสดง
};

// กำหนดค่าเริ่มต้นสำหรับ State ของ F1
const initialState: F1State = {
  items: [],
  status: "idle", // สถานะเริ่มต้นคือ 'ว่าง'
  count: 0,
  limit: 20,
  offset: 0,
  query: "",
  category: "drivers", // เริ่มต้นด้วย drivers
  season: 2024, // ปีปัจจุบัน
};

// สร้าง Async Thunk สำหรับการดึงข้อมูล F1
export const fetchF1Data = createAsyncThunk<
  DriversResponse | TeamsResponse | RacesResponse, // ประเภทข้อมูลที่จะ return เมื่อสำเร็จ
  { category: "drivers" | "teams" | "races"; offset?: number; limit?: number; season?: number } // ประเภทของ Argument ที่รับเข้ามา
>(
  "f1/fetchData", // ชื่อของ Action Type
  async ({ category, offset = 0, limit = 20 }) => {
    // ใช้ mock data แทนการเรียก API จริง
    const { getMockDriversResponse, getMockTeamsResponse, getMockRacesResponse } = await import("../lib/mockF1Data");
    
    // สร้าง response ตามประเภทข้อมูล
    if (category === "drivers") {
      return getMockDriversResponse(offset, limit);
    } else if (category === "teams") {
      return getMockTeamsResponse(offset, limit);
    } else {
      return getMockRacesResponse(offset, limit);
    }
  }
);

// สร้าง Slice ของ State ที่ชื่อว่า 'f1'
const f1Slice = createSlice({
  name: "f1", // ชื่อของ slice
  initialState, // State เริ่มต้น
  // Reducers: ฟังก์ชันสำหรับอัปเดต State แบบ Synchronous (ทำงานทันที)
  reducers: {
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setCategory(state, action: PayloadAction<"drivers" | "teams" | "races">) {
      state.category = action.payload;
    },
    setSeason(state, action: PayloadAction<number>) {
      state.season = action.payload;
    },
    // ฟังก์ชันสำหรับรีเซ็ต State กลับไปเป็นค่าเริ่มต้น
    reset(state) {
      Object.assign(state, initialState);
    },
  },
  // extraReducers: สำหรับจัดการ Action ที่สร้างจากภายนอก Slice (เช่นจาก createAsyncThunk)
  extraReducers: (builder) => {
    builder
      // กรณี Action 'fetchF1Data' อยู่ในสถานะ 'pending' (กำลังโหลด)
      .addCase(fetchF1Data.pending, (state) => {
        state.status = "loading";
        state.error = undefined; // ล้าง error เก่า
      })
      // กรณี Action 'fetchF1Data' อยู่ในสถานะ 'fulfilled' (โหลดสำเร็จ)
      .addCase(fetchF1Data.fulfilled, (state, action) => {
        state.status = "succeeded";
        
        // แปลงข้อมูลตามประเภท
        if ('drivers' in action.payload) {
          state.items = action.payload.drivers;
          state.count = action.payload.total;
        } else if ('teams' in action.payload) {
          state.items = action.payload.teams;
          state.count = action.payload.total;
        } else if ('races' in action.payload) {
          state.items = action.payload.races;
          state.count = action.payload.total;
        }
      })
      // กรณี Action 'fetchF1Data' อยู่ในสถานะ 'rejected' (โหลดล้มเหลว)
      .addCase(fetchF1Data.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Fetch failed"; // เก็บข้อความ error
      });
  },
});

// Export actions จาก reducers เพื่อให้ Component อื่นๆ เรียกใช้ได้ผ่าน dispatch
export const { setOffset, setQuery, setCategory, setSeason, reset } = f1Slice.actions;
// Export reducer เพื่อนำไปรวมใน store หลัก
export default f1Slice.reducer;
