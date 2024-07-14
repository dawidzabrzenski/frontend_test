import { useState } from "react";
function FunctionButtonList({ dispatch, data, setData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleDeleteItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="function-button-list">
      <h3 className="block-title">BLOK DRUGI</h3>
      <div className="function-button-list__buttons">
        <button
          className="function-button-list__buttons__button"
          onClick={() => dispatch({ type: "replaceAll" })}
        >
          ZASTĄP
        </button>
        <button
          className="function-button-list__buttons__button"
          onClick={() => dispatch({ type: "insertValue" })}
        >
          DOKLEJ
        </button>
        <button
          className="function-button-list__buttons__button"
          onClick={() => handleOpenModal()}
        >
          EDYTUJ
        </button>
      </div>
      {isOpen && (
        <div id="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2 className="modal-content-heading">Edytuj dane</h2>
              <ul className="modal-content-subheading">
                {data.map((item) => (
                  <li key={item.id}>
                    <span>
                      {item.id} : {item.text}
                    </span>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="close-button modal-accept-button"
                onClick={() => handleCloseModal()}
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FunctionButtonList;
