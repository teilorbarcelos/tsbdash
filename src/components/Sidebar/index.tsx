import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from "@chakra-ui/react"
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import { SidebarNav } from "../SidebarNav"

export default function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const navSections = [
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

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => { }}
      >
        <DrawerOverlay>
          <DrawerContent
            bg="gray.800"
            p={4}
            onClick={onClose}
          >
            <DrawerCloseButton
              onClick={onClose}
              mt={6}
            />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav
                navSections={navSections}
              />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box
      as="aside"
      w={64}
      mr={8}
    >
      <SidebarNav
        navSections={navSections}
      />
    </Box>
  )
}