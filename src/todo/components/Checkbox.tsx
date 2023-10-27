interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

function Checkbox({ checked, onChange, className = "" }: CheckboxProps) {
  return (
    <label className={`checkbox-container ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
    </label>
  );
}

export default Checkbox;
