import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react"
import { IconType } from "react-icons"
import Link, { LinkProps } from 'next/link'

export interface NavLinkProps extends LinkProps {
  icon: IconType
  title: string
}

export function NavLink({ icon, title, ...rest }: NavLinkProps) {
  return (
    <Link
      {...rest}
      passHref
    >
      <ChakraLink
        display="flex"
        align="center"
      >
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">{title}</Text>
      </ChakraLink>
    </Link>
  )
}