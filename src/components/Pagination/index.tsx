import { Box, Stack, Text } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
  totalNumberRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const nextsCount = 1

function generatePagesArray(from: number, to: number) {
  return [... new Array(to - from)].map((_, index) => {
    return from + index + 1
  })
    .filter(page => page > 0)
}

export function Pagination({
  totalNumberRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalNumberRegisters / registersPerPage)

  const previousPages = currentPage > 1 ?
    generatePagesArray(currentPage - 1 - nextsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage ?
    generatePagesArray(currentPage, Math.min(currentPage + nextsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      spacing={6}
      mt={8}
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing={2}
      >
        {
          currentPage > (1 + nextsCount) &&
          <>
            <PaginationItem page={1} />

            {
              currentPage > (2 + nextsCount) &&
              <Text
                color="gray.300"
                width={8}
                textAlign="center"
              >...</Text>
            }
          </>
        }

        {
          previousPages.length > 0 &&
          previousPages.map(page => {
            return <PaginationItem key={page} page={page} />
          })
        }

        <PaginationItem page={currentPage} isCurrent />

        {
          nextPages.length > 0 &&
          nextPages.map(page => {
            return <PaginationItem key={page} page={page} />
          })
        }

        {
          (currentPage + nextsCount) < lastPage &&
          <>
            {
              (currentPage + 1 + nextsCount) < lastPage &&
              <Text
                color="gray.300"
                width={8}
                textAlign="center"
              >...</Text>
            }
            <PaginationItem page={lastPage} />
          </>
        }
      </Stack>
    </Stack>
  )
}