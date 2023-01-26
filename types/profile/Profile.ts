interface Offer {
  title: string,
  text: string
};

export type Profile = {
  name: string,
  mail: string,
  offers: Offer[]
};
