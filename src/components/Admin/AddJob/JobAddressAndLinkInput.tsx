import { FormControl, FormLabel, Textarea, Input } from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import useEditJobStore from "../../../store/editJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";

const JobAddressAndLinkInput = ({ edit }: EditJobInputProps) => {
  const jobAddress = useAddJobStore((s) => s.jobAddress);
  const setJobAddress = useAddJobStore((s) => s.setJobAddress);
  const jobApplyLink = useAddJobStore((s) => s.jobApplyLink);
  const setLink = useAddJobStore((s) => s.setJobApplyLink);

  const editjobAddress = useEditJobStore((s) => s.jobAddress);
  const seteditJobAddress = useEditJobStore((s) => s.setJobAddress);
  const editjobApplyLink = useEditJobStore((s) => s.jobApplyLink);
  const seteditLink = useEditJobStore((s) => s.setJobApplyLink);

  return (
    <>
      <FormControl>
        <FormLabel> Job Address</FormLabel>
        <Textarea
          value={edit ? editjobAddress : jobAddress}
          onChange={(e) =>
            edit
              ? seteditJobAddress(e.target.value)
              : setJobAddress(e.target.value)
          }
          variant="filled"
          placeholder="Job Address"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Apply Link </FormLabel>
        <Input
          value={edit ? editjobApplyLink : jobApplyLink}
          onChange={(e) =>
            edit ? seteditLink(e.target.value) : setLink(e.target.value)
          }
          variant="filled"
          placeholder="Job Apply Link"
        />
      </FormControl>
    </>
  );
};

export default JobAddressAndLinkInput;
