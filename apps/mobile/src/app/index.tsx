
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const C = {
  background: '#0B1018',
  surface: '#121B27',
  surface2: '#182536',
  border: '#253548',
  primary: '#38BDF8',
  primaryDark: '#087EAB',
  text: '#F1F5F9',
  muted: '#8494A7',
  green: '#34D399',
};

function SectionTitle({
  title,
  action,
  onPress,
}: {
  title: string;
  action?: string;
  onPress?: () => void;
}) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action && (
        <Pressable onPress={onPress}>
          <Text style={styles.sectionAction}>{action}</Text>
        </Pressable>
      )}
    </View>
  );
}

export default function HomeScreen() {
  const showComingSoon = (mode: 'send' | 'receive') => {
    Alert.alert(
      mode === 'send' ? 'Send files' : 'Receive files',
      'The SENDIT transfer engine will be available in an upcoming milestone.',
      [{ text: 'Got it' }],
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.logo}>
              <Ionicons name="paper-plane" size={20} color="#FFFFFF" />
            </View>

            <View>
              <Text style={styles.brandName}>sendit</Text>
              <Text style={styles.brandSubtitle}>YOUR TRANSFER SPACE</Text>
            </View>
          </View>

          <Pressable
            style={styles.settingsButton}
            onPress={() =>
              Alert.alert('Settings', 'Settings will be available soon.')
            }
          >
            <Ionicons name="settings-outline" size={21} color={C.text} />
          </Pressable>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.heroTag}>
            <View style={styles.liveDot} />
            <Text style={styles.heroTagText}>YOUR DEVICES, ONE SPACE</Text>
          </View>

          <Text style={styles.heroTitle}>
            Move things.
            {'\n'}
            <Text style={styles.heroAccent}>Not limitations.</Text>
          </Text>

          <Text style={styles.heroDescription}>
            A simpler way to move your files between the devices you use every
            day.
          </Text>

          <View style={styles.heroDecoration}>
            <View style={styles.orbitOuter} />
            <View style={styles.orbitInner} />

            <View style={styles.orbitCenter}>
              <Ionicons name="swap-horizontal" size={34} color={C.primary} />
            </View>

            <View style={styles.orbitNode}>
              <Ionicons
                name="phone-portrait-outline"
                size={17}
                color="#FFFFFF"
              />
            </View>

            <View style={styles.orbitNodeRight}>
              <Ionicons
                name="laptop-outline"
                size={18}
                color="#FFFFFF"
              />
            </View>
          </View>
        </View>

        {/* Main actions */}
        <SectionTitle title="Get started" />

        <View style={styles.actionRow}>
          <Pressable
            style={({ pressed }) => [
              styles.actionCard,
              styles.sendCard,
              pressed && styles.pressed,
            ]}
            onPress={() => showComingSoon('send')}
          >
            <View style={styles.actionIcon}>
              <Ionicons name="arrow-up-outline" size={23} color="#FFFFFF" />
            </View>

            <Text style={styles.actionTitle}>Send files</Text>

            <Text style={styles.actionDescription}>
              Share something with a device
            </Text>

            <View style={styles.actionArrow}>
              <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
            </View>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.actionCard,
              styles.receiveCard,
              pressed && styles.pressed,
            ]}
            onPress={() => showComingSoon('receive')}
          >
            <View style={styles.actionIconSecondary}>
              <Ionicons
                name="arrow-down-outline"
                size={23}
                color={C.primary}
              />
            </View>

            <Text style={styles.actionTitle}>Receive files</Text>

            <Text style={styles.actionDescription}>
              Get files from another device
            </Text>

            <View style={styles.actionArrow}>
              <Ionicons name="arrow-forward" size={18} color={C.primary} />
            </View>
          </Pressable>
        </View>

        {/* Network */}
        <View style={styles.section}>
          <SectionTitle
            title="Your network"
            action="Details"
            onPress={() =>
              Alert.alert(
                'Your network',
                'Automatic device discovery is coming soon.',
              )
            }
          />

          <View style={styles.networkCard}>
            <View style={styles.networkIcon}>
              <Ionicons name="radio-outline" size={23} color={C.primary} />
            </View>

            <View style={styles.networkInfo}>
              <Text style={styles.networkTitle}>Device discovery</Text>
              <Text style={styles.networkDescription}>
                Ready to find nearby devices
              </Text>
            </View>

            <View style={styles.searchingBadge}>
              <View style={styles.searchDot} />
              <Text style={styles.searchingText}>Standby</Text>
            </View>
          </View>

          <View style={styles.networkHint}>
            <Ionicons
              name="information-circle-outline"
              size={16}
              color={C.muted}
            />
            <Text style={styles.networkHintText}>
              Connect your devices to the same Wi-Fi network to get started.
            </Text>
          </View>
        </View>

        {/* Activity */}
        <View style={styles.section}>
          <SectionTitle
            title="Recent activity"
            action="View all"
            onPress={() =>
              Alert.alert(
                'Activity',
                'Your transfer history will appear here.',
              )
            }
          />

          <View style={styles.emptyCard}>
            <View style={styles.emptyIcon}>
              <Ionicons
                name="file-tray-outline"
                size={30}
                color={C.primary}
              />
            </View>

            <Text style={styles.emptyTitle}>A fresh start.</Text>

            <Text style={styles.emptyDescription}>
              Your sent and received files will appear here once you start
              sharing.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerBrand}>SENDIT</Text>
          <Text style={styles.footerVersion}>
            VERSION 1.0 · LOCAL FIRST
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.background,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 21,
    paddingTop: 12,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 34,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  logo: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: C.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    color: C.text,
    fontSize: 23,
    fontWeight: '800',
    letterSpacing: -1,
  },
  brandSubtitle: {
    color: C.muted,
    fontSize: 8,
    letterSpacing: 1.4,
    fontWeight: '700',
  },
  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    backgroundColor: C.surface,
    borderRadius: 24,
    padding: 21,
    marginBottom: 29,
    borderWidth: 1,
    borderColor: C.border,
    overflow: 'hidden',
    minHeight: 250,
  },
  heroTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  liveDot: {
    height: 7,
    width: 7,
    borderRadius: 5,
    backgroundColor: C.green,
  },
  heroTagText: {
    color: C.muted,
    fontSize: 9,
    letterSpacing: 1.4,
    fontWeight: '700',
  },
  heroTitle: {
    color: C.text,
    fontSize: 31,
    fontWeight: '800',
    lineHeight: 39,
    letterSpacing: -1.2,
    marginTop: 20,
  },
  heroAccent: {
    color: C.primary,
  },
  heroDescription: {
    color: C.muted,
    fontSize: 12,
    lineHeight: 20,
    marginTop: 9,
    maxWidth: 235,
  },
  heroDecoration: {
    position: 'absolute',
    right: -18,
    bottom: -22,
    width: 155,
    height: 145,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orbitOuter: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: '#28506A',
    borderRadius: 100,
  },
  orbitInner: {
    position: 'absolute',
    width: 94,
    height: 94,
    borderWidth: 1,
    borderColor: '#28506A',
    borderRadius: 100,
  },
  orbitCenter: {
    width: 57,
    height: 57,
    borderRadius: 20,
    backgroundColor: '#17374B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbitNode: {
    position: 'absolute',
    top: 10,
    left: 25,
    width: 33,
    height: 33,
    borderRadius: 12,
    backgroundColor: '#087EAB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbitNodeRight: {
    position: 'absolute',
    bottom: 13,
    right: 18,
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#34465D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  sectionTitle: {
    color: C.text,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  sectionAction: {
    color: C.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    minHeight: 153,
    borderRadius: 19,
    padding: 14,
    borderWidth: 1,
    borderColor: C.border,
  },
  sendCard: {
    backgroundColor: '#087EAB',
    borderColor: '#168DBB',
  },
  receiveCard: {
    backgroundColor: C.surface2,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
  actionIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFFFFF22',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  actionIconSecondary: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#38BDF820',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  actionTitle: {
    color: C.text,
    fontSize: 14,
    fontWeight: '700',
  },
  actionDescription: {
    color: '#D2E6F0',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 5,
  },
  actionArrow: {
    position: 'absolute',
    right: 13,
    bottom: 13,
  },
  section: {
    marginTop: 29,
  },
  networkCard: {
    backgroundColor: C.surface,
    borderRadius: 17,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  networkIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#38BDF818',
    justifyContent: 'center',
    alignItems: 'center',
  },
  networkInfo: {
    flex: 1,
  },
  networkTitle: {
    color: C.text,
    fontWeight: '700',
    fontSize: 13,
  },
  networkDescription: {
    color: C.muted,
    fontSize: 10,
    marginTop: 4,
  },
  searchingBadge: {
    backgroundColor: '#253548',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  searchDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#94A3B8',
  },
  searchingText: {
    color: '#CBD5E1',
    fontSize: 9,
    fontWeight: '600',
  },
  networkHint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 12,
    paddingHorizontal: 3,
  },
  networkHintText: {
    color: C.muted,
    fontSize: 10,
    lineHeight: 16,
    flex: 1,
  },
  emptyCard: {
    backgroundColor: C.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.border,
    borderStyle: 'dashed',
    padding: 23,
    alignItems: 'center',
  },
  emptyIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#38BDF818',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  emptyTitle: {
    color: C.text,
    fontSize: 14,
    fontWeight: '700',
  },
  emptyDescription: {
    color: C.muted,
    fontSize: 11,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 6,
    maxWidth: 250,
  },
  footer: {
    marginTop: 35,
    alignItems: 'center',
    gap: 5,
  },
  footerBrand: {
    color: '#526579',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
  },
  footerVersion: {
    color: '#526579',
    fontSize: 8,
    letterSpacing: 1,
  },
});
