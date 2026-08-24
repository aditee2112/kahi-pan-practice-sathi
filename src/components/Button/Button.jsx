import { Button } from "@blueprintjs/core";
import React from "react";

const CustomButton = ({
  buttonName,
  buttonType,
  buttonIntent,
  onButtonClick,
  buttonIcon,
}) => {
  return (
    <Button
      icon={buttonIcon}
      intent={buttonIntent || ""}
      text={buttonName}
      type={buttonType || "text"}
      onClick={onButtonClick}
    />
  );
};
export default CustomButton;
