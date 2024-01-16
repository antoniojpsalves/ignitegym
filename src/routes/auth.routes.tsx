import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoures() {
  return (
    <Navigator>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}