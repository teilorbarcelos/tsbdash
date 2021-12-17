import { Box, Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { NavSection, NavSectionProps } from "./NavSection"

interface SidebarProps {
  navSections?: NavSectionProps[]
}

export default function Sidebar({
  navSections = [
    {
      title: "Geral",
      navLinks: [
        {
          title: "Dashboard",
          icon: RiDashboardLine,
          href: "/dashboard"
        },
        {
          title: "Usuários",
          icon: RiContactsLine,
          href: "/users"
        },
      ]
    },
    {
      title: "AUTOMAÇÃO",
      navLinks: [
        {
          title: "Formulários",
          icon: RiInputMethodLine,
          href: "/forms"
        },
        {
          title: "Automação",
          icon: RiGitMergeLine,
          href: "/automation"
        },
      ]
    },
  ]
}: SidebarProps) {
  return (
    <Box
      as="aside"
      w={64}
      mr={8}
    >
      <Stack
        spacing={12}
        align="flex-start"
      >
        {
          navSections.map((navSection, index) => {
            return (
              <Box key={index}>
                <NavSection
                  title={navSection.title}
                  navLinks={navSection.navLinks}
                />
              </Box>
            )
          })
        }
      </Stack>
    </Box>
  )
}