import { Button, Flex, HStack, Spacer } from "@chakra-ui/react";
import { ArrowLeftIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const JobApplyFooter = ({ link }: { link: string | undefined }) => {
  return (
    <Flex w="100%" pb={8}>
      <Spacer />
      <HStack gap={4}>
        <Link to="/jobs">
          <Button leftIcon={<ArrowLeftIcon />} variant="outline">
            Back
          </Button>
        </Link>

        <Link to={link!} target="_blank">
          <Button colorScheme="blue" rightIcon={<ExternalLinkIcon />}>
            Apply Now
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default JobApplyFooter;
