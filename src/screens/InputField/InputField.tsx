import React from "react";
import "./InputField.scss";

export const InputField = (): JSX.Element => {
  return (
    <div className="input-field" data-model-id="668:7692">
      <div className="description">Label</div>

      <input className="input" placeholder="Placeholder" type="text" />
    </div>
  );
};
