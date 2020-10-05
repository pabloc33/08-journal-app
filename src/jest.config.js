module.exports = {
  rootDir: "../../",
  transform: { "^.+.tsx?$": "ts-jest" },
  setupFiles: ["./config/pact/pactSetup.ts"],
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: {
    "^@src/(.)$": "/src/$1",
    "^@test/(.)$": "/test/$1",
  },
  testRegex: "pact.ts$",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./config/pact/pactTestWrapper.js"],
};
