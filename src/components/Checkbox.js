export default function Chekbox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}
