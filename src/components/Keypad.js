import React from "react";

function Keypad() {
  // Event handler for the onChange event
  const handleInputChange = (event) => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input
        type="password"
        name="password" // You can change this name if needed
        onChange={handleInputChange} // Attach the event handler to the onChange event
        value="Entering password..."
      />
    </div>
  );
}

export default Keypad;
