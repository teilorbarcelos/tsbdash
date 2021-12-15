import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react"

interface Props extends InputProps {
  name: string
  id?: string
  label?: string
}

export function BasicInput({ name, id = name, label, ...rest }: Props) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <Input
        id={id}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}