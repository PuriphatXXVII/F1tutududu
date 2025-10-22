// Component สำหรับหน้า About (หน้าเกี่ยวกับ)
// เป็น Component แบบง่ายๆ ที่ไม่มี state หรือ logic ซับซ้อน
export default function About() {
  return (
    // ใช้ class "prose" จาก Tailwind Typography plugin เพื่อจัดสไตล์เนื้อหาให้อ่านง่ายโดยอัตโนมัติ
    <div className="container mx-auto p-4 prose lg:prose-xl">
      <h1>About this project</h1>
      <p>
        This project is web-application for Formula 1 (F1) datas from 2024 created for CS319 Mini Project 2
        <br />by :
        <br />Krittin Wannalawan 1650707555 
        <br />Pongsakorn Pueanduang 1650704040
        <br />Puriphat Srikamnoi 1650701590 
        <br />using:
      </p>
      <ul>
        <li><b>Build Tool:</b> Vite</li>
        <li><b>Framework:</b> React + TypeScript</li>
        <li><b>Routing:</b> React Router DOM (manage Home, F1 Detail, Favorites, About)</li>
        <li><b>State Management:</b> Redux Toolkit (manage loading, error, pagination, search)</li>
        <li><b>Styling:</b> TailwindCSS + daisyUI (for creating UI Components)</li>
        <li><b>Data Fetching:</b> Axios (for fetching data from external API)</li>
      </ul>

      <h2>Data shown</h2>
      <ul>
        <li><b>Drivers:</b> F1 drivers data with personal information and statistics</li>
        <li><b>Teams:</b> F1 teams data with history and statistics</li>
        <li><b>Races:</b> F1 races data with schedule and results</li>
      </ul>

      <h2>Features</h2>
      <ul>
        <li>Show at least 20 F1 items</li>
        <li>Search system for name, nationality, or team</li>
        <li>Detail page for each item (Dynamic Routing)</li>
        <li>Favorite system that saves in localStorage</li>
        <li>Pagination for large amount of data</li>
      </ul>

      <p>Used API: <a href="https://f1-connect-api.vercel.app/" target="_blank" rel="noreferrer">F1 Connect API</a></p>
    </div>
  );
}