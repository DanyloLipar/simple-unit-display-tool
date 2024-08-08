import React from "react";
import { IUnit } from "../../types/unit";
import Unit from "../Unit/Unit";

type Props = {
  units: any;
  showUnitInfo: (unit: IUnit) => void;
};

const FloorPlan: React.FC<Props> = ({ units, showUnitInfo }) => {
  return (
    <svg width="700" height="400" stroke="#000" strokeWidth={2}>
      <rect x="0" y="0" width="100%" height="100%" fill="#d2cbd5" />
      {units.map((unit: IUnit) => (
        <Unit key={unit.id} unit={unit} showUnitInfo={showUnitInfo} />
      ))}
    </svg>
  );
};

export default FloorPlan;
