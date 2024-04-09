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
import { ReloadIcon } from "@radix-ui/react-icons";
import { useEditReview } from "../../../hooks/useReview";

const ReviewEditModal = ({ review }: { review: Review }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateReview, setStateReview] = useState<Review>(review);

  const { mutate, isPending } = useEditReview();
  return (
    <>
      <Button pos="absolute" onClick={onOpen} zIndex={10} right={4}>
        Edit
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Review
            <Button
              leftIcon={<ReloadIcon />}
              size="xs"
              ml={4}
              onClick={() => setStateReview(review)}
            >
              Reset
            </Button>
          </ModalHeader>
          <ModalCloseButton onClick={() => setStateReview(review)} />
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
                !stateReview.shortReview ||
                JSON.stringify(review) === JSON.stringify(stateReview)
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

export default ReviewEditModal;
