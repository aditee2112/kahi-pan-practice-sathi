import { Button } from "@blueprintjs/core";
import React from "react";

const CustomButton = ({ buttonName, buttonType, buttonIntent }) => {
  return (
    <Button
      endIcon="arrow-right"
      intent={buttonIntent || ""}
      text={buttonName}
      type={buttonType || "text"}
    />
  );
};
export default CustomButton;
