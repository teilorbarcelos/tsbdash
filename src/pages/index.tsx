import { Button, Flex, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { BasicInput } from "../components/Form/Input"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Informe a senha')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
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
            error={errors.email}
            {...register('email')}
          />

          <BasicInput
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex >
  )
}