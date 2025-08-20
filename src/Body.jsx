import React, { useState, createContext, useContext } from "react";

const FruitContext = createContext();

const FruitInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search fruits..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

const FruitContainer = ({ search }) => {
  const { fruits } = useContext(FruitContext);

  const fruitStyle = {
    height: "100px",
    width: "100px",
    background: "yellow",
    border: "1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  };

  const filteredFruits = fruits.filter((ele) =>
    ele.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {filteredFruits.map((ele) => (
        <div style={fruitStyle} key={ele}>
          {ele}
        </div>
      ))}
    </div>
  );
};

const Body = ({ fruits }) => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ margin: "10px" }}>
      <FruitInput search={search} setSearch={setSearch} />
      <FruitContext.Provider value={{ fruits }}>
        <FruitContainer search={search} />
      </FruitContext.Provider>
    </div>
  );
};

export default Body;
