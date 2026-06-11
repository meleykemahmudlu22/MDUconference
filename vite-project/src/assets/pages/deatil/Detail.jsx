import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail.css";
import { Newheader } from "../../component/newheader/Newheader";

function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    axios.get(`https://6a1ad52fbc2f94475492b2ec.mockapi.io/conference/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!item) return <p>Yüklənir...</p>;

  return (
    <div>
      <Newheader/>

      <div className="detailcontainer">
        <div className="detailbutton">
          <div className="dropdown">
            <button className="dropbtn">Konfrans</button>
            <div className="dropdown-content">
              <p onClick={() => setSelectedSection("conference")}>Haqqında</p>
              <p onClick={() => setSelectedSection("dates")}>Mühüm tarixlər</p>
              <p onClick={() => setSelectedSection("topics")}>Mövzular</p>
              <p onClick={() => setSelectedSection("organizers")}>Təşkilatçılar</p>
            </div>
          </div>
          <button onClick={() => setSelectedSection("register")}>Qeydiyyat</button>
          <button onClick={() => setSelectedSection("location")}>Yer</button>
          <button onClick={() => setSelectedSection("contact")}>Əlaqə</button>
        </div>

        {/* Content hissəsi */}
        {selectedSection === "conference" && (
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        )}

        {selectedSection === "dates" && (
          <div>
            <p>{item.date}</p>
          </div>
        )}

        {selectedSection === "topics" && (
          <div>
            {item.topics?.map((topic) => (
              <div key={topic.id}>
                <p>{topic.title}</p>
              </div>
            ))}
          </div>
        )}

        {selectedSection === "organizers" && (
          <div>
            {item.organizers?.map((org, i) => (
              <p key={i}>{org}</p>
            ))}
          </div>
        )}

        {selectedSection === "register" && (
          <div>
            <p>Qeydiyyat məlumatı burda olacaq...</p>
          </div>
        )}

        {selectedSection === "location" && (
          <div>
            <p>{item.location}</p>
          </div>
        )}

        {selectedSection === "contact" && (
          <div>
            <p>{item.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
