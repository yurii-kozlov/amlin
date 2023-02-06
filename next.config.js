module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    additionalData: `@import "styles/utils/variables.scss"; @import "styles/utils/mixins.scss"; 
    @import "styles/utils/placeholders.scss";`,
 },
}
