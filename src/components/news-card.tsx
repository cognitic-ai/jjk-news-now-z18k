import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import * as AC from '@bacons/apple-colors';
import { NewsArticle } from '@/data/news';

interface NewsCardProps {
  article: NewsArticle;
}

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

export default function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Link href={`/article/${article.id}`} asChild>
      <Link.Trigger>
        <Pressable style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: 'continuous',
          overflow: 'hidden',
          marginBottom: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 3,
        }}>
          {/* Article Image */}
          <Image
            source={article.imageUrl}
            style={{
              width: '100%',
              height: 200,
              backgroundColor: AC.systemGray5,
            }}
            contentFit="cover"
          />

          {/* Content Container */}
          <View style={{ padding: 16 }}>
            {/* Category Badge */}
            <View style={{
              backgroundColor: categoryColors[article.category],
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 6,
              borderCurve: 'continuous',
              alignSelf: 'flex-start',
              marginBottom: 8,
            }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 10,
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
                fontSize: 18,
                fontWeight: '600',
                color: AC.label,
                lineHeight: 24,
                marginBottom: 8,
              }}
              numberOfLines={2}
            >
              {article.title}
            </Text>

            {/* Summary */}
            <Text
              selectable
              style={{
                fontSize: 14,
                color: AC.secondaryLabel,
                lineHeight: 20,
                marginBottom: 12,
              }}
              numberOfLines={3}
            >
              {article.summary}
            </Text>

            {/* Meta Information */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: 12,
                color: AC.tertiaryLabel,
                fontWeight: '500',
              }}>
                {article.author}
              </Text>

              <Text style={{
                fontSize: 12,
                color: AC.tertiaryLabel,
                fontVariant: ['tabular-nums'],
              }}>
                {formatDate(article.publishedAt)}
              </Text>
            </View>

            {/* Tags */}
            {article.tags.length > 0 && (
              <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 6,
                marginTop: 12,
              }}>
                {article.tags.slice(0, 3).map((tag, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: AC.systemGray5,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 8,
                      borderCurve: 'continuous',
                    }}
                  >
                    <Text style={{
                      fontSize: 11,
                      color: AC.secondaryLabel,
                      fontWeight: '500',
                    }}>
                      #{tag}
                    </Text>
                  </View>
                ))}
                {article.tags.length > 3 && (
                  <View style={{
                    backgroundColor: AC.systemGray5,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 8,
                    borderCurve: 'continuous',
                  }}>
                    <Text style={{
                      fontSize: 11,
                      color: AC.secondaryLabel,
                      fontWeight: '500',
                    }}>
                      +{article.tags.length - 3} more
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </Pressable>
      </Link.Trigger>
      <Link.Preview />
    </Link>
  );
}