import Icon from "@chakra-ui/icon"
import {
  Box,
  Center,
  Divider,
  Grid,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import Section from "../components/Section"
import { SectionHeader } from "../components/sectionTypos"
import { BsPeople } from "react-icons/bs"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { IoCarSportOutline } from "react-icons/io5"
import { SwiperSlide, Swiper } from "swiper/react"
import Layout from "../components/layout"
import { Container } from "../components/Layout"
import Navbar from "../components/Layout/Navbar"
import { OutlineGatsbyLink } from "../components/Link"
import Seo from "../components/seo"
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { OutlineLink } from "../components/Buttons"

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])
export default function Bungalow({ data }) {
  const [formData, setFormData] = React.useState({
    checkin: "",
    checkout: "",
    numOfGuests: "",
  })

  const onInputChange = e => {
    setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }))
  }

  const {
    title,
    description,
    slug,
    feature,
    numOfPeople,
    image,
    features,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo title={title} />
      <header>
        <Navbar />
      </header>
      <Box py={["32px", "96px"]}>
        <Container>
          <Center>
            <VStack spacing={4} maxW="768px" m="auto">
              <Heading
                as="h1"
                fontSize="48px"
                color="brandColor"
                fontWeight="medium"
                textAlign="center"
                lineHeight="1.2"
              >
                {title}
              </Heading>
              <HStack>
                <HStack>
                  <Icon as={BsPeople} w="20px" h="20px" />
                  <Text>{numOfPeople}</Text>
                </HStack>
                <HStack>
                  <Icon as={IoCarSportOutline} w="20px" h="20px" />
                  <Text>{feature}</Text>
                </HStack>
              </HStack>
              <Text textAlign="center">{description}</Text>
              <OutlineGatsbyLink
                to="/"
                rightIcon={<HiOutlineArrowNarrowRight />}
              >
                Book now
              </OutlineGatsbyLink>
            </VStack>
          </Center>
          <Box my={8}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSwiper={swiper => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{ delay: 5000 }}
              loop
            >
              {data.allImageSharp.edges.map((edge, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box
                      width={["100%", "90%"]}
                      m="auto"
                      mb={10}
                      h={["200px", "300px", "300px", "700px"]}
                    >
                      <GatsbyImage
                        image={edge.node.gatsbyImageData}
                        alt="beachfront"
                        style={{ maxHeight: "100%", objectFit: "cover" }}
                      />
                      {/* <StaticImage
                        quality="100%"
                        src={`../images/${img}`}
                        alt="offer 1"
                        layout="fullWidth"
                        objectFit="cover"
                        style={{ maxHeight: "100%" }}
                      /> */}
                    </Box>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Box>
          <Section py={["32px", "96px"]}>
            <SectionHeader>Facilities</SectionHeader>
            <Stack
              direction={["column", "row"]}
              width="100%"
              alignItems="flex-start"
              justifyContent="center"
              spacing={6}
            >
              <VStack
                border="1px solid var(--chakra-colors-gray-200)"
                padding={["30px 30px", "30px 80px"]}
                spacing={4}
                width="100%"
                divider={<Divider variant="dashed" />}
              >
                {features.slice(0, Math.ceil(features.length / 2)).map(fea => (
                  <Box key={fea}>
                    <Text>{fea}</Text>
                  </Box>
                ))}
              </VStack>
              <VStack
                border="1px solid var(--chakra-colors-gray-200)"
                padding={["30px 30px", "30px 80px"]}
                width="100%"
                spacing={4}
                divider={<Divider variant="dashed" />}
              >
                {features.slice(Math.ceil(features.length / 2)).map(fea => (
                  <Box key={fea}>
                    <Text>{fea}</Text>
                  </Box>
                ))}
              </VStack>
            </Stack>
          </Section>
          <Section py={["32px", "96px"]}>
            <SectionHeader>Book now</SectionHeader>
            <Grid
              gridTemplateColumns={[
                "1fr",
                "repeat(auto-fill, minmax(350px, 1fr))",
              ]}
              gridGap={4}
            >
              <FormControl id="checkin">
                <FormLabel>Check-in date</FormLabel>
                <Input
                  type="date"
                  name="checkin"
                  borderRadius={0}
                  value={formData.checkin}
                  onChange={onInputChange}
                />
              </FormControl>
              <FormControl id="checkout">
                <FormLabel>Check-out date</FormLabel>
                <Input
                  type="date"
                  borderRadius={0}
                  name="checkout"
                  value={formData.checkout}
                  onChange={onInputChange}
                />
              </FormControl>
              <FormControl id="numOfGuests">
                <FormLabel>Guests</FormLabel>
                <Input
                  type="number"
                  placeholder="2"
                  borderRadius={0}
                  name="numOfGuests"
                  value={formData.numOfGuests}
                  onChange={onInputChange}
                />
              </FormControl>
            </Grid>
            <Center>
              <OutlineLink href="/" mt={8}>
                See availability
              </OutlineLink>
            </Center>
          </Section>
          <Section py={["32px", "96px"]}>
            <SectionHeader>Other stay</SectionHeader>

            <VStack spacing="60px">
              {data.allMarkdownRemark.edges.map((edge, index) => {
                const {
                  node: { frontmatter },
                } = edge
                return (
                  <Stack
                    key={frontmatter.slug}
                    flexDirection={["column", "row"]}
                    spacing={0}
                    flexWrap="wrap"
                    width="100%"
                  >
                    <Box flexBasis="40%" height={["300px", "600px"]}>
                      <Link to={`/accomodations/${frontmatter.slug}`}>
                        <GatsbyImage
                          image={getImage(frontmatter.cover)}
                          alt={frontmatter.title}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Link>
                    </Box>
                    <VStack
                      flexBasis="60%"
                      order={[1, 1, 1, index % 2 === 1 ? -1 : 1]}
                      justifyContent="center"
                      alignItems="flex-start"
                    >
                      <VStack
                        padding={["30px 15px", "80px 60px"]}
                        border="1px solid var(--chakra-colors-gray-200)"
                        width="100%"
                        alignItems="flex-start"
                      >
                        <Link to={`/accomodations/${frontmatter.slug}`}>
                          <Heading
                            as="h4"
                            fontWeight="medium"
                            color="brandColor"
                            fontSize="32px"
                          >
                            {frontmatter.title}
                          </Heading>
                        </Link>
                        <HStack>
                          <HStack>
                            <Icon as={BsPeople} w="20px" h="20px" />
                            <Text>{frontmatter.numOfPeople}</Text>
                          </HStack>
                          <HStack>
                            <Icon as={IoCarSportOutline} w="20px" h="20px" />
                            <Text>{frontmatter.feature}</Text>
                          </HStack>
                        </HStack>
                        <Text>{description}</Text>
                        <OutlineGatsbyLink
                          to={`/accomodations/${frontmatter.slug}`}
                        >
                          Read more
                        </OutlineGatsbyLink>
                      </VStack>
                    </VStack>
                  </Stack>
                )
              })}
            </VStack>
          </Section>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $regex: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/accomodations/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        title
        description
        slug
        feature
        numOfPeople
        features
      }
    }
    allImageSharp(filter: { fluid: { originalName: { regex: $regex } } }) {
      edges {
        node {
          gatsbyImageData(quality: 60, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/accomodations/" }
        frontmatter: { slug: { ne: $slug }, role: { ne: "overview" } }
      }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            numOfPeople
            feature
            description
            slug
            cover {
              childImageSharp {
                gatsbyImageData(quality: 100, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
