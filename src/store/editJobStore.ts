import { create } from "zustand";
import { AddJobInterface } from "../entities/AddJobInterface";
import { Job } from "../entities/Job";

export interface EditJobActions {
  setAllValues: (data: Job) => void;
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

const useEditJobStore = create<AddJobInterface & EditJobActions>((set) => ({
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

  setAllValues: (data) =>
    set(() => ({
      industry: data.industry,
      location: data.location,
      role: data.role,
      minSalary: data.minSalary,
      maxSalary: data.maxSalary,
      company: data.company,
      employmentType: data.employmentType,
      employmentMode: data.employmentMode,
      workQualification: data.workQualification,
      experienceInYears: data.experienceInYears,
      qualification: data.qualification,
      genderPreference: data.genderPreference,
      languagePreference: data.languagePreference,
      jobTimings:
        data.jobTimings.split("to")[0] + "to" + data.jobTimings.split("to")[1],
      workingDays: data.workingDays,
      jobAddress: data.jobAddress,
      jobInfo: data.jobInfo,
      jobApplyLink: data.jobApplyLink,
    })),
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
        ? jobTimings + " to " + store.jobTimings.split("to")[1].trim()
        : store.jobTimings.split("to")[0].trim() + " to " + jobTimings,
    })),
  setWorkingDays: (workingDays, start) =>
    set((store) => ({
      workingDays: start
        ? workingDays + " to " + store.workingDays.split("to")[1].trim()
        : store.workingDays.split("to")[0].trim() + " to " + workingDays,
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

export default useEditJobStore;
