import React from "react";

const DeleteOrderModal = ({ deletingOrder, setDeletingOrder }) => {
  const { product, _id } = deletingOrder;
  const handleDelete = () => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        // console.log("from deleteOrder model", data);
        if (data.deletedCount > 0) {
          setDeletingOrder(null);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete ${product}!
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDelete()}>
              <label
                htmlFor="delete-confirm-modal"
                className="btn btn-xs btn-error"
              >
                Delete
              </label>
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
