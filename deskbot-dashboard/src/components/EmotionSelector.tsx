import React, { useState } from "react";
import { Select, Button } from "@chakra-ui/react";
import { sendEmotion } from "../services/api";

interface Props {
  robotId: string;
}

const EmotionSelector: React.FC<Props> = ({ robotId }) => {
  const [emotion, setEmotion] = useState("happy");

  const handleChange = async () => {
    await sendEmotion(robotId, emotion);
    alert("Emotion updated!");
  };

  return (
    <div>
      <Select value={emotion} onChange={(e) => setEmotion(e.target.value)} mb={2}>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="shocked">Shocked</option>
      </Select>
      <Button onClick={handleChange} colorScheme="blue">
        Set Emotion
      </Button>
    </div>
  );
};

export default EmotionSelector;
