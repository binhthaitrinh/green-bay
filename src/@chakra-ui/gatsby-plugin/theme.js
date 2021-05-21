import { extendTheme } from "@chakra-ui/react"

const theme = {
  styles: {
    global: {
      body: {
        color: "#4A5568",
      },
      article: {
        h2: {
          color: "#367639",
          fontSize: "32px",
          fontFamily: "Canela, serif",
          fontWeight: "medium",
          _notFirst: {
            marginTop: "48px",
          },
          _before: {
            display: "block",
            content: '""',
            width: "50px",
            height: "4px",
            backgroundColor: "#367639",
          },
        },
        p: {
          marginBottom: "16px",
        },
      },
    },
  },
  fonts: {
    body: "Acherus Grotesque, sans-serif",
    heading: "Canela, serif",
    mono: "Menlo, monospace",
  },
  colors: {
    brandColor: "#367639",
    green: {
      // 50: "#EEF7EE",
      // 100: "#CEE9CF",
      // 200: "#AFDAB1",
      // 300: "#8FCC92",
      // 400: "#70BD73",
      // 500: "#50AF55",
      // 600: "#408C44",
      // 700: "#306933",
      // 800: "#204622",
      // 900: "#102311",
    },
  },
}

export default extendTheme(theme)
