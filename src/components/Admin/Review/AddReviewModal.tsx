import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Review from "../../../entities/review";
import { useState } from "react";
import { useAddReview } from "../../../hooks/useReview";
import { PlusIcon } from "@radix-ui/react-icons";

const AddReviewModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateReview, setStateReview] = useState<Review>({
    company: "",
    briefReview: "",
    name: "",
    rating: parseInt(""),
    shortReview: "",
  });

  const { mutate, isPending } = useAddReview();
  return (
    <>
      <Button
        size="sm"
        colorScheme="blue"
        onClick={onOpen}
        leftIcon={<PlusIcon />}
      >
        New Review
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={8} align="start">
              <FormControl>
                <FormLabel> Company Name </FormLabel>
                <Input
                  placeholder="Company Name"
                  value={stateReview.company}
                  onChange={(e) =>
                    setStateReview({ ...stateReview, company: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel> Rating </FormLabel>
                <Input
                  type="number"
                  value={stateReview.rating}
                  onChange={(e) => {
                    const ratingNum = parseFloat(e.target.value);
                    const rating = !isNaN(ratingNum)
                      ? ratingNum > 5
                        ? 5
                        : ratingNum <= 0
                        ? 0.5
                        : ratingNum
                      : parseInt("");

                    setStateReview({
                      ...stateReview,
                      rating: parseFloat(rating.toPrecision(2)),
                    });
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel> User Name </FormLabel>
                <Input
                  placeholder="User Name"
                  value={stateReview.name}
                  onChange={(e) =>
                    setStateReview({ ...stateReview, name: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel> Short Review </FormLabel>
                <Input
                  placeholder="Short Review"
                  value={stateReview.shortReview}
                  onChange={(e) =>
                    setStateReview({
                      ...stateReview,
                      shortReview: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel> Breif Review </FormLabel>
                <Textarea
                  placeholder="Breif Review"
                  value={stateReview.briefReview}
                  onChange={(e) =>
                    setStateReview({
                      ...stateReview,
                      briefReview: e.target.value,
                    })
                  }
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => mutate(stateReview)}
              isLoading={isPending}
              isDisabled={
                isNaN(stateReview.rating) ||
                !stateReview.briefReview ||
                !stateReview.company ||
                !stateReview.name ||
                !stateReview.shortReview
              }
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddReviewModal;
