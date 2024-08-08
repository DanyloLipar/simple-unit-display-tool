import { IUnit } from "../../types/unit";

type Props = {
  unit: IUnit;
  showUnitInfo: (unit: IUnit) => void;
};

const Unit: React.FC<Props> = ({ unit, showUnitInfo }) => {
  return (
    <rect
      x={unit.x}
      y={unit.y}
      width={unit.width}
      height={unit.height}
      fill={unit.color}
      stroke="black"
      onClick={() => showUnitInfo(unit)}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Unit;
