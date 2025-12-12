import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import LiveSensors from "../components/LiveSensors";
import EmotionSelector from "../components/EmotionSelector";
import OLEDControl from "../components/OLEDControl";
import SensorCharts from "../components/SensorCharts";
import { fetchRobotData } from "../services/api";
import type { RobotData } from "../services/api";
import { subscribeRobotData } from "../services/socket";
import { Box, SimpleGrid, Card } from "@chakra-ui/react";

interface Props {
  robotId: string;
  token: string;
  onLogout?: () => void; // 👈 optional
}

const Dashboard: React.FC<Props> = ({ robotId, onLogout, token }) => {
  const [liveData, setLiveData] = useState<Partial<RobotData>>({});
  const [history, setHistory] = useState<RobotData[]>([]);

  useEffect(() => {
    fetchRobotData(robotId).then(setHistory);

    subscribeRobotData(robotId, (data) => {
      setLiveData(data);
      setHistory((prev) => [...prev, data]);
    });
  }, [robotId]);

  return (
    <Box pt="80px">
      <NavBar onLogout={onLogout} />
      <Box p={4} minH="100vh">
        {/* Top row: cards side‑by‑side */}
        <SimpleGrid>
          <Box p={4} shadow="md" borderRadius="lg" bg="transparent" mb={4}>
            <LiveSensors data={liveData} />
            <EmotionSelector robotId={robotId} />
            <OLEDControl robotId={robotId} />
          </Box>
        </SimpleGrid>

        {/* Bottom: chart card full width at end of page */}
        <Box p={4} shadow="md" borderRadius="lg" bg="white" mt="auto">
          <Box maxH="300px" h="900px" w="100%">
            <SensorCharts history={history} />
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
