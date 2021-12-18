import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react"

interface Props extends InputProps {
  name: string
  label?: string
}

export default function BasicInput({ name, label, ...rest }: Props) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Input
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