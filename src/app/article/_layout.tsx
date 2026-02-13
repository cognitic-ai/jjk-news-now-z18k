import { Stack } from 'expo-router/stack';
import * as AC from '@bacons/apple-colors';
import { isLiquidGlassAvailable } from 'expo-glass-effect';

const AppleStackPreset = process.env.EXPO_OS !== 'ios'
  ? {}
  : isLiquidGlassAvailable()
  ? {
      // iOS 26 + liquid glass
      headerTransparent: true,
      headerShadowVisible: false,
      headerLargeTitleShadowVisible: false,
      headerLargeStyle: {
        backgroundColor: 'transparent',
      },
      headerTitleStyle: {
        color: AC.label as any,
      },
      headerBlurEffect: 'none' as const,
      headerBackButtonDisplayMode: 'minimal' as const,
    }
  : {
      headerTransparent: true,
      headerShadowVisible: true,
      headerLargeTitleShadowVisible: false,
      headerLargeStyle: {
        backgroundColor: 'transparent',
      },
      headerBlurEffect: 'systemChromeMaterial' as const,
      headerBackButtonDisplayMode: 'default' as const,
    };

export default function ArticleLayout() {
  return (
    <Stack screenOptions={AppleStackPreset}>
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Article',
          headerLargeTitle: false,
        }}
      />
    </Stack>
  );
}