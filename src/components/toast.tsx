
import React from "react";

const RoomToast = ({ msg }: { msg: string }) => {
  return (
    <div className="toast toast-end">
      <div className="alert alert-error">
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default RoomToast;
