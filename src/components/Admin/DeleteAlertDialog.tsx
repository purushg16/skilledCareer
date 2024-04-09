import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDelIndustry } from "../../hooks/useIndustry";
import { useDelJob } from "../../hooks/useJob";
import { useDelReview } from "../../hooks/useReview";

interface Props {
  heading: string;
  isOpen: boolean;
  onClose: () => void;
  field: "job" | "industry" | "review";
  jobId?: string | undefined;
  sectorId?: string | undefined;
  reviewId?: string | undefined;
}

const DeleteAlertDialog = ({
  heading,
  isOpen,
  onClose,
  field,
  jobId,
  sectorId,
  reviewId,
}: Props) => {
  const cancelRef = useRef(null);

  const { mutate: delIndustry, isPending: isIndLoading } =
    useDelIndustry(onClose);
  const { mutate: delJob, isPending: isJobLoading } = useDelJob(onClose);
  const { mutate: delReview, isPending: isReviewLoading } =
    useDelReview(onClose);

  const onDelete = () => {
    if (field === "job" && jobId) delJob({ jobId: jobId });
    if (field === "industry" && sectorId) delIndustry({ sectorId: sectorId });
    if (field === "review" && reviewId) delReview({ reviewId: reviewId });
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete {heading}
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={onDelete}
              ml={4}
              isLoading={isReviewLoading || isIndLoading || isJobLoading}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteAlertDialog;
