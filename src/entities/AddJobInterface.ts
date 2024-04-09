export interface AddJobInterface {
  industry: string;
  location: string;
  role: string;
  minSalary: number;
  maxSalary: number;
  company: string;
  employmentType: "part time" | "full time" | "";
  employmentMode: "work from home" | "work from office" | "hybrid" | "";
  workQualification: string[];
  experienceInYears: number;
  qualification: "10th" | "12th" | "graduate" | "below-10th" | "";
  genderPreference: string[];
  languagePreference: string[];
  jobTimings: string;
  workingDays: string;
  jobAddress: string;
  jobInfo: string;
  jobApplyLink: string;
}
