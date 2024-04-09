import { useMemo } from "react";
import { useEditJob } from "../../../hooks/useJob";
import useEditJobStore from "../../../store/editJobStore";
import { Button } from "@chakra-ui/react";

const EditJobSubmitButton = () => {
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
  } = useEditJobStore((state) => state);

  const { mutate, isPending } = useEditJob();

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
      jobTimings.split("to")[0].length >= 8 &&
      jobTimings.split("to")[1].length >= 8 &&
      workingDays !== "" &&
      workingDays.split("to")[0].length >= 3 &&
      workingDays.split("to")[1].length >= 3 &&
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
      Save Changes
    </Button>
  );
};

export default EditJobSubmitButton;
