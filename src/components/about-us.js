import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/layout"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Section from "./Section"
import { SectionHeader } from "./sectionTypos"

export default function AboutUs() {
  return (
    <Section>
      <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(2,1fr)"]}
        gridGap={["50px", "50px", "50px", "100px"]}
      >
        <Box p={[0, 0, 0, "100px 15px"]}>
          <VStack alignItems="flex-start" color="gray.500">
            <Heading as="h3" color="gray.500" fontSize="24px">
              About us
            </Heading>
            <SectionHeader>Our story</SectionHeader>
            <VStack spacing="16px">
              <Text>
                From the moment we first walked through an uninhabited tropical
                forest on Phu Quoc Island and discovered a pristine beach in a
                secluded coral bay boasting panoramic views across the Gulf of
                Thailand, we were inspired to create Green Bay Resort.{" "}
              </Text>
              <Text>
                We immediately had a vision of an eco-conscious, five-star
                boutique resort that nurtured the natural beauty of one of the
                secluded Vietnam beaches. Our goal was to develop a world class
                resort in Phu Quoc without disturbing the island’s enchanting,
                rustic aura. Our luxurious lodgings incorporate natural and
                sustainably-sourced materials while featuring all of the modern
                amenities that guests would expect from a superlative boutique
                holiday experience.
              </Text>

              <Text>
                {" "}
                Every day you will see a team of gardeners carefully maintaining
                the bucolic beauty throughout the resort. Each and every detail
                throughout our resort – from the serene setting of our spa
                through the restaurants and to the infinity pool bar that
                overlooks a pristine shoreline and the turquoise waters of a
                coral fringed-bay, guests will appreciate how Green Bay Resort
                strives to protect its most precious asset: the natural beauty
                of Phu Quoc Island.
              </Text>
            </VStack>
          </VStack>
        </Box>
        <Box>
          <StaticImage
            src="../images/about-us.jpg"
            style={{ height: "100%" }}
            alt="greenbay"
          />
        </Box>
      </Grid>
    </Section>
  )
}
