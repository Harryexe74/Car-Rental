const MaintenanceHistory = () => {
    // Sample data
    const maintenanceLogs = [
      { task: "Oil Change", date: "10/12/2024" },
      { task: "Tire Rotation", date: "09/15/2024" },
      { task: "Brake Pads Replacement", date: "08/20/2024" }
    ];
  
    return (
      <div className="bg-transparent p-4 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Maintenance History</h3>
        <ul className="space-y-3">
          {maintenanceLogs.map((log, index) => (
            <li key={index} className="text-gray-700">
              <span className="font-bold">{log.task}</span> - {log.date}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MaintenanceHistory;
  