// Import ไลบรารีที่จำเป็นจาก React และ ReactDOM
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import ไฟล์ CSS หลักสำหรับสไตล์ของทั้งโปรเจกต์
import "./styles/index.css";

// Import ส่วนประกอบที่ใช้ในการจัดการ Routing (การเปลี่ยนหน้า)
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Redux store และ Provider เพื่อให้ทั้งแอปเข้าถึง state ส่วนกลางได้
import { store } from "./store/store";
import { Provider } from "react-redux";

// Import Component หลักและหน้าต่างๆ ของแอปพลิเคชัน
import App from "./App"; // Component โครงหลักของแอป (มี Navbar, Footer)
import Home from "./routes/Home"; // หน้าแรก
import F1Detail from "./routes/MovieDetail"; // หน้ารายละเอียด F1
import Favorites from "./routes/Favorites"; // หน้าที่เก็บรายการโปรด
import About from "./routes/About"; // หน้าเกี่ยวกับ

// สร้าง Router เพื่อกำหนดเส้นทาง (URL) และ Component ที่จะแสดงผลในแต่ละเส้นทาง
const router = createBrowserRouter([
  {
    path: "/", // เส้นทางหลัก
    element: <App />, // เมื่อเข้ามาที่ path นี้ ให้ใช้ App Component เป็นโครง
    children: [
      // path ย่อยๆ ที่จะแสดงผลอยู่ภายใน App Component
      { index: true, element: <Home /> }, // ถ้าเป็น path หลัก (/) ให้แสดงหน้า Home
      { path: ":category/:id", element: <F1Detail /> }, // เส้นทางสำหรับหน้ารายละเอียด F1 แต่ละรายการ :category และ :id คือ parameter
      { path: "favorites", element: <Favorites /> }, // เส้นทางสำหรับหน้ารายการโปรด
      { path: "about", element: <About /> }, // เส้นทางสำหรับหน้าเกี่ยวกับ
    ],
  },
]);

// ทำการ Render แอปพลิเคชัน React ลงใน HTML element ที่มี id='root'
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Provider ทำให้ทุก Component ที่อยู่ข้างในสามารถเข้าถึง Redux store ได้ */}
    <Provider store={store}>
      {/* RouterProvider ทำหน้าที่จัดการการแสดงผล Component ตาม URL ที่กำหนดไว้ใน router */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
