import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react"
import { FieldError } from "react-hook-form"

interface BasicInputProps extends InputProps {
  name: string
  label?: string
  error?: FieldError
}

const BasicInputElement: ForwardRefRenderFunction<HTMLInputElement, BasicInputProps> = ({
  name,
  label,
  error = null,
  ...rest
}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name} id={name + label}>{label}</FormLabel>}

      <Input
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {
        !!error &&
        <FormErrorMessage>{error.message}</FormErrorMessage>
      }
    </FormControl>
  )
}

export const BasicInput = forwardRef(BasicInputElement)