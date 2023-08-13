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
      , 3000);
    return () => clearInterval(interval);

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const getStatusClassName = (id) => {
    const status = data.find(item => item.id === id)?.OnLine;
    if (status === '0') {
      return 'on-line';
    } else if (status === '1') {
      return 'on-Busy';
    } else if (status === '2') {
      return 'off-line';
    }
    // Handle unknown status or return a default class
    return 'on-line';
  };

  return (
    <>
      <div className="home-btn">
        <div>
          {data[2].telephone}
        </div>
        <div>
          <a href="#" className={`th-btn ${getStatusClassName(90)}`}>
            <i className="fa-solid fa-phone"></i> Telephone
          </a>
        </div>
      </div>
      <div className="home-btn">
        <div>
          <div>
            {data[2].email}
          </div>
          <div>
            <a href="#" className={`th-btn ${getStatusClassName(89)}`}>
              <i className="fa-regular fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="home-btn">
        <div>
          <div>
            {data[2].chat}
          </div>
          <div>
            <a href="#" className={`th-btn ${getStatusClassName(88)}`}>
              <i className="fa-regular fa-envelope"></i> Chat
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default LinksComponent;