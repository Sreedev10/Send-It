
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const C = {
  background: '#0B1018',
  surface: '#121B27',
  border: '#253548',
  text: '#F1F5F9',
  muted: '#8494A7',
  primary: '#38BDF8',
};

export default function ActivityScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>YOUR TRANSFER SPACE</Text>
          <Text style={styles.title}>Activity</Text>
          <Text style={styles.subtitle}>
            Everything you've shared, in one place.
          </Text>
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryItem}>
            <Ionicons name="arrow-up-circle-outline" size={24} color={C.primary} />
            <Text style={styles.summaryValue}>0</Text>
            <Text style={styles.summaryLabel}>Sent</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryItem}>
            <Ionicons name="arrow-down-circle-outline" size={24} color={C.primary} />
            <Text style={styles.summaryValue}>0</Text>
            <Text style={styles.summaryLabel}>Received</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#34D399" />
            <Text style={styles.summaryValue}>0</Text>
            <Text style={styles.summaryLabel}>Completed</Text>
          </View>
        </View>

        <View style={styles.historyHeading}>
          <Text style={styles.sectionTitle}>Transfer history</Text>
          <Text style={styles.filter}>ALL</Text>
        </View>

        <View style={styles.emptyCard}>
          <View style={styles.emptyIcon}>
            <Ionicons name="time-outline" size={32} color={C.primary} />
          </View>

          <Text style={styles.emptyTitle}>Your story starts here.</Text>

          <Text style={styles.emptyDescription}>
            Once you start sharing files, your transfer history and activity
            statistics will appear here.
          </Text>
        </View>

        <View style={styles.privacyNote}>
          <Ionicons name="shield-checkmark-outline" size={19} color={C.primary} />
          <View style={{ flex: 1 }}>
            <Text style={styles.privacyTitle}>Your privacy matters</Text>
            <Text style={styles.privacyText}>
              SENDIT is designed around direct device-to-device transfers.
            </Text>
          </View>
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
  content: {
    padding: 22,
    paddingBottom: 40,
  },
  header: {
    marginTop: 16,
    marginBottom: 26,
  },
  eyebrow: {
    color: C.primary,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: C.text,
    fontSize: 32,
    fontWeight: '800',
    marginTop: 9,
    letterSpacing: -1,
  },
  subtitle: {
    color: C.muted,
    fontSize: 12,
    marginTop: 7,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.border,
    backgroundColor: C.surface,
  },
  summaryItem: {
    alignItems: 'center',
    gap: 7,
  },
  summaryValue: {
    color: C.text,
    fontSize: 21,
    fontWeight: '800',
  },
  summaryLabel: {
    color: C.muted,
    fontSize: 10,
  },
  divider: {
    height: 53,
    width: 1,
    backgroundColor: C.border,
  },
  historyHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 14,
  },
  sectionTitle: {
    color: C.text,
    fontSize: 16,
    fontWeight: '700',
  },
  filter: {
    color: C.primary,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  emptyCard: {
    alignItems: 'center',
    padding: 28,
    backgroundColor: C.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.border,
    borderStyle: 'dashed',
  },
  emptyIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38BDF818',
    borderRadius: 19,
    marginBottom: 15,
  },
  emptyTitle: {
    color: C.text,
    fontSize: 15,
    fontWeight: '700',
  },
  emptyDescription: {
    color: C.muted,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 8,
  },
  privacyNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: C.surface,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: C.border,
    padding: 15,
    marginTop: 22,
  },
  privacyTitle: {
    color: C.text,
    fontSize: 12,
    fontWeight: '700',
  },
  privacyText: {
    color: C.muted,
    fontSize: 10,
    lineHeight: 16,
    marginTop: 4,
  },
});
