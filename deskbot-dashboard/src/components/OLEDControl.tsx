import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { sendOLEDText } from "../services/api";

interface Props {
  robotId: string;
}

const OLEDControl: React.FC<Props> = ({ robotId }) => {
  const [text, setText] = useState("");

  const handleSend = async () => {
    await sendOLEDText(robotId, text);
    setText("");
  };

  return (
    <div>
      <Input
        placeholder="Enter text for OLED"
        value={text}
        onChange={(e) => setText(e.target.value)}
        mb={2}
      />
      <Button onClick={handleSend} colorScheme="green">
        Send
      </Button>
    </div>
  );
};

export default OLEDControl;
