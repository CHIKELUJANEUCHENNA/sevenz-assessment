import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [xRay, setXray] = useState([]);
  const [ultrasound, setUltraSound] = useState([]);
  const [investigation, setInvestigation] = useState([]);
  const [scan, setScan] = useState([])
  
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
        setXray(data[0]);
        setUltraSound(data[1]);
        setInvestigation(data[0]?.investigations || []);
        setScan(data[1]?.investigations || [])
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

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
            {investigation.map((item) => (
              <div className="checkbox container d-flex" key={item.id}>
                  <label className="col" key={item.id}>
                    <input type="checkbox" name={item.title} /> {item.title}
                  </label>
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}

        <hr style={{ background: "#F6F6F6" }} />
        <p className="text-primary">{ultrasound.title}</p>
          {scan && scan > 0 ? (
            <>
            {scan.map((item) => (
               <div className="checkbox container row py-4" key={item.id}>
               <label className="col">
                 <input type="checkbox" name="remember" /> {item.title}
               </label>
             </div>
            ))}
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
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="w-100 ms-4 mb-4">
            <label>MRI:</label>
            <select className="form-control">
              <option>Specify</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary float-end">
          Save and Send
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
