import { Flex, Tag, TagCloseButton } from "@chakra-ui/react";
import useJobQueryStore from "../../../store/jobQueryStore";
import FilterTag from "./FilterTag";

const FiltersStack = () => {
  const minSalary = useJobQueryStore((s) => s.minSalary);
  const setMinSalary = useJobQueryStore((s) => s.setMinSalary);

  const workQualification = useJobQueryStore((s) => s.workQualification);
  const setWorkQualification = useJobQueryStore((s) => s.setWorkQualification);

  const qualification = useJobQueryStore((s) => s.qualification);
  const setQualification = useJobQueryStore((s) => s.setQualification);

  const employmentMode = useJobQueryStore((s) => s.employmentMode);
  const setEmploymentMode = useJobQueryStore((s) => s.setEmploymentMode);

  const { location, industry, clearFilters } = useJobQueryStore();

  const isAnyFilterApplied = () => {
    return (
      location.length > 0 ||
      workQualification !== "" ||
      qualification !== "" ||
      industry.length > 0 ||
      minSalary !== 0 ||
      employmentMode.length > 0
    );
  };

  return (
    <Flex gap={4} flexWrap="wrap">
      {minSalary !== 0 && minSalary !== parseInt("") && (
        <FilterTag
          value={`Min. Salary: ${minSalary}`}
          del={() => setMinSalary(0)}
        />
      )}
      {workQualification !== "" && !!workQualification && (
        <FilterTag
          value={workQualification}
          del={() => setWorkQualification("")}
        />
      )}

      {qualification !== "" && !!qualification && (
        <FilterTag value={qualification} del={() => setQualification("")} />
      )}
      {employmentMode.length > 0 &&
        employmentMode.map((mode) => (
          <FilterTag
            key={mode}
            value={mode}
            del={() => setEmploymentMode(mode)}
          />
        ))}

      {isAnyFilterApplied() && (
        <Tag size="sm">
          Clear All <TagCloseButton onClick={clearFilters} />
        </Tag>
      )}
    </Flex>
  );
};

export default FiltersStack;
