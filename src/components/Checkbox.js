export default function Chekbox({ text, ...rest }) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}
