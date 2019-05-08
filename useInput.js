
const useInput = (intialValue) => {
  const [inputValue, setInputValue] = useState(intialValue);

  const onChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  }

  return {
    value: inputValue,
    onChange
  }
};

export default useInput;
