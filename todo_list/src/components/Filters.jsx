const filterNames = ['all', 'active', 'completed'];
function Filters({ current, onChange }) {
  return (
    <div className="filters">
      {filterNames.map((name) => (
        <button
          key={name}
          className={current === name ? 'active' : ''}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
export default Filters;
