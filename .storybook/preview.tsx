import React from "react";
import "tailwindcss/tailwind.css";
import { MantineProvider } from "@mantine/core";
// import theme object you've exported in previous step
import { theme } from "./theme.mantine";
import { useDarkMode } from "storybook-dark-mode";

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{ ...theme, colorScheme: useDarkMode() ? "dark" : "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      {props.children}
    </MantineProvider>
  );
}

export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];

// export const parameters = {
//   backgrounds: {
//     default: "light",
//   },
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
