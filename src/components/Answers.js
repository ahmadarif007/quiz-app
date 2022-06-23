import classes from "../styles/Answers.module.css";
import Chekbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Chekbox className={classes.answer} text="test answer" />
    </div>
  );
}
