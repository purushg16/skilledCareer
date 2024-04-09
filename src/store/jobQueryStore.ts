import { create } from "zustand";

export type workQualification = "experienced" | "" | "fresher";
export type qualification = "10th" | "12th" | "graduate" | "below-10th" | "";
export type employmentMode =
  | "work from home"
  | "work from office"
  | "hybrid"
  | "";

interface JobQueryStore {
  location: string[];
  workQualification: workQualification;
  qualification: qualification;
  industry: string[];
  minSalary: number;
  employmentMode: employmentMode[];
}

interface JobQueryActions {
  setLocation: (location: string) => void;
  setWorkQualification: (workQualification: workQualification) => void;
  setQualification: (qualification: qualification) => void;
  setIndustry: (industry: string) => void;
  setMinSalary: (minSalary: number) => void;
  setEmploymentMode: (employmentMode: employmentMode) => void;
  clearFilters: () => void;
}

const useJobQueryStore = create<JobQueryStore & JobQueryActions>((set) => ({
  location: [],
  workQualification: "",
  qualification: "",
  industry: [],
  minSalary: 0,
  employmentMode: [],

  setLocation: (location) =>
    set((store) => ({
      location:
        store.location.indexOf(location) === -1
          ? [...store.location, location]
          : store.location.filter((loc) => loc !== location),
    })),
  setWorkQualification: (workQualification) => set({ workQualification }),
  setQualification: (qualification) => set({ qualification }),
  setIndustry: (industry) =>
    set((store) => ({
      industry:
        store.industry.indexOf(industry) === -1
          ? [...store.industry, industry]
          : store.industry.filter((ind) => ind !== industry),
    })),
  setMinSalary: (minSalary) => set({ minSalary }),
  setEmploymentMode: (employmentMode) =>
    set((store) => ({
      employmentMode:
        store.employmentMode.indexOf(employmentMode) === -1
          ? [...store.employmentMode, employmentMode]
          : store.employmentMode.filter((mode) => mode !== employmentMode),
    })),

  clearFilters: () =>
    set({
      location: [],
      workQualification: "",
      qualification: "",
      industry: [],
      minSalary: 0,
      employmentMode: [],
    }),
}));

export default useJobQueryStore;
