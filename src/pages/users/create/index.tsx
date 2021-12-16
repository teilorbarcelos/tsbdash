import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import { BasicInput } from "../../../components/Form/Input";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my={6}
        maxW={1480}
        mx="auto"
        px={6}
      >
        <Sidebar />

        <Box
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={8}
        >
          <Heading
            size="lg"
            fontWeight="bold"
          >
            Criar usuário
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack
            spacing={8}
          >
            <SimpleGrid
              minChildWidth="240px"
              spacing={8}
              w="100%"
            >
              <BasicInput
                name="name"
                label="Nome completo"
              />

              <BasicInput
                name="email"
                label="E-mail"
                type="email"
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing={8}
              w="100%"
            >
              <BasicInput
                name="password"
                label="Senha"
                type="password"
              />

              <BasicInput
                name="password_confirmation"
                label="Confirme a senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt={8}
            justify="flex-end"
          >
            <HStack
              spacing={4}
            >
              <Button
                colorScheme="whiteAlpha"
              >
                Cancelar
              </Button>

              <Button
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}