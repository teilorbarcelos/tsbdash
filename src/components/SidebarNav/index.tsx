import { Box, Stack } from "@chakra-ui/react"
import { NavSection, NavSectionProps } from "../Sidebar/NavSection"

interface SidebarProps {
  navSections?: NavSectionProps[]
}

export function SidebarNav({ navSections }: SidebarProps) {
  return (
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
  )
}