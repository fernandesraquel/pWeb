
const SearchInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
  
    function handleChange(event) {
      setDisplayValue(event.target.value);
    }
  
    return (
      <input
        type="search"
        value={displayValue}
        onChange={handleChange}
      />
    );
  };