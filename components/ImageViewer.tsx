import {Image, StyleSheet} from "react-native";
import {ImageSourcePropType} from "react-native/Libraries/Image/Image";

type Props = {
  source: ImageSourcePropType;
  selectedImage?: string;
}

export default function ImageViewer({ source, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : source;

  return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})