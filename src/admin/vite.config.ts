import { mergeConfig, type UserConfig } from "vite";

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      allowedHosts: [
        "gabrielrossetto.dev", // Allow your specific host here
        "localhost", // You can add other hosts as needed
        "127.0.0.1",
      ],
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
