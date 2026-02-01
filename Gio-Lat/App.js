import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* Fixed Hero Container */}
      <View style={styles.heroContainer}>
        <Image 
          source={require('./assets/amalfi-1.jpeg')} 
          style={styles.heroImage}
          resizeMode="cover"
      />
      <View style={styles.heroOverlay}>
        <View style={styles.hiddenGemTag}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#edf1ff'}}> Hidden Gem in Italy</Text>
        </View>
        
        <View style={styles.glassPane}>
          <Text style={{fontSize: 36, fontFamily: 'sans-serif', fontWeight: 'bold', color: '#ffffff', marginBottom: 4}}>Amalfi Coast</Text>
          <Text style={{fontSize: 16, color: '#ffffff', opacity: 0.9}}>Italy's Most Beautiful Coastline</Text>
        </View>

        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'justify', color: '#182d6e', marginBottom: 10}}> About</Text>
            <Text style={{fontSize: 16, lineHeight: 22, color: '#4a4a4a', textAlign: 'justify'}}>
              The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge 
              of Italy's Sorrentine Peninsula, in the Campania region. This UNESCO World Heritage 
              site is renowned for its extraordinary natural beauty, dramatic cliffs, colorful 
              fishing villages, and pristine beaches. The region has been a popular tourist 
              destination since the Roman era, offering a perfect blend of history, culture, 
              and breathtaking Mediterranean scenery.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#182d6e', marginBottom: 10}}> Location</Text>
            <View style={styles.infoCard}>
              <Text style={{fontSize: 14, fontWeight: '600', color: '#113d89', marginBottom: 5}}>Region:</Text>
              <Text style={{fontSize: 16, color: '#1a1a1a'}}>Campania, Southern Italy</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={{fontSize: 14, fontWeight: '600', color: '#113d89', marginBottom: 5}}>Nearest Airport:</Text>
              <Text style={{fontSize: 16, color: '#1a1a1a'}}>Naples International Airport (NAP)</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={{fontSize: 14, fontWeight: '600', color: '#113d89', marginBottom: 5}}>Major Towns:</Text>
              <Text style={{fontSize: 16, color: '#1a1a1a'}}>Amalfi, Positano, Ravello, Sorrento</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#182d6e', marginBottom: 15}}> Activities</Text>
            <View style={styles.activityCard}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Beach Hopping</Text>
              <Text style={{fontSize: 14, color: '#666', lineHeight: 22}}>
                Visit famous beaches like Spiaggia Grande in Positano, Marina Grande in Amalfi, 
                and the hidden gem of Furore Beach
              </Text>
            </View>
            <View style={styles.activityCard}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Path of the Gods</Text>
              <Text style={{fontSize: 14, color: '#666', lineHeight: 22}}>
                Hike the famous "Sentiero degli Dei"
              </Text>
            </View>
            <View style={styles.activityCard}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Historical Sites</Text>
              <Text style={{fontSize: 14, color: '#666', lineHeight: 22}}>
                Visit the 9th-century Amalfi Cathedral, Villa Rufolo in Ravello, and ancient 
                Roman ruins scattered throughout the region
              </Text>
            </View>
            <View style={styles.activityCard}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Culinary Experiences</Text>
              <Text style={{fontSize: 14, color: '#666', lineHeight: 22}}>
                Enjoy cooking classes, wine tastings, and authentic Italian cuisine at 
                family-run trattorias
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#182d6e', marginBottom: 10}}> Entrance Fees</Text>
            <View style={styles.feeCard}>
              <Text style={{fontSize: 15, color: '#4a4a4a', lineHeight: 20,}}>
                The Amalfi Coast itself is free to visit - it's a public coastal area. 
                However, specific attractions have entrance fees:
              </Text>
            </View>
            <View style={styles.feeItem}>
              <Text style={{fontSize: 16, color: '#4a4a4a', flex: 1}}>Amalfi Cathedral:</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2c5aa0'}}>€3 - €5</Text>
            </View>
            <View style={styles.feeItem}>
              <Text style={{fontSize: 16, color: '#4a4a4a', flex: 1}}>Villa Rufolo (Ravello):</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2c5aa0'}}>€7</Text>
            </View>
            <View style={styles.feeItem}>
              <Text style={{fontSize: 16, color: '#4a4a4a', flex: 1}}>Villa Cimbrone (Ravello):</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2c5aa0'}}>€10</Text>
            </View>
            <View style={styles.feeItem}>
              <Text style={{fontSize: 16, color: '#4a4a4a', flex: 1}}>Emerald Grotto:</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2c5aa0'}}>€6 (boat tour)</Text>
            </View>
            <View style={styles.feeItem}>
              <Text style={{fontSize: 16, color: '#4a4a4a', flex: 1}}>Path of the Gods:</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2c5aa0'}}>Free</Text>
            </View>
          </View>

          {/* Best Time to Visit Section */}
          <View style={styles.section}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#182d6e', marginBottom: 15}}> Best Time to Visit</Text>
            <View style={styles.timeCard}>
              <View style={styles.seasonCard}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Spring (April - May)</Text>
              </View>
              <View style={styles.seasonCard}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Summer (June - August)</Text>
              </View>
              <View style={styles.seasonCard}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Fall (September - October)</Text>
              </View>
              <View style={styles.seasonCard}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 8}}>Winter (November - March)</Text>
              </View>
            </View>
            <View style={styles.recommendationBox}>
              <Text style={{fontSize: 15, color: '#155724', lineHeight: 22}}>
                 <Text style={{fontWeight: 'bold'}}>Recommended:</Text> Late May, June, or September 
                for the best balance of weather, crowds, and prices.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#182d6e', marginBottom: 15}}> Travel Tips</Text>
            <View style={styles.tipCard}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#2c5aa0', marginRight: 15, minWidth: 30}}>1</Text>
              <View style={styles.tipContent}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 6}}>Transportation</Text>
                <Text style={{fontSize: 15, color: '#666', lineHeight: 22}}>
                  Rent a car or use the SITA bus system. The coastal road is narrow - drive carefully!
                </Text>
              </View>
            </View>
            <View style={styles.tipCard}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#2c5aa0', marginRight: 15, minWidth: 30}}>2</Text>
              <View style={styles.tipContent}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 6}}>Accommodation</Text>
                <Text style={{fontSize: 15, color: '#666', lineHeight: 22}}>
                  Book well in advance, especially for summer. Consider smaller towns for better value.
                </Text>
              </View>
            </View>
            <View style={styles.tipCard}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#2c5aa0', marginRight: 15, minWidth: 30}}>3</Text>
              <View style={styles.tipContent}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#113d89', marginBottom: 6}}>Budget Planning</Text>
                <Text style={{fontSize: 15, color: '#666', lineHeight: 22}}>
                  Expect higher prices. Budget €100-200/day. Save money by eating at local trattorias.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#182d6e', marginBottom: 15}}> Snapshots</Text>
            <View style={styles.galleryContainer}>
              <Image 
                source={require('./assets/amalfi-n1.jpg')} 
                style={styles.galleryImage}
                resizeMode="cover"
              />
              <Image 
                source={require('./assets/amalfi-sunset.jpg')} 
                style={styles.galleryImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.galleryContainer}>
              <Image 
                source={require('./assets/amalfi-coast.jpg')} 
                style={styles.galleryImage}
                resizeMode="cover"
              />
              <Image 
                source={require('./assets/amalfi-n2.jpg')} 
                style={styles.galleryImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.ctaButton}>
            <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center'}}>Saltwater dreams and endless coastal summer days</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf6ff',
  },
  heroContainer: {
    height: 250,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  heroOverlay: {
  position: 'absolute',
  top: 0, 
  left: 0,
  right: 0,
  bottom: 0, 
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  padding: 20,
  justifyContent: 'flex-end',
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
  },
  hiddenGemTag: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(55, 151, 175, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  glassPane: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  scrollContent: {
    paddingTop: 250,
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 0,
  },
  section: {
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  activityCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  feeCard: {
    backgroundColor: '#e8f4f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  feeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  timeCard: {
    marginBottom: 15,
  },
  seasonCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recommendationBox: {
    backgroundColor: '#d4edda',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#5cb85c',
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipContent: {
    flex: 1,
  },
  galleryContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  galleryImage: {
    flex: 1,
    height: 200,
    borderRadius: 15,
  },
  ctaButton: {
    backgroundColor: '#2c5aa0',
    borderRadius: 25,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#2c5aa0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});