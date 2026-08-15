import "./Input.css";

function Input({ icon, type, placeholder, value, onChange }) {
  return (
    <div className="input-custom">
      <span className="input-icon">{icon}</span>
      <input
        type={type}
        className="form-control border-0 shadow-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;