import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchWord, setSearchWord] = useState("");
   const baseURL = "https://my-json-server.typicode.com/IreneMutegi/react-hooks-cc-plantshop/plants"

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );
    setPlants(updatedPlants);
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onAddPlant={handleAddPlant}
        onUpdatePlant={handleUpdatePlant}
        setSearchWord={setSearchWord}
      />
    </div>
  );
}

export default App;