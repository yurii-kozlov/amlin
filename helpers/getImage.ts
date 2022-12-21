import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';

export const getImage = (publicId: string): CloudinaryImage => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'docve4syp',
    },
  });

  const myImage = cld.image(publicId);

  return myImage.format('webp');
};
