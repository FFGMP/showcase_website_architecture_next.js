type Image = {
  url: string;
  description: string;
};

export type Dictionary = {
  menu: {
    Title1: string;
    Title2: string;
    Title3: string;
    Title4: string;
    Title5: { Name: string; url: string };
  };
  images: {
    Image1: Image;
    Image2: Image;
    Image3: Image;
    Image4: Image;
    Image5: Image;
    Image6: Image;
  };
};
