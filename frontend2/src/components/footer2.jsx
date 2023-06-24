import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="gray.200">
      <Flex align="center" justify="center">
        <Text fontSize="sm" fontWeight="bold">
          CELLEBYOU
        </Text>
      </Flex>
      <Box mt={2}>
        <Flex align="center" justify="center">
          <Text fontSize="xs" color="gray.500">
            © 2023 Team Motja. All rights reserved. Reproduction, distribution,
            or modification without authorization is strictly prohibited.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
