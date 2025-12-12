import React from "react";
import { Box, Text, SimpleGrid, Stack, Heading, HStack} from "@chakra-ui/react";
import type{ RobotData } from "../services/api";

interface Props {
  data: Partial<RobotData>;
}

const LiveSensors: React.FC<Props> = ({ data }) => {
  return (
       <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={4}>
      {/* Temperature */}
      <Box
        p={4}
        borderRadius="xl"
        boxShadow="md"
        bgGradient="linear(to-r, purple.500, purple.400)"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Stack spacing={2}>
          <HStack spacing={2}>
            {/* <Icon as={FiThermometer} boxSize={5} /> */}
            <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
              Temperature
            </Text>
          </HStack>
          <Heading size="lg">
            {data.temp ?? "-"}
            <Text as="span" fontSize="sm" ml={1}>
              °C
            </Text>
          </Heading>
          <Text fontSize="xs" opacity={0.9}>
            Live sensor reading
          </Text>
        </Stack>
      </Box>

      {/* Humidity */}
      <Box
        p={4}
        borderRadius="xl"
        boxShadow="md"
        bgGradient="linear(to-r, teal.500, teal.400)"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Stack spacing={2}>
          <HStack spacing={2}>
            {/* <Icon as={FiDroplet} boxSize={5} /> */}
            <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
              Humidity
            </Text>
          </HStack>
          <Heading size="lg">
            {data.humidity ?? "-"}
            <Text as="span" fontSize="sm" ml={1}>
              %
            </Text>
          </Heading>
          <Text fontSize="xs" opacity={0.9}>
            Current humidity level
          </Text>
        </Stack>
      </Box>

      {/* Light */}
      <Box
        p={4}
        borderRadius="xl"
        boxShadow="md"
        bgGradient="linear(to-r, green.500, green.400)"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Stack spacing={2}>
          <HStack spacing={2}>
            {/* <Icon as={FiSun} boxSize={5} /> */}
            <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
              Light
            </Text>
          </HStack>
          <Heading size="lg">{data.ldr ?? "-"}</Heading>
          <Text fontSize="xs" opacity={0.9}>
            Current light intensity
          </Text>
        </Stack>
      </Box>

      {/* Moisture */}
      <Box
        p={4}
        borderRadius="xl"
        boxShadow="md"
        bgGradient="linear(to-r, blue.500, blue.400)"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Stack spacing={2}>
          <HStack spacing={2}>
            <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
              Moisture
            </Text>
          </HStack>
          <Heading size="lg">{data.moisture ?? "-"}</Heading>
          <Text fontSize="xs" opacity={0.9}>
            Soil moisture level
          </Text>
        </Stack>
      </Box>

      {/* Motion */}
      <Box
        p={4}
        borderRadius="xl"
        boxShadow="md"
        bgGradient="linear(to-r, orange.500, orange.400)"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Stack spacing={2}>
          <HStack spacing={2}>
            {/* <Icon as={FiActivity} boxSize={5} /> */}
            <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
              Motion
            </Text>
          </HStack>
          <Text fontSize="sm" fontWeight="semibold">
            x={data.accel?.x ?? "-"}, y={data.accel?.y ?? "-"}, z={data.accel?.z ?? "-"}
          </Text>
          <Text fontSize="xs" opacity={0.9}>
            Accelerometer axes
          </Text>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default LiveSensors;
