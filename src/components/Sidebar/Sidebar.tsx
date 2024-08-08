import React from "react";
import { IUnit } from "../../types/unit";

type Props = {
  selectedUnit: IUnit | null;
};

const Sidebar: React.FC<Props> = ({ selectedUnit }) => {
  if (!selectedUnit) {
    return <div>Unit is not selected</div>;
  }

  return (
    <div className="border-2 w-[100%] p-[3px]">
      <h3 className="text-blue-600 font-semibold">{`${selectedUnit.label} Info`}</h3>
      <div className="flex items-center gap-1">
        <h5 className="font-bold">Label:</h5>
        <span>{selectedUnit.label}</span>
      </div>
      <div className="flex items-center gap-1">
        <h5 className="font-bold">Size:</h5>
        <span>
          {selectedUnit.width} x {selectedUnit.height}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <h5 className="font-bold">Coordinates:</h5>
        <span>
          ({selectedUnit.x}, {selectedUnit.y})
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
