import React, { useState, useEffect } from 'react';

const UserFilter = () => {

  const [datas, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);
  const [filter, setFilter] = useState('');
  const handleFilter = (e) => setFilter(e.target.value);
  const filteredItems = datas.filter(data =>
    data.name.toLowerCase().includes(filter.toLowerCase())
  );
  const colorStyle={
    color: 'purple',
		width: filter?'20%':'24%',
	  display: 'inline-block',
	  border: '3px solid blue',
	  margin: '10px'
  };
  return (
    <div>
        <input type="text" value={filter}onChange={handleFilter} placeholder="Filter String..." />
        <hr/>

      {datas ? (
      <div>
        {filteredItems.map(
            user => (
              <div style={colorStyle} key={user.id}>
                <h2>{user.name}</h2>
                <h3>{user.phone}</h3>
                <h5>{user.email}</h5>
                <p>{user.website}</p>
              </div>
            )
          )
        }
      </div>
      ) : (<p>資料載入中...</p>)
      }
    </div>
  );
};

export default UserFilter;