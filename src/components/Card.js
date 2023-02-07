import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box boxSize="md" borderRadius="lg" backgroundColor="white">
      <VStack>
        <Image src={imageSrc} alt="image" borderRadius="lg" objectFit="cover"/>
        <Box p="4">
          <Heading as="h1" size="md" color="black" textAlign="left" mb="12px">{title}</Heading>
          <Text fontSize="sm" color="grey" mb="12px">{description}</Text>
          <HStack color="black">
            <Text fontSize="xs">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
