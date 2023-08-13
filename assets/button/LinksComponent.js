import React, { useState, useEffect } from 'react';

const LinksComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await fetch('/api/bouton/show/setting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          }
          );
      const data = await response.json();
      setData(data);
    } catch (error) {
      // Handle error here (e.g., show an error message)
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataFromDatabase();
    }
      , 9000);
    return () => clearInterval(interval);

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const getStatusClassName = (id) => {
    const status = data.find(item => item.id === id)?.OnLine;
    console.log(data);
    if (status === '0') {
      return 'th-btn_status-on-line';
    } else if (status === '1') {
      return 'th-btn_status-on-Busy';
    } else if (status === '2') {
      return 'th-btn_status-off-line';
    }
    // Handle unknown status or return a default class
    return 'th-btn_status-on-line';
  };

  return (
    <div>
      <a href="#" className={getStatusClassName(88)}>
        <i className="fa-solid fa-phone"></i>
      </a>

      <a href="#" className={getStatusClassName(89)}>
        <i className="fa-regular fa-envelope"></i>
      </a>

      <a href="#" className={getStatusClassName(90)}>
        <i className="fa-brands fa-rocketchat"></i>
      </a>
    </div>
  );
};

export default LinksComponent;