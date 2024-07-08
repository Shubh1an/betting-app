import React from "react";
import { TimerSand, Trophy } from "../../assets/svg/Svg";
type Props = {
  currentDiff: any;
};
export const CountDownCard = ({ currentDiff }: Props) => {
  return (
    <div className="p-2 flex justify-between border border-slate-600 rounded-lg m-3">
      <div className="flex flex-col gap-1 items-center">
        <div className="flex items-center gap-2">
          <Trophy color={"#E88246"} /> Peroid
        </div>
        <label>a23asd23q2</label>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="flex items-center gap-2">
          <TimerSand color={"#E88246"} /> Count Down
        </div>
        <label>{currentDiff}</label>
      </div>
    </div>
  );
};
