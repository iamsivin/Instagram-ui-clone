import React, {useState} from 'react';
import {View, Text, TextInput, Image, Button} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import { NavigationContainer } from '@react-navigation/native';

const PLACEHOLDER_IMAGE =
  'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg';

const uploaderPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A url required'),
  caption: Yup.string().max(2200, 'Caption has reached the limit'),
});

const PostUploaderForm = ({navigation}) => {
  const [thumbnailURL, setThumbnailUrl] = useState(PLACEHOLDER_IMAGE);
  return (
    <View style={{marginHorizontal: 8}}>
      <Formik
        initialValues={{imageUrl: '', caption: ''}}
        onSubmit={values => {
          console.log(values);
          alert('Your post was submitted successfully 🎉');
          navigation.goBack();
        }}
        validationSchema={uploaderPostSchema}
        validateOnMount={true}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginTop: 24,
                marginBottom: 16,
              }}>
              <Image
                source={{uri: thumbnailURL ? thumbnailURL : PLACEHOLDER_IMAGE}}
                style={{width: 100, height: 100}}
              />
              <View style={{marginLeft: 8, flex: 1}}>
                <TextInput
                  style={{
                    color: 'white',
                    fontSize: 15,
                    marginLeft: 12,
                    flex: 1,
                  }}
                  placeholder="Write a caption..."
                  placeholderTextColor="gray"
                  multiline={true}
                  onChangeText={handleChange('caption')}
                  onBlur={handleBlur('caption')}
                  value={values.caption}
                />
              </View>
            </View>
            <Divider width={0.2} orientation="vertical" />

            <TextInput
              onChange={e => setThumbnailUrl(e.nativeEvent.text)}
              style={{
                color: '#fff',
                fontSize: 15,
                marginTop: 8,
              }}
              placeholder="Enter Image url"
              placeholderTextColor="gray"
              onChangeText={handleChange('imageUrl')}
              onBlur={handleBlur('imageUrl')}
              value={values.imageUrl}
            />
            {errors.imageUrl && (
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginTop: 4,
                  marginBottom: 24,
                }}>
                {errors.imageUrl}
              </Text>
            )}
            <Button onPress={handleSubmit} title="Post" disabled={!isValid} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default PostUploaderForm;
