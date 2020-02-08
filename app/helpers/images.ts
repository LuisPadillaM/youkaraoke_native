import ImagePicker, {ImagePickerResponse} from 'react-native-image-picker';

const storageOptions = {
  skipBackup: true,
  path: 'images',
};

export interface ImagePickerFileResponse {
  filePath: ImagePickerResponse;
  fileData: string;
  fileUri: string;
}

export const chooseImage = () => {
  let options = {
    title: 'Select Image',
    customButtons: [
      {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    ],
    storageOptions,
  };
  return new Promise<ImagePickerFileResponse>((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        reject('User cancelled image picker');
      } else if (response.error) {
        reject(`ImagePicker Error: ${response.error}`);
      } else if (response.customButton) {
        reject(`User tapped custom button: ${response.customButton}`);
      } else {
        resolve({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  });
};
export const launchCamera = () => {
  let options = {
    storageOptions,
  };
  return new Promise((resolve, reject) => {
    ImagePicker.launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        reject('User cancelled image picker');
      } else if (response.error) {
        reject(`ImagePicker Error: ${response.error}`);
      } else if (response.customButton) {
        reject(`User tapped custom button: ${response.customButton}`);
      } else {
        resolve({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  });
};
export const launchImageLibrary = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  return new Promise((resolve, reject) => {
    ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        reject('User cancelled image picker');
      } else if (response.error) {
        reject(`ImagePicker Error: ${response.error}`);
      } else if (response.customButton) {
        reject(`User tapped custom button: ${response.customButton}`);
      } else {
        resolve({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  });
};
