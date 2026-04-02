import React, { useState } from "react";
import "./Calendar.css";
import { Newheader } from "../../component/newheader/Newheader";
import { Footer } from "../../component/footer/Footer";

const eventsData = {
  "2027-06-10": ["Tədbir 1", "Görüş"],
  "2027-06-15": ["İmtahan"],
  "2027-06-25": ["Konfrans"],
};


const listData = [
  {
    title: "Dilçilik və ədəbiyyatşünaslığın aktual problemləri",
    date: "12 Aprel 2024",
    place: "Mingəçevir Dövlət Universiteti",
    type: "blue",
  },
  {
    title: "Müasir iqtisadi inkişaf modelləri və sahibkarlıq",
    date: "5–6 İyun 2024",
    place: "Mingəçevir Dövlət Universiteti",
    type: "blue",
  },
  {
    title: "Azərbaycanın enerji siyasəti və beynəlxalq əməkdaşlıq",
    date: "15–16 Oktyabr 2024",
    place: "Mingəçevir Dövlət Universiteti",
    type: "blue",
  },
  {
    title: "İnformasiya texnologiyaları və kibertəhlükəsizlik",
    date: "20–21 Noyabr 2024",
    place: "Mingəçevir Dövlət Universiteti",
    type: "blue",
  },
  {
    title: "Yeni dövrdə təhsil və tədqiqat fəaliyyəti",
    date: "13–14 Dekabr 2024",
    place: "Mingəçevir Dövlət Universiteti",
    type: "yellow",
  },
  {
    title: "Yeni dövrdə təhsil və tədqiqat fəaliyyəti",
    date: "13–14 Dekabr 2024",
    place: "Mingəçevir Dövlət Universiteti",
    type: "yellow",
  },
];

const monthNames = [
  "yanvar","fevral","mart","aprel","may","iyun",
  "iyul","avqust","sentyabr","oktyabr","noyabr","dekabr",
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2027, 5));
  const [view, setView] = useState("calendar");
  const [selectedDay, setSelectedDay] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const changeMonth = (dir) => {
    setCurrentDate(new Date(year, month + dir));
  };

  const formatDate = (day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  return (
   <div className="calendarcontainers">
   <Newheader/>
    <div className="calenadrcontainer">
      <div className="calendartext">
        <h2>Təqvim</h2>
        <p>Bütün elmi tədbirlər bir baxışda</p>
      </div>

      <div className="calendar-container">
     
        <div className="header">
          <button className={view === "calendar" ? "active" : ""} onClick={() => setView("calendar")}>
            Ay Görünüşü
          </button>
          <button className={view === "list" ? "active" : ""} onClick={() => setView("list")}>
            Siyahı
          </button>
        </div>

        <div className="month-header">
          <button onClick={() => changeMonth(-1)}>‹</button>
          <h2>{monthNames[month]} {year}</h2>
          <button onClick={() => changeMonth(1)}>›</button>
        </div>

     
        {view === "calendar" && (
          <>
            <div className="weekdays">
              <div>B.e</div><div>Ç.a</div><div>Ç</div>
              <div>C.a</div><div>C</div><div>Ş</div><div>B</div>
            </div>

            <div className="grid">
              {[...Array(firstDay)].map((_, i) => <div key={i}></div>)}

              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const dateKey = formatDate(day);
                const events = eventsData[dateKey];

                return (
                  <div key={day} className="day" onClick={() => setSelectedDay({ day, events })}>
                    <span>{day}</span>
                    {events && events.map((e, i) => <p key={i} className="event">{e}</p>)}
                  </div>
                );
              })}
            </div>
          </>
        )}

       
        {view === "list" && (
          <div className="list">
            {listData.map((item, index) => (
              <div className="list-card" key={index}>
                
                <div className={`left-line ${item.type}`}></div>

                <div className="list-content">
                  <h3>{item.title}</h3>
                  <p>{item.date} · {item.place}</p>
                </div>

                <div className="status">Keçmiş</div>

              </div>
            ))}
          </div>
        )}

     
        {selectedDay && (
          <div className="modal" onClick={() => setSelectedDay(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-top">
                <span className="badge">BEYNƏLXALQ</span>
                <button className="close" onClick={() => setSelectedDay(null)}>×</button>
              </div>

              <h2 className="modal-title">
                Riyaziyyat, Mühəndislik, Təbiət və Tibb Elmləri üzrə 21-ci Beynəlxalq Avropa Konfransı (MAS)
              </h2>

              <p className="modal-date">2–4 Mart 2026</p>
              <p className="modal-location">Mingəçevir Dövlət Universiteti</p>

              <p className="modal-desc">
                MAS konfransı çərçivəsində riyaziyyat, mühəndislik, təbiət və tibb elmləri sahəsində ən son araşdırmalar təqdim olunacaq.
              </p>

              <div className="modal-buttons">
                <button className="primary">Ətraflı Bax</button>
                <button className="secondary">Qeydiyyat</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default Calendar;