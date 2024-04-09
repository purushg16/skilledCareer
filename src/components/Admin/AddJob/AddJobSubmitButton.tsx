import { useMemo } from "react";
import { Button } from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import { usePostJob } from "../../../hooks/useJob";

// interface GetJobsInterface {
//     page: number;
//     location?: string[];
//     workQualification?: string;
//     qualification?: string;
//     industry?: string[];
//     minSalary?: number;
//     employmentMode?: string[];
//   }

const SubmitButton = () => {
  const {
    industry,
    location,
    role,
    minSalary,
    maxSalary,
    company,
    employmentType,
    employmentMode,
    workQualification,
    experienceInYears,
    qualification,
    genderPreference,
    languagePreference,
    jobTimings,
    workingDays,
    jobAddress,
    jobInfo,
    jobApplyLink,
  } = useAddJobStore((state) => state);

  const { mutate, isPending } = usePostJob();

  const isFormValid = useMemo(() => {
    const isExperienced = workQualification.includes("experienced");

    if (
      isExperienced &&
      (experienceInYears === null ||
        experienceInYears === parseInt("") ||
        isNaN(experienceInYears))
    )
      return false;

    return (
      industry !== "" &&
      location !== "" &&
      role !== "" &&
      minSalary !== null &&
      maxSalary !== null &&
      company !== "" &&
      employmentType !== "" &&
      employmentMode !== "" &&
      qualification !== "" &&
      genderPreference.length > 0 &&
      jobTimings !== "" &&
      jobTimings.split("-")[0].length >= 8 &&
      jobTimings.split("-")[1].length >= 8 &&
      workingDays !== "" &&
      workingDays.split("-")[0].length >= 3 &&
      workingDays.split("-")[1].length >= 3 &&
      jobAddress !== "" &&
      jobInfo !== "" &&
      jobApplyLink !== "" &&
      workQualification.length > 0
    );
  }, [
    industry,
    location,
    role,
    minSalary,
    maxSalary,
    company,
    employmentType,
    employmentMode,
    workQualification,
    experienceInYears,
    qualification,
    genderPreference,
    jobTimings,
    workingDays,
    jobAddress,
    jobInfo,
    jobApplyLink,
  ]);

  return (
    <Button
      colorScheme="blue"
      isDisabled={!isFormValid}
      isLoading={isPending}
      onClick={() =>
        mutate({
          industry,
          location,
          role,
          minSalary,
          maxSalary,
          company,
          employmentType,
          employmentMode,
          workQualification,
          experienceInYears,
          qualification,
          genderPreference,
          languagePreference,
          jobTimings,
          workingDays,
          jobAddress,
          jobInfo,
          jobApplyLink,
        })
      }
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
