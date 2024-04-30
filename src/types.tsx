export type Dictionaries = {
  menu: {
    Title1: { Name: string; url: string };
    Title2: { Name: string; url: string };
    Title3: { Name: string; url: string };
    Title4: { Name: string; url: string };
    Title5: { Name: string; url: string };
  };
  projectFilter: {
    Filter1: { Name: string };
    Filter2: { Name: string };
    Filter3: { Name: string };
    Filter4: { Name: string };
  };
  mainImage: {
    description: string;
    url: string;
  };
  images: {
    name: string;
    url: string;
    description: string;
    category: string;
  }[];
};
