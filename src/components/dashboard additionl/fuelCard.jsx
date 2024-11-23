const FuelCard = () => {
    // Sample data
    const fuelLevel = 50; // Percentage
    const nextFillUpDistance = 100; // Miles
    const fuelEfficiency = 30; // MPG
    
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Fuel Level</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg">Current Fuel: {fuelLevel}%</p>
            <p className="text-sm text-gray-500">Next fill-up: {nextFillUpDistance} miles</p>
            <p className="text-sm text-gray-500">Fuel Efficiency: {fuelEfficiency} MPG</p>
          </div>
          <div className="text-4xl font-bold text-green-500">{fuelLevel}%</div>
        </div>
      </div>
    );
  };
  
  export default FuelCard;
  