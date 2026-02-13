import { ScrollView, Text, View } from "react-native";
import { Image } from 'expo-image';
import * as AC from '@bacons/apple-colors';

export default function InfoRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        flex: 1,
        backgroundColor: AC.systemGroupedBackground,
      }}
    >
      <View style={{ padding: 20 }}>
        {/* Header */}
        <View style={{
          alignItems: 'center',
          marginBottom: 32,
          paddingVertical: 24,
        }}>
          <View style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderCurve: 'continuous',
            backgroundColor: AC.systemBlue,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
          }}>
            <Text style={{
              fontSize: 48,
              fontWeight: '700',
              color: '#FFFFFF',
            }}>
              JJK
            </Text>
          </View>

          <Text style={{
            fontSize: 28,
            fontWeight: '700',
            color: AC.label,
            textAlign: 'center',
            marginBottom: 8,
          }}>
            JJK News
          </Text>

          <Text style={{
            fontSize: 16,
            color: AC.secondaryLabel,
            textAlign: 'center',
          }}>
            Your source for Jujutsu Kaisen updates
          </Text>
        </View>

        {/* About Section */}
        <View style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: 'continuous',
          padding: 20,
          marginBottom: 24,
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '600',
            color: AC.label,
            marginBottom: 12,
          }}>
            About the App
          </Text>

          <Text
            selectable
            style={{
              fontSize: 16,
              color: AC.label,
              lineHeight: 24,
              marginBottom: 16,
            }}
          >
            Stay up to date with the latest news, announcements, and updates from the world of Jujutsu Kaisen. From anime releases to manga updates, merchandise drops to character analysis - we've got it all covered.
          </Text>

          <Text
            selectable
            style={{
              fontSize: 16,
              color: AC.label,
              lineHeight: 24,
            }}
          >
            This app features curated content across multiple categories including anime, manga, movies, merchandise, and in-depth character studies. Get breaking news as it happens and dive deep into the rich world created by Gege Akutami.
          </Text>
        </View>

        {/* Features Section */}
        <View style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: 'continuous',
          padding: 20,
          marginBottom: 24,
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '600',
            color: AC.label,
            marginBottom: 16,
          }}>
            Features
          </Text>

          {[
            'Latest JJK news and updates',
            'Category-based filtering',
            'Detailed article views',
            'Share articles with friends',
            'Beautiful, responsive design',
            'Support for both light and dark modes'
          ].map((feature, index) => (
            <View key={index} style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12,
            }}>
              <View style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: AC.systemBlue,
                marginRight: 12,
              }} />
              <Text style={{
                fontSize: 16,
                color: AC.label,
                flex: 1,
              }}>
                {feature}
              </Text>
            </View>
          ))}
        </View>

        {/* Version Info */}
        <View style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: 'continuous',
          padding: 20,
        }}>
          <Text style={{
            fontSize: 14,
            color: AC.secondaryLabel,
            textAlign: 'center',
            marginBottom: 8,
          }}>
            Version 1.0.0
          </Text>
          <Text style={{
            fontSize: 12,
            color: AC.tertiaryLabel,
            textAlign: 'center',
          }}>
            Built with ❤️ for JJK fans worldwide
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
