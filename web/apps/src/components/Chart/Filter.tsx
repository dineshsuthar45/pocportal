import React, { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { CSSProperties } from "react";

const Filter = ({ style }: { style: CSSProperties }) => {
  const options = ["1 month", "15 days", "7 days", "3 days"];
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{ ...style }}
    >
      {options.map((text, index) => (
        <Button
          key={index}
          onClick={() => handleButtonClick(index)}
          sx={{
            color: selectedButton === index ? "#000" : "#467FD8",
            fontSize: "15px",
            fontWeight: 600,
            border: "1px solid var(--light-grey-light, #D9E1E7)",
            borderRadius: `${
              index === 0
                ? "10px 0px 0px 10px"
                : index === options.length - 1
                ? "0px 10px 10px 0px"
                : "0px"
            }`,
          }}
        >
          {text}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Filter;
