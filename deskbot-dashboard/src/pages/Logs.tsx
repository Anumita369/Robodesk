import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import type { RobotData } from "../services/api";

interface Props {
  history: RobotData[];
}

const Logs: React.FC<Props> = ({ history }) => {
  return (
    <Box overflowX="auto" p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Temp</Th>
            <Th>Humidity</Th>
            <Th>Light</Th>
            <Th>Moisture</Th>
            <Th>Motion (X,Y,Z)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {history.map((item, idx) => (
            <Tr key={idx}>
              <Td>{new Date(item.timestamp).toLocaleString()}</Td>
              <Td>{item.temp}</Td>
              <Td>{item.humidity}</Td>
              <Td>{item.ldr}</Td>
              <Td>{item.moisture}</Td>
              <Td>{`${item.accel.x}, ${item.accel.y}, ${item.accel.z}`}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Logs;
