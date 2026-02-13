import { useEffect, useState } from 'react';
import { ScrollView, Text, View, Share, Pressable } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Image } from 'expo-image';
import * as AC from '@bacons/apple-colors';
import { MaterialIcons } from '@expo/vector-icons';
import { NewsArticle, getNewsById } from '@/data/news';

const categoryColors = {
  anime: AC.systemBlue,
  manga: AC.systemGreen,
  movie: AC.systemPurple,
  merchandise: AC.systemOrange,
  character: AC.systemTeal,
};

const categoryLabels = {
  anime: 'ANIME',
  manga: 'MANGA',
  movie: 'MOVIE',
  merchandise: 'MERCH',
  character: 'CHARACTER',
};

export default function ArticleDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (id) {
      const foundArticle = getNewsById(id);
      setArticle(foundArticle || null);

      if (foundArticle) {
        navigation.setOptions({
          title: foundArticle.title,
          headerRight: () => (
            <Pressable
              onPress={handleShare}
              style={{
                padding: 8,
                marginRight: -8,
              }}
            >
              {process.env.EXPO_OS === 'ios' ? (
                <Image
                  source="sf:square.and.arrow.up"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: AC.systemBlue,
                  }}
                />
              ) : (
                <MaterialIcons name="share" size={20} color={AC.systemBlue} />
              )}
            </Pressable>
          ),
        });
      }
    }
  }, [id, navigation]);

  const handleShare = async () => {
    if (!article) return;

    try {
      await Share.share({
        message: `${article.title}\n\n${article.summary}`,
        title: article.title,
      });
    } catch (error) {
      console.error('Error sharing article:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!article) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AC.systemGroupedBackground,
      }}>
        <Text style={{
          fontSize: 18,
          color: AC.tertiaryLabel,
          textAlign: 'center',
        }}>
          Article not found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        flex: 1,
        backgroundColor: AC.systemGroupedBackground,
      }}
    >
      {/* Hero Image */}
      <Image
        source={article.imageUrl}
        style={{
          width: '100%',
          height: 250,
          backgroundColor: AC.systemGray5,
        }}
        contentFit="cover"
      />

      {/* Content Container */}
      <View style={{
        backgroundColor: AC.systemGroupedBackground,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderCurve: 'continuous',
        paddingTop: 24,
        paddingHorizontal: 20,
        paddingBottom: 40,
      }}>
        {/* Category Badge */}
        <View style={{
          backgroundColor: categoryColors[article.category],
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 8,
          borderCurve: 'continuous',
          alignSelf: 'flex-start',
          marginBottom: 16,
        }}>
          <Text style={{
            color: '#FFFFFF',
            fontSize: 12,
            fontWeight: '600',
            letterSpacing: 0.5,
          }}>
            {categoryLabels[article.category]}
          </Text>
        </View>

        {/* Title */}
        <Text
          selectable
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: AC.label,
            lineHeight: 36,
            marginBottom: 16,
          }}
        >
          {article.title}
        </Text>

        {/* Meta Information */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          paddingVertical: 16,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: AC.separator,
        }}>
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              color: AC.label,
              marginBottom: 4,
            }}>
              {article.author}
            </Text>
            <Text style={{
              fontSize: 12,
              color: AC.secondaryLabel,
              fontVariant: ['tabular-nums'],
            }}>
              {formatDate(article.publishedAt)}
            </Text>
          </View>
        </View>

        {/* Summary */}
        <Text
          selectable
          style={{
            fontSize: 18,
            color: AC.secondaryLabel,
            lineHeight: 26,
            marginBottom: 24,
            fontStyle: 'italic',
          }}
        >
          {article.summary}
        </Text>

        {/* Content */}
        <Text
          selectable
          style={{
            fontSize: 16,
            color: AC.label,
            lineHeight: 24,
            marginBottom: 32,
          }}
        >
          {article.content}
        </Text>

        {/* Tags */}
        {article.tags.length > 0 && (
          <View style={{ marginTop: 16 }}>
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              color: AC.label,
              marginBottom: 12,
            }}>
              Tags
            </Text>
            <View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 8,
            }}>
              {article.tags.map((tag, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: AC.secondarySystemGroupedBackground,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 12,
                    borderCurve: 'continuous',
                  }}
                >
                  <Text style={{
                    fontSize: 13,
                    color: AC.secondaryLabel,
                    fontWeight: '500',
                  }}>
                    #{tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}