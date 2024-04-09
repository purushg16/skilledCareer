import { create } from "zustand";
import { AddJobInterface } from "../entities/AddJobInterface";

export interface AddJobActions {
  setIndustry: (industry: string) => void;
  setLocation: (location: string) => void;
  setRole: (role: string) => void;
  setMinSalary: (minSalary: number) => void;
  setMaxSalary: (maxSalary: number) => void;
  setCompany: (company: string) => void;
  setEmploymentType: (employmentType: "part time" | "full time" | "") => void;
  setEmploymentMode: (
    employmentMode: "work from home" | "work from office" | "hybrid" | ""
  ) => void;
  setWorkQualification: (workQualification: "experienced" | "fresher") => void;
  setExperienceInYears: (experienceInYears: number) => void;
  setQualification: (
    qualification: "10th" | "12th" | "graduate" | "below-10th" | ""
  ) => void;
  setGenderPreference: (genderPreference: "male" | "female") => void;
  setLanguagePreference: (languagePreference: string) => void;
  setJobTimings: (jobTimings: string, start: boolean) => void;
  setWorkingDays: (workingDays: string, start: boolean) => void;
  setJobAddress: (jobAddress: string) => void;
  setJobInfo: (jobInfo: string) => void;
  setJobApplyLink: (jobApplyLink: string) => void;
  reset: () => void;
}

const useAddJobStore = create<AddJobInterface & AddJobActions>((set) => ({
  industry: "",
  location: "",
  role: "",
  minSalary: parseInt(""),
  maxSalary: parseInt(""),
  company: "",
  employmentType: "",
  employmentMode: "",
  workQualification: [],
  experienceInYears: parseInt(""),
  qualification: "",
  genderPreference: [],
  languagePreference: [],
  jobTimings: " - ",
  workingDays: " - ",
  jobAddress: "",
  jobInfo: "",
  jobApplyLink: "",

  setIndustry: (industry) => set({ industry }),
  setLocation: (location) => set({ location }),
  setRole: (role) => set({ role }),
  setMinSalary: (minSalary) => set({ minSalary }),
  setMaxSalary: (maxSalary) => set({ maxSalary }),
  setCompany: (company) => set({ company }),
  setEmploymentType: (employmentType) => set({ employmentType }),
  setEmploymentMode: (employmentMode) => set({ employmentMode }),
  setWorkQualification: (workQualification) =>
    set((store) => ({
      workQualification:
        store.workQualification.indexOf(workQualification) === -1
          ? [...store.workQualification, workQualification]
          : store.workQualification.filter((b) => b !== workQualification),
    })),
  setExperienceInYears: (experienceInYears) => set({ experienceInYears }),
  setQualification: (qualification) => set({ qualification }),
  setGenderPreference: (newGenderPreference) =>
    set((store) => ({
      genderPreference:
        store.genderPreference.indexOf(newGenderPreference) === -1
          ? [...store.genderPreference, newGenderPreference]
          : store.genderPreference.filter((b) => b !== newGenderPreference),
    })),
  setLanguagePreference: (languagePreference) =>
    set((store) => {
      const languageIndex =
        store.languagePreference.indexOf(languagePreference);
      if (languageIndex === -1) {
        return {
          languagePreference: [...store.languagePreference, languagePreference],
        };
      } else {
        return {
          languagePreference: store.languagePreference.filter(
            (l) => l !== languagePreference
          ),
        };
      }
    }),

  setJobTimings: (jobTimings, start) =>
    set((store) => ({
      jobTimings: start
        ? jobTimings + "-" + store.jobTimings.split("-")[1]
        : store.jobTimings.split("-")[0] + "-" + jobTimings,
    })),
  setWorkingDays: (workingDays, start) =>
    set((store) => ({
      workingDays: start
        ? workingDays + "-" + store.workingDays.split("-")[1]
        : store.workingDays.split("-")[0] + "-" + workingDays,
    })),
  setJobAddress: (jobAddress) => set({ jobAddress }),
  setJobInfo: (jobInfo) => set({ jobInfo }),
  setJobApplyLink: (jobApplyLink) => set({ jobApplyLink }),

  reset: () =>
    set({
      industry: "",
      location: "",
      role: "",
      minSalary: 0,
      maxSalary: 0,
      company: "",
      employmentType: "",
      employmentMode: "",
      workQualification: [],
      experienceInYears: 0,
      qualification: "",
      genderPreference: [],
      languagePreference: [],
      jobTimings: "",
      workingDays: "",
      jobAddress: "",
      jobInfo: "",
      jobApplyLink: "",
    }),
}));

export default useAddJobStore;
