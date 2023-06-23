import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [xRay, setXray] = useState([]);
  const [ultrasound, setUltraSound] = useState([]);
  const [investigation, setInvestigation] = useState([]);
  const [scan, setScan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://testdrive.kompletecare.com/api/investigations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data;
        setXray(data[0] || []);
        setUltraSound(data[1] || []);
        setInvestigation(data[0]?.investigations || []);
        setScan(data[1]?.investigations || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  
  const handleSaveAndSend = async () => {
    const postData = {
      patient: 3,
      investigations: {
        0: 2,
        1: 3,
        2: 4,
        3: 6,
        4: 8,
        5: 9,
        6: 12,
      },
      ctscan: "Scan needed in the left cerebral hemisphere",
      mri: "Full body MRI",
      developer: "Developer",
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://testdrive.kompletecare.com/api/investigations",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-light rounded w-100 p-5">
      <h1 className="text-primary">Update Patient Medical Record</h1>
      <p className="text-secondary">
        Click the tabs to view and edit patient medical details
      </p>
      <div className="bg-white rounded p-5">
        <p className="text-primary">{xRay.title}</p>

        {investigation && investigation.length > 0 ? (
          <>
            <div className="container row">
              {investigation.map((item) => (
                <label className="col-3 py-3" key={item.id}>
                  <input type="checkbox" name={item.title} /> {item.title}
                </label>
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <hr style={{ background: "#F6F6F6" }} />
        <p className="text-primary">{ultrasound.title}</p>
        {scan && scan.length > 0 ? (
          <>
            <div className="container d-flex w-100 justify-content-between">
              {scan.map((item) => (
                <label key={item.id}>
                  <input type="checkbox" name="remember" /> {item.title}
                </label>
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <hr style={{ background: "#F6F6F6" }} />
        <div className="d-flex w-100 justify-content-between">
          <div className="w-100 me-4">
            <label>CT Scan:</label>
            <select className="form-control">
              <option>Specify</option>
              <option>can needed in the left cerebral hemisphere</option>
            </select>
          </div>
          <div className="w-100 ms-4 mb-4">
            <label>MRI:</label>
            <select className="form-control">
              <option>Specify</option>
              <option>Full body MRI</option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary float-end" onClick={handleSaveAndSend}>
          Save and Send
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
