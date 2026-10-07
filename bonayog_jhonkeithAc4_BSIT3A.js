import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Hardcoded Mock Data
const MOVIES = [
  {
    id: '1',
    title: 'Inception',
    genre: 'Sci-Fi / Thriller',
    year: '2010',
    rating: '8.8',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  },
  {
    id: '2',
    title: 'Interstellar',
    genre: 'Sci-Fi / Adventure',
    year: '2014',
    rating: '8.7',
    description: 'When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space to ensure humanity survival.',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    genre: 'Action / Crime',
    year: '2008',
    rating: '9.0',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.',
  },
];

// --- SCREEN 1: Home Screen ---
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerBox}>
        <Text style={styles.heroEmoji}>🎬</Text>
        <Text style={styles.mainTitle}>Movie Explorer</Text>
        <Text style={styles.subtitle}>Discover details about top-rated movies</Text>
        
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Catalog')}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Browse Movies →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --- SCREEN 2: Catalog Screen ---
function CatalogScreen({ navigation }) {
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { movie: item })}
      activeOpacity={0.7}
    >
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSub}>{item.genre} • {item.year}</Text>
      </View>
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>★ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddedContainer}>
        <Text style={styles.sectionHeader}>Select a Movie</Text>
        <FlatList
          data={MOVIES}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

// --- SCREEN 3: Item Details Screen ---
function DetailsScreen({ route, navigation }) {
  const { movie } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddedContainer}>
        <View style={styles.detailsCard}>
          <Text style={styles.detailTitle}>{movie?.title || 'Unknown Title'}</Text>
          <Text style={styles.detailMeta}>{movie?.genre} | Released {movie?.year}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.detailRating}>Rating: ★ {movie?.rating} / 10</Text>
          </View>
          <Text style={styles.detailDescHeader}>Overview:</Text>
          <Text style={styles.detailDesc}>{movie?.description}</Text>
        </View>

        {/* Custom Reverse Navigation Button */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>← Back to Catalog</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --- STACK NAVIGATION SETUP ---
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f8" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Catalog" 
          component={CatalogScreen} 
          options={{ title: 'Movie Catalog' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Movie Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  paddedContainer: {
    flex: 1,
    padding: 20,
  },
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 30,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  cardSub: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
  ratingBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  ratingText: {
    color: '#d97706',
    fontWeight: '700',
    fontSize: 13,
  },
  detailsCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  detailMeta: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  ratingRow: {
    marginBottom: 16,
  },
  detailRating: {
    fontSize: 15,
    fontWeight: '600',
    color: '#d97706',
  },
  detailDescHeader: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 6,
  },
  detailDesc: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
  },
  secondaryButton: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 15,
  },
});