import React, { useState, useEffect } from 'react';
import './Employee.css';

const Employee = () => {
  const [resultData, setResultData] = useState([]);
  const [searchMyData, setSearchMyData] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  
  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((res) => res.json())
      .then((data) => {
        setResultData(data);
      });
  }, []);

  const searchData = (e) => {
    setSearchMyData(e.target.value.toLowerCase());
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  return (
    <div className='employee'>
      <h1>Axtaris</h1>

      <input type='text' placeholder='Search...' onChange={searchData} />

      <select onChange={handleDepartmentChange}>
        <option value=''>All Departments</option>
        <option value='Management'>Management</option>
        <option value='Recruitment'>Recruitment</option>
        <option value='Security'>Security</option>
      </select>

      {resultData
        .filter((item) =>
          item.name.toLowerCase().includes(searchMyData) &&
          (selectedDepartment === '' || item.department === selectedDepartment)
        )
        .map((e, c) => (
          <div className='div' key={c}>
            <p>
              {c + 1}.{e.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Employee;