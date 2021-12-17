import { Icon, Link, LinkProps, Text } from "@chakra-ui/react"
import { IconType } from "react-icons"

export interface NavLinkProps extends LinkProps {
  icon: IconType
  title: string
}

export function NavLink({ icon, title, ...rest }: NavLinkProps) {
  return (
    <Link
      display="flex"
      align="center"
      {...rest}
    >
      <Icon as={icon} fontSize={20} />
      <Text ml={4} fontWeight="medium">{title}</Text>
    </Link>
  )
}