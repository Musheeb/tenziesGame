import "./Die.css";

export default function Die(props) {
  return (
    <div className="die-face">
      <span className="die-num">{props.number || 1}</span>
    </div>
  );
}
