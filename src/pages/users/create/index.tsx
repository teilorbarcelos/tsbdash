import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import { BasicInput } from "../../../components/Form/Input"

interface CreateUserData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Digite o nome!'),
  email: yup.string().required('E-mail obrigatório!').email('E-mail inválido!'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 caracteres!'),
  password_confirmation: yup.string().required('Confirme a senha!')
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais!')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserData> = async (data, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('cria user')
  }

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
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading
            size="lg"
            fontWeight="bold"
          >
            Criar usuário
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack
            spacing={["6", "8"]}
          >
            <SimpleGrid
              minChildWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <BasicInput
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />

              <BasicInput
                name="email"
                label="E-mail"
                type="email"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <BasicInput
                name="password"
                label="Senha"
                type="password"
                error={errors.password}
                {...register('password')}
              />

              <BasicInput
                name="password_confirmation"
                label="Confirme a senha"
                type="password"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt={8}
            justify="flex-end"
          >
            <HStack
              spacing={["6", "8"]}
            >
              <Link href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>

              <Button
                type="submit"
                colorScheme="pink"
                isLoading={!!formState.isSubmitting}
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