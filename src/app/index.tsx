import { useState, useMemo } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import * as AC from '@bacons/apple-colors';
import NewsCard from '@/components/news-card';
import { mockJJKNews, getNewsByCategory, NewsArticle } from '@/data/news';

const categoryFilters = [
  { key: 'all', label: 'All' },
  { key: 'anime', label: 'Anime' },
  { key: 'manga', label: 'Manga' },
  { key: 'movie', label: 'Movie' },
  { key: 'merchandise', label: 'Merch' },
  { key: 'character', label: 'Character' },
] as const;

export default function IndexRoute() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredNews = useMemo(() => {
    if (selectedCategory === 'all') {
      return mockJJKNews.sort((a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }
    return getNewsByCategory(selectedCategory as NewsArticle['category']);
  }, [selectedCategory]);

  return (
    <View style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}>
      {/* Header */}
      <View style={{
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
        backgroundColor: AC.systemGroupedBackground,
      }}>
        <Text style={{
          fontSize: 32,
          fontWeight: '700',
          color: AC.label,
          marginBottom: 8,
        }}>
          JJK News
        </Text>
        <Text style={{
          fontSize: 16,
          color: AC.secondaryLabel,
          marginBottom: 16,
        }}>
          Latest updates from the world of Jujutsu Kaisen
        </Text>
      </View>

      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
        }}
        style={{ marginBottom: 16 }}
      >
        {categoryFilters.map((filter) => (
          <Pressable
            key={filter.key}
            onPress={() => setSelectedCategory(filter.key)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              borderCurve: 'continuous',
              backgroundColor: selectedCategory === filter.key
                ? AC.systemBlue
                : AC.secondarySystemGroupedBackground,
            }}
          >
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              color: selectedCategory === filter.key
                ? '#FFFFFF'
                : AC.label,
            }}>
              {filter.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* News Feed */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 16,
        }}
      >
        {filteredNews.length > 0 ? (
          filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))
        ) : (
          <View style={{
            padding: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{
              fontSize: 18,
              color: AC.tertiaryLabel,
              textAlign: 'center',
            }}>
              No articles found for this category
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
