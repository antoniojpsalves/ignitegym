import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import BackgroundImg from '@assets/background.png'

import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import { useForm, Controller } from 'react-hook-form'

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

export function SignUp() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoBack() {
    return navigation.goBack()
  }

  function handleSignUp({
    name,
    email,
    password,
    password_confirm
  }: FormDataProps) {
    console.log({ name, email, password, password_confirm })
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />
        <Center my={24}>
          <LogoSvg />
          <Text color='gray.100' fontSize='sm'>Treine sua mente e corpo</Text>
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name='name'
            rules={{
              required: 'O campo de nome deve ser informado.'
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Nome'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='email'
            rules={{
              required: 'O campo de email é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='E-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Senha'
                secureTextEntry
                keyboardType='default'
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password_confirm'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Confirme a senha'
                secureTextEntry
                keyboardType='default'
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
              />
            )}
          />

          <Button title='Criar e acessar' onPress={handleSubmit(handleSignUp)} />
        </Center>


        <Button
          title='Voltar para o login'
          variant='outline'
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}