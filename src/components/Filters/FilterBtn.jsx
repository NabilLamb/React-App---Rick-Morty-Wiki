const FilterBtn = ({ item, name, index, task }) => {
  return (
    <div>
      <style jsx>{`
        input[type="radio"] {
          display: none;
        }
        .x:checked + label {
          background-color: #007bff;
          color: white;
        }
      `}</style>
      <div className="form-check">
        <input
          onClick={() => {
            if (task) {
              task(item);
            }
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
