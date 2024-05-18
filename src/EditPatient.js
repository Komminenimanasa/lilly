import React, { useState, useEffect } from 'react'
import axios from 'axios'


const EditPatient = ({ patientId, onClose, onUpdate}) => {
  const [patientData, setPatientData] = useState({});


  useEffect(() => {
    //get
    const fetchPatientData = async () => {
      try {
        const response = await axios.get('https://backendhospital-ji3g.onrender.com/patients/${patientId}');
        setPatientData(response.data);        
      } catch (error){
        console.error('Error fetching patient data for editing:', error);
      }
    };

    fetchPatientData();
  },[patientId]);

  const handleUpdate = async () => {
    try {
      await axios.put('https://backendhospital-ji3g.onrender.com/patients/${patientId}',patientData);
      onClose();
      onUpdate();      
    } catch (error) {
      console.error('Error updating patient:',error);
    }
  };

  const handleChange = (e) => {
    const { name, value} = e.target;
    setPatientData({...patientData, [name]:value});
  };  

  return (
    <div>
      <h1>Edit Patient</h1>

      <label>Name:</label>
      <input type="text" name="name" value={patientData.name || ''} onChange={handleChange} />

      <label>Weight: </label>
      <input type="text" name="weight" value={patientData.weight || ''} onChange={handleChange} />

      <label>Gender: </label>
      <input type="text" name="gender" value={patientData.gender || ''} onChange={handleChange} />

      <label>Age:</label>
      <input type="text" name="age" value={patientData.age || ''} onChange={handleChange} />

      <label>Disease: </label>
      <input type="text" name="disease" value={patientData.disease || ''} onChange={handleChange} />

      {/* <label>DoctorId: </label>
      <input type="text" name="doctorId" value={patientData.doctorId || ''} onChange={handleChange} /> */}

      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancle</button>
      
    </div>
  )
}

export default EditPatient