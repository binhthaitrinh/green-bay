import React, { lazy } from "react"
import Section from "./Section"
import { SectionHeader } from "./sectionTypos"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper"

import "swiper/swiper-bundle.css"
import {
  Box,
  Divider,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/layout"
import { MdCheckCircle } from "react-icons/md"
import { StaticImage } from "gatsby-plugin-image"

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

const arr = [
  "02 (two) nights stay at Garden view, free upgrade to higher category upon availability",
  "Daily breakfast for a couple",
  "Honeymoon’s room decoration",
  "Welcome Drink",
  "Welcome Fruit",
  "Welcome Red House wine in room",
  "A Romantic Dinner on the Beach/ Rock Bay",
  "A House wine bottle during the Romantic Dinner",
  "A 60 mins Body Massage / pax",
  "Free Shuttle Airport/ Ferry transfers",
  "Complimentary usage of Kayak, Snorkeling, Bicycles… at the resort",
]

const arr2 = [
  "Complimentary 15 minutes Head or Foot massage (apply for Bungalows booking)",
  "Complimentary 60 minutes Body massage* (apply for Villas & Pavilions booking)",
  "Daily Breakfast",
  "Welcome Drink",
  "Welcome Fruit",
  "Free Shuttle Airport/ Ferry transfers",
  "Complimentary usage of, Snorkeling, Bicycles… at the resort",
]

export default function Offers() {
  return (
    <Section>
      <SectionHeader>Packages & offers</SectionHeader>

      <Box>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={swiper => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 5000 }}
          loop
        >
          <SwiperSlide>
            <Grid
              gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
              // gridTemplateRows="1fr"
              w={["", "", "90%"]}
              margin="auto"
              border="1px solid var(--chakra-colors-gray-200)"
              mb="60px"
              minH="740px"
            >
              <Box
                clipPath={[
                  "",
                  "",
                  "",
                  "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                ]}
              >
                <StaticImage
                  quality="60%"
                  src="../images/offer1.jpg"
                  layout="fullWidth"
                  alt="offer 1"
                  style={{
                    height: "100%",
                    // "@media(min-width: 62em)": {
                    //   clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                    // },
                  }}
                />
              </Box>
              <Box p={["30px 16px", "40px 60px"]}>
                <Heading as="h3" color="brandColor" mb="32px" fontSize="40px">
                  Honeymoon package:
                  <br /> 2 nights stay
                </Heading>
                <List spacing={3}>
                  {arr.map(item => (
                    <ListItem key={item}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
                <Divider my="32px" />
                <Text color="brandColor" fontSize="24px" fontWeight="bold">
                  VND 11,170,000 / couple
                </Text>
              </Box>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid
              gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
              w={["", "", "90%"]}
              margin="auto"
              border="1px solid var(--chakra-colors-gray-200)"
              minH="740px"
            >
              <Box
                clipPath={[
                  "",
                  "",
                  "",
                  "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                ]}
              >
                <StaticImage
                  src="../images/offer2.jpg"
                  layout="fullWidth"
                  alt="offer 2"
                  quality="60%"
                  style={{
                    height: "100%",
                    // clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%",
                    //   "@media(min-width: 62em)": {
                    //     clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                    //   },
                  }}
                />
              </Box>
              <VStack
                alignItems="flex-start"
                justify="center"
                p={["30px 16px", "40px 60px"]}
              >
                <Heading as="h3" color="brandColor" fontSize="40px">
                  Special Promotion
                </Heading>
                <Text color="gray.500" mb="32px">
                  Discount 10% for all direct booking
                </Text>
                <List spacing={3}>
                  {arr2.map(item => (
                    <ListItem key={item}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
                <Divider my="32px" />
                <Text color="brandColor" fontSize="24px" fontWeight="bold">
                  VND 11,170,000 / couple
                </Text>
              </VStack>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Section>
  )
}
