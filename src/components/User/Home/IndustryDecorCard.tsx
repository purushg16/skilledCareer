import { Card, Heading, Icon } from "@chakra-ui/react";
import { Industry } from "../../../entities/industry";
import useJobQueryStore from "../../../store/jobQueryStore";
import { useNavigate } from "react-router-dom";
import { SketchLogoIcon } from "@radix-ui/react-icons";

const IndustryDecorCard = ({ indutry }: { indutry: Industry }) => {
  const setIndustries = useJobQueryStore((s) => s.setIndustry);
  const navigate = useNavigate();

  return (
    <Card
      bg="blue.50"
      color="black"
      display="flex"
      flexDir="column"
      minW={100}
      minH={150}
      align="end"
      justify="space-between"
      p={4}
      borderRadius={5}
      cursor="pointer"
      onClick={() => {
        setIndustries(indutry.sector);
        navigate("/jobs");
      }}
    >
      <Icon as={SketchLogoIcon} />
      <Heading fontSize="sm" textTransform="capitalize">
        {indutry.sector}
      </Heading>
    </Card>
  );
};

export default IndustryDecorCard;
