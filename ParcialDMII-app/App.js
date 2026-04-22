import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

export default function LandingPage() {
  const { width, height } = useWindowDimensions();
  const isSmallDevice = width < 400;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#05070c" />

      <View style={styles.heroSpacer} />

      <View style={styles.bannerContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={[styles.descripcion, { fontSize: isSmallDevice ? 24 : 27 }]}>Todo sobre el mundo motor lo tienes aqui.</Text>
      <Text style={[styles.descripcion, { fontSize: isSmallDevice ? 24 : 27 }]}>Noticias, tendencias y actualidad en un solo lugar.</Text>

      <TouchableOpacity
        style={[styles.boton, { width: width * 0.72, paddingVertical: height * 0.02 }]}
        onPress={() => Alert.alert('Bienvenido', 'Listo para ver las ultimas noticias de F1.')}
        activeOpacity={0.85}
      >
        <Text style={[styles.botonTexto, { fontSize: isSmallDevice ? 26 : 30 }]}>Comenzar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05070c',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 38,
  },
  heroSpacer: {
    width: '100%',
    height: 115,
    backgroundColor: '#03050a',
  },
  bannerContainer: {
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    marginTop: -10,
  },
  logo: {
    width: 300,
    height: 110,
    marginRight: 14,
  },
  titulo: {
    color: '#fff',
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  descripcion: {
    color: '#d5d7dd',
    textAlign: 'center',
    lineHeight: 37,
    width: '82%',
    fontWeight: '500',
  },
  boton: {
    backgroundColor: '#e10600',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: '800',
  },
  arrow: {
    color: '#fff',
    marginBottom: 4,
    lineHeight: 52,
  },
});
