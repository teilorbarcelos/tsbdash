import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData &&
        <Box mr={4} textAlign="right">
          <Text>Teilor Souza Barcelos</Text>
          <Text color="gray.300" fontSize="small">tsb.developer87@gmail.com</Text>
        </Box>
      }

      <Avatar size="md" name="Teilor Souza Barcelos" src="https://github.com/teilorbarcelos.png" />
    </Flex>
  )
}