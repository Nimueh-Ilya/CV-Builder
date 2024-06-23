interface cvdata {
  headerInfo: {
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    phoneNumber: string;
    email: string;
  };
  experienceList: string[];
}
export const cvdata: cvdata = {
  headerInfo: {
    firstName: "Aymen",
    lastName: "Loudiy",
    country: "Canada",
    state: "ON",
    phoneNumber: "+212770384367",
    email: "loudiyaymen@gmail.com",
  },
  experienceList: [
    "Lead project teams of 10-15 developers, communicating clearly to set expectations for deadlines and priorities",
    "Develop testing for projects to maintain a high level of quality control, eliminating potential bugs 98% of the time",
    "Meet with potential clients to pitch mobile app technologies, increasing client base by 24% within two years",
    "Prepare reports using project management software to ensure projects remain on track",
    "Monitor teams' progress and present information to key stakeholders for updates",
  ],
};
