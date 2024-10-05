import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

type Props = {
  imageSize: number;
  stickerSource: string;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  // `useSharedValue`의 역할
  // 공유 상태 값 생성: 애니메이션이나 제스처 처리에서 사용할 수 있는 값을 생성합니다.
  // 애니메이션 상태 관리: 이 값이 변경될 때마다 연결된 애니메이션이나 스타일이 자동으로 업데이트됩니다.
  // 성능 최적화: UI 스레드에서 직접 값을 관리하여 부드러운 애니메이션을 구현합니다.
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTab = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    })

  const drag = Gesture.Pan()
    .onChange(event => {
      translateX.value += event.changeX;
      translateY.value += event.changeY;
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    }
  })

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    }
  })

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, {top: -350}]}>
        <GestureDetector gesture={doubleTab}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, {width: imageSize, height: imageSize}]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}