import { Container, VStack, Text, Box, Heading, SimpleGrid, Image, Icon } from "@chakra-ui/react";
import { FaPaintBrush, FaCode, FaCameraRetro } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="xl">Developer | Designer | Photographer</Text>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTUxNjcxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" mt={4} />
        </Box>
        <Box w="full">
          <Heading as="h2" size="xl" mb={4}>
            Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <ServiceBox icon={FaCode} title="Web Development" description="Building responsive and dynamic websites and applications." />
            <ServiceBox icon={FaPaintBrush} title="Graphic Design" description="Creating visually appealing designs for various digital and print media." />
            <ServiceBox icon={FaCameraRetro} title="Photography" description="Professional photography services for events, products, and portraits." />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

const ServiceBox = ({ icon, title, description }) => {
  return (
    <VStack spacing={3} p={5} boxShadow="md" borderRadius="lg" align="center">
      <Icon as={icon} w={10} h={10} />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
