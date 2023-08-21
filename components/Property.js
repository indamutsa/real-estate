// Importing necessary modules
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

// Importing default image
import DefaultImage from "../assets/images/house.jpg";

// A function to convert AED to USD, and round it
const convertAEDtoUSD = (price) => {
  const rate = 0.27;
  return Math.round(price * rate);
};

// Defining Property component
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  // Linking to property page
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      {/* The default photo or cover image */}
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
        />
      </Box>
      {/* The property details */}
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            {/* The status of verification */}
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            {/* The price of the property */}
            <Text fontWeight="bold" fontSize="lg">
              USD {convertAEDtoUSD(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          {/* The agency logo */}
          <Box>
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        {/* The property room details */}
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        {/* The property title */}
        <Text fontSize="lg">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

// Exporting Property component
export default Property;
