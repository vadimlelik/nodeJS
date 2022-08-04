import { App } from "./app";
import { ExaptionFilter } from "./errors/exetpionFilter";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controler";

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ExaptionFilter(logger)
  );
  await app.init();
}

bootstrap();
