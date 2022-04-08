import { startApplication } from "@app/main/start-application";

startApplication()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Server started successfully");
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to start server: ", error);
    process.exit(1);
  });
