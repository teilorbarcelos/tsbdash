import { Button, Flex, FormControl, Stack } from "@chakra-ui/react"
import { BasicInput } from "../components/Form/Input"

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        direction="column"
      >
        <Stack spacing={4}>

          <BasicInput
            name="email"
            type="email"
            label="E-mail"
          />

          <BasicInput
            name="password"
            type="password"
            label="Senha"
          />
        </Stack>
        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
        >Entrar</Button>
      </Flex>
    </Flex >
  )
}