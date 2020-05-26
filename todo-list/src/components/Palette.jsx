import React from "react";
import "./Palette.scss";

// Color 바꾸느
const Color = ({ color, active, onClick }) => {
  return (
    <div
      className={`color ${active && "active"}`} // 클릭 시 active 되며 CSS 적용
      style={{ background: color }} // background 는 color 값.
      onClick={onClick} // onClick 시 onClick 이벤트 발생
    ></div>
  );
};

const Palette = ({ colors, selected, onSelect }) => {
  const colorList = colors.map((color) => (
    <Color
      color={color} // map 으로 칼라 나열
      active={selected === color} // selected 가 color 일 시 active 시켜줌
      onClick={() => onSelect(color)} // onClick 시 color 값 onSelect  됨.
      key={color} // key 값으로 color
    />
  ));
  return <section className="palette">{colorList}</section>;
};
export default Palette;
