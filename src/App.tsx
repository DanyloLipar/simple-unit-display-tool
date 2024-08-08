import React, { useEffect, useState } from "react";
import FloorPlan from "./components/FloorPlan/FloorPlan";
import Sidebar from "./components/Sidebar/Sidebar";

import { units as unitsData } from "./constants/units";
import { IUnit } from "./types/unit";

function App() {
  const [units, setUnits] = useState<IUnit[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<IUnit | null>(null);

  useEffect(() => {
    setUnits(unitsData);
  }, []);

  const handleUnit = (unit: any) => {
    setSelectedUnit(unit);
  };

  const logUnitData = () => {
    if (selectedUnit) {
      const { id, x, y, width, height, label, color } = selectedUnit;

      console.log(
        `${selectedUnit?.label}:
        ID: ${id},
        Coordinates: ${x} ${y},
        Size: ${width} x ${height},
        Label: ${label},
        Color: ${color}
      `
      );
    }
  };

  return (
    <div className="flex justify-between h-[100vh]">
      <div className="border-r-[2px] border-blue-500 p-[10px] w-[205px]">
        <Sidebar selectedUnit={selectedUnit} />
        <button
          className="bg-blue-500 rounded-[8px] py-[5px] w-[100%] text-white mt-[12px]"
          onClick={logUnitData}
        >
          Log Unit Data
        </button>
      </div>
      <div className="flex justify-center items-center w-[90%]">
        <FloorPlan units={units} showUnitInfo={handleUnit} />
      </div>
    </div>
  );
}

export default App;
