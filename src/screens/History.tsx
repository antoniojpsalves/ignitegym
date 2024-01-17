import { useState } from 'react'


import { Heading, VStack, SectionList, Text } from 'native-base'
import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'

export function History() {

  const [exercises, setExercises] = useState([
    {
      title: '17-01-2024',
      data: ['Costas', 'Peito', 'Pernas',]
    }
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de exercícios' />
      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color='gray.200' fontSize='md' mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        ListEmptyComponent={() => (
          <Text color='gray.100' fontSize='md' textAlign='center'>
            Não há excercícios registrados ainda.{'\n'}
            vamos treinar hoje?
          </Text>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}