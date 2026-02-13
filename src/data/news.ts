export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  category: 'anime' | 'manga' | 'movie' | 'merchandise' | 'character';
  tags: string[];
}

export const mockJJKNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Jujutsu Kaisen Season 3 Officially Announced',
    summary: 'Studio MAPPA confirms production of the highly anticipated third season covering the Culling Game arc.',
    content: `Studio MAPPA has officially announced the production of Jujutsu Kaisen Season 3, much to the delight of fans worldwide. The upcoming season will adapt the Culling Game arc from Gege Akutami's manga.

The announcement came during a special event in Tokyo, where series producer Yoshihiro Oyabu confirmed that the team is already in pre-production. "We're committed to delivering the same high-quality animation that fans have come to expect from the series," Oyabu stated.

The Culling Game arc is considered one of the most intense and complex storylines in the manga, featuring multiple new characters and intricate battle sequences. Fans can expect to see the return of Yuji Itadori, Megumi Fushiguro, and Nobara Kugisaki as they navigate this dangerous new challenge.

While no official release date has been announced, industry insiders suggest that Season 3 may premiere in late 2024 or early 2025. The production team emphasized their commitment to maintaining the exceptional animation quality that made the previous seasons so successful.`,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    author: 'Anime News Network',
    publishedAt: '2024-02-10T10:30:00Z',
    category: 'anime',
    tags: ['season 3', 'MAPPA', 'culling game', 'announcement']
  },
  {
    id: '2',
    title: 'New Sukuna Figure Breaks Pre-Order Records',
    summary: 'The latest King of Curses collectible figure has become the fastest-selling JJK merchandise in history.',
    content: `The newly announced Ryomen Sukuna figure by Good Smile Company has shattered pre-order records, becoming the fastest-selling Jujutsu Kaisen merchandise item in history. The figure sold out within just 6 hours of its announcement.

The 1/7 scale figure showcases Sukuna in his true form, complete with intricate details including his iconic tattoos and malevolent expression. Standing at 11 inches tall, the figure features multiple interchangeable parts and a detailed base depicting the Malevolent Shrine domain.

"The response has been absolutely overwhelming," said Good Smile Company representative Takeshi Yamamoto. "We've never seen pre-orders move this quickly for any of our previous releases."

The figure is priced at ¥28,000 (approximately $190 USD) and is scheduled to ship in Q3 2024. Due to the unprecedented demand, Good Smile Company is considering a second production run, though no official confirmation has been made.

Collectors who missed the initial pre-order window are advised to check authorized retailers regularly, as some may receive additional allocation in the coming weeks.`,
    imageUrl: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=800&h=600&fit=crop',
    author: 'Otaku News',
    publishedAt: '2024-02-09T14:15:00Z',
    category: 'merchandise',
    tags: ['sukuna', 'figure', 'good smile company', 'pre-order']
  },
  {
    id: '3',
    title: 'Gege Akutami Hints at Series Conclusion',
    summary: 'The manga creator suggests the Jujutsu Kaisen story may be approaching its final chapters.',
    content: `In a recent interview with Weekly Shonen Jump, Jujutsu Kaisen creator Gege Akutami hinted that the beloved manga series may be approaching its conclusion. While not providing specific details, Akutami suggested that the story has entered its final phase.

"I always had a clear vision of how I wanted the story to end," Akutami explained. "We're now moving toward that conclusion, though I want to ensure every character gets the resolution they deserve."

The statement has sparked intense discussion among the fanbase, with many speculating about how the various ongoing plot threads will be resolved. The manga is currently in the middle of the Culling Game arc, which has introduced numerous new characters and complex storylines.

Akutami also addressed concerns about the series' pacing, acknowledging that recent chapters have been more dense with information. "I'm trying to balance giving readers the content they want while moving toward a satisfying conclusion," the creator noted.

Industry analysts suggest that if the manga does conclude within the next year or two, it will likely rank among the most successful shonen series of the 2020s, having sold over 80 million copies worldwide.`,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
    author: 'Manga Today',
    publishedAt: '2024-02-08T09:45:00Z',
    category: 'manga',
    tags: ['gege akutami', 'ending', 'interview', 'conclusion']
  },
  {
    id: '4',
    title: 'Hollywood Adaptation Rights Acquired',
    summary: 'Major studio secures rights to develop a live-action Jujutsu Kaisen film for Western audiences.',
    content: `A major Hollywood studio has acquired the rights to develop a live-action adaptation of Jujutsu Kaisen, marking another milestone for the franchise's global expansion. While the studio's identity remains confidential due to ongoing negotiations, sources close to the deal confirm that pre-production is already underway.

The adaptation will reportedly focus on the Tokyo Jujutsu High storyline, introducing Western audiences to Yuji Itadori and his journey as a jujutsu sorcerer. The project aims to capture the essence of the original while adapting it for a broader international audience.

"We're committed to honoring the source material while creating something that stands on its own," stated an anonymous studio executive. "The goal is to bring the world of jujutsu sorcery to life in a way that both fans and newcomers can appreciate."

Casting has not yet begun, though industry insiders suggest the studio is prioritizing actors who can perform their own action sequences, given the series' emphasis on physical combat and martial arts.

The project joins a growing list of successful anime adaptations in Western cinema, following in the footsteps of recent successes in the genre. A release window has not been announced, but production is expected to begin in 2025.`,
    imageUrl: 'https://images.unsplash.com/photo-1489599858223-6a8a6d2c20bb?w=800&h=600&fit=crop',
    author: 'Entertainment Weekly',
    publishedAt: '2024-02-07T16:20:00Z',
    category: 'movie',
    tags: ['hollywood', 'live-action', 'adaptation', 'film']
  },
  {
    id: '5',
    title: 'Gojo Satoru Character Analysis: The Strongest Sorcerer',
    summary: 'A deep dive into the character development and abilities of the Six Eyes wielder.',
    content: `Satoru Gojo stands as one of the most compelling characters in Jujutsu Kaisen, representing both the pinnacle of jujutsu sorcery and a complex individual shaped by immense power and responsibility. His character serves as a fascinating study in how absolute power affects personality and relationships.

Born with both the Six Eyes and the Limitless cursed technique, Gojo represents a once-in-a-generation talent that fundamentally altered the balance of the jujutsu world. His abilities are so overwhelming that his mere existence serves as a deterrent to curse activity globally.

What makes Gojo particularly interesting is how his overwhelming strength has shaped his worldview. His casual demeanor and playful personality mask a deep understanding of the jujutsu world's corruption and his role as both protector and potential threat to the established order.

His relationship with his students, particularly Yuji Itadori, reveals Gojo's underlying desire to reshape the jujutsu world through education rather than force. He sees potential in the next generation to create a better system than the one that failed his best friend, Suguru Geto.

The tragedy of Gojo's character lies in his isolation—his power makes him fundamentally different from everyone else, creating barriers even in his closest relationships. This isolation becomes a recurring theme throughout the series, influencing his teaching methods and his ultimate goals for reform.`,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    author: 'Character Study Weekly',
    publishedAt: '2024-02-06T11:00:00Z',
    category: 'character',
    tags: ['gojo satoru', 'analysis', 'six eyes', 'character study']
  },
  {
    id: '6',
    title: 'Shibuya Incident Arc Wins Animation Award',
    summary: 'The critically acclaimed arc receives recognition for outstanding animation and storytelling.',
    content: `The Shibuya Incident arc from Jujutsu Kaisen Season 2 has been awarded the prestigious Animation Excellence Award at the Tokyo International Animation Festival, recognizing MAPPA's exceptional work in bringing one of manga's most intense storylines to life.

The arc, which ran from episodes 6-23 of Season 2, was praised by the judging panel for its "masterful blend of fluid animation, emotional storytelling, and technical innovation." The award specifically highlighted the animation team's handling of complex action sequences and their ability to maintain visual consistency throughout the arc's demanding production schedule.

Director Shōta Goshozono accepted the award on behalf of the production team, dedicating it to the animators who worked tirelessly to meet the arc's ambitious visual goals. "This arc pushed us to our limits creatively and technically," Goshozono stated. "Seeing it recognized in this way validates the incredible effort our entire team put into every frame."

The Shibuya Incident arc is widely considered a turning point for the series, featuring major character developments, shocking plot twists, and some of the most visually stunning fight sequences in recent anime history. The arc's success has been credited with elevating Jujutsu Kaisen's status from popular series to modern classic.

Industry analysts note that this recognition further solidifies MAPPA's reputation as one of the premier animation studios in the industry, particularly for their work on high-stakes action sequences and dramatic storytelling.`,
    imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
    author: 'Animation Industry News',
    publishedAt: '2024-02-05T13:30:00Z',
    category: 'anime',
    tags: ['shibuya incident', 'award', 'MAPPA', 'season 2']
  }
];

// Helper functions for filtering and sorting news
export const getNewsByCategory = (category: NewsArticle['category']) =>
  mockJJKNews.filter(article => article.category === category);

export const getLatestNews = (limit: number = 5) =>
  mockJJKNews
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);

export const searchNews = (query: string) =>
  mockJJKNews.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.summary.toLowerCase().includes(query.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

export const getNewsById = (id: string) =>
  mockJJKNews.find(article => article.id === id);