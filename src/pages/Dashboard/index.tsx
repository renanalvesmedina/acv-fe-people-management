import { useEffect, useState } from 'react'
import { Box, Flex, Heading, Text, Divider, Button } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { DoughnutChart } from '../../components/DoughnutChart'
import { Link as ReachLink } from 'react-router-dom'
import { api } from '../../services/api'
import { GetCountEmployeeResult } from '../../types/GetCountEmployeeResult'

export function Dashboard() {
  const [enabledEmployeers, setEnabledEmployeers] = useState(0)
  const [disabledEmployeers, setDisabledEmployeers] = useState(0)
  const [totalEmployeers, setTotalEmployeers] = useState(0)

  useEffect(() => {
    api.get('/Employees/count').then((response) => {
      const countEmployees: GetCountEmployeeResult = response.data
      setEnabledEmployeers(countEmployees.enabledEmployees)
      setDisabledEmployeers(countEmployees.disabledEmployees)
      setTotalEmployeers(countEmployees.totalEmployees)
    })
  }, [])

  return (
    <>
      <Flex
        width="100%"
        borderBottomStyle="solid"
        borderBottomWidth={1}
        borderColor="gray.100"
        bg="white">
        <Header />
      </Flex>

      <Flex direction="row" bg="gray.50" width="100%">
        <Flex>
          <Sidebar />
        </Flex>

        <Flex direction="column" bg="gray.50" width="100%">
          <Flex>
            <Box flex="1" bg="white" p="8" display="flex" alignItems="center">
              <Heading size="xl" fontWeight="normal" fontFamily="Roboto">
                Dashboard
              </Heading>
            </Box>
          </Flex>

          <Flex m="4">
            <Box
              borderRadius={8}
              bg="white"
              boxShadow="sm"
              p="8"
              ml="4"
              w="500px">
              <Heading
                as="h2"
                size="md"
                color="gray.800"
                fontFamily="Roboto"
                mb={6}>
                Gestão de pessoas
              </Heading>
              <DoughnutChart
                numberOfEmployeers={totalEmployeers}
                numberOfInactiveEmployeers={disabledEmployeers}
              />
            </Box>

            <Box
              borderRadius={8}
              bg="white"
              boxShadow="sm"
              p="8"
              ml="4"
              w="500px">
              <Text fontSize="lg" mb="4">
                Total de Colaboradores
              </Text>
              <Heading as="h1" color="gray.800" mb="4" fontFamily="Roboto">
                {totalEmployeers}
              </Heading>
              <Text fontSize="lg" color="gray.800" my="6">
                {enabledEmployeers} Ativos e {disabledEmployeers} Inativos
              </Text>
              <Divider m="3px" borderColor="gray.100" />
              <Button
                as={ReachLink}
                to={`/collaborator`}
                colorScheme="gray"
                fontSize="lg"
                mt="8"
                size="lg"
                variant="outline"
                isFullWidth
                style={{
                  borderRadius: '50px',
                  fontFamily: 'Roboto',
                  fontSize: '18px',
                  fontWeight: 'normal',
                }}>
                Ver gestão de pessoas
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
