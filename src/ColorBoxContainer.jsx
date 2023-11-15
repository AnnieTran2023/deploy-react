import ColorBox from "./ColorBox";
import './ColorBoxContainer.css'
const color = ["cdb4db", "ffc8dd", "bde0fe", "ffafcc", "a2d2ff", "ff99c8", "fcf6bd", "d0f4de", "e4c1f9", "dedbd2", "4a5759", "b0c4b1"];
export default function ColorBoxContainer() {
  return (
    <div className="column">
      <div className="row">
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
      </div>
      <div className="row ">
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
      </div>
      <div className="row ">
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
      </div>
      <div className="row ">
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
      </div>
      <div className="row ">
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
        <ColorBox color={color} />
      </div>
    </div>
  )
  };
