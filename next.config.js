/* eslint-disable max-len */
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = {
  images: {
    domains: ['res.cloudinary.com']
  },
  sassOptions: {
    additionalData: `@import "styles/utils/variables.scss"; @import "styles/utils/mixins.scss"; @import "styles/utils/placeholders.scss";`,
 },
}
