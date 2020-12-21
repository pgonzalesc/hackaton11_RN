import React, {useState, useRef} from 'react';
import { Animated, Easing , Image, StyleSheet, View, Text, TouchableHighlight, Dimensions, Modal  } from 'react-native';

const { height, width } = Dimensions.get('window');

const Gallery = ({data}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);
  const [imageExpand, setImageExpand] = useState(null);

  const handleIn = (img) => {
    setImageExpand(img);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duratioin: 1000,
      useNativeDriver: true,
      easing: Easing.ease
    }).start();
    setVisible(!visible);
  }

  const handleOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duratioin: 1000,
      useNativeDriver: true,
      easing: Easing.ease
    }).start();
    setVisible(!visible);
  }

  return (
    <View>
      { !visible &&
        <>
          <View style={styles.containerGallery}>
          { data.length > 0 &&
                data.map(({image, id})=>{
                    return(
                    <TouchableHighlight onPress={()=>handleIn(image)} style={styles.photo}>
                        <Image
                            key={id}
                            id={id}
                            source={{
                            uri: image,
                            }}
                            style={styles.image}
                        />
                    </TouchableHighlight>
                    )
                })
          }
          </View>
        </>
      }
      { visible &&
        <>
          <TouchableHighlight onPress={handleOut} style={{padding: 15}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Cerrar</Text>
          </TouchableHighlight>

          <Animated.Image
            source={{uri: imageExpand}}
            resizeMode='cover'
            style={{
                position: 'absolute',
                marginTop: 320,
                height: height/15,
                width: width/6,
                transform: [
                    {
                        translateX: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 120]
                        })
                    },
                    {
                        translateY: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 25]
                        })
                    },
                    {
                        scaleX: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 15]
                        })
                    },
                    {
                        scaleY: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 12.5]
                        })
                    }
                ]
            }}
          /> 
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  containerGallery: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  photo: {
    flexBasis: '49%'
  },
  image: {
    width: '100%', 
    height: 200, 
    marginVertical: 5 
  }
});

export default Gallery;
