import { env } from "@/constants";

// COLORS: https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors

class ConsolePrint {
  type = "log";

  success = (content) => {
    this.type = "info";
    return env === "development" ? this.green(content) : undefined;
  };

  info = (content) => {
    this.type = "info";
    return env === "development" ? this.cyan(content) : undefined;
  };

  log = (content) => {
    this.type = "log";
    return env === "development" ? this.white(content) : undefined;
  };

  error = (content) => {
    this.type = "error";
    return env === "development" ? this.red(content) : undefined;
  };

  warn = (content) => {
    this.type = "warn";
    return env === "development" ? this.yellow(content) : undefined;
  };

  red = (content) => console[this.type](`\x1b[31m${content}\x1b[0m`);

  green = (content) => console[this.type](`\x1b[32m${content}\x1b[0m`);

  yellow = (content) => console[this.type](`\x1b[33m${content}\x1b[0m`);

  blue = (content) => console[this.type](`\x1b[34m${content}\x1b[0m`);

  magenta = (content) => console[this.type](`\x1b[35m${content}\x1b[0m`);

  cyan = (content) => console[this.type](`\x1b[36m${content}\x1b[0m`);

  white = (content) => console[this.type](`\x1b[37m${content}\x1b[0m`);

  brightBlack = (content) => console[this.type](`\x1b[90m${content}\x1b[0m`);

  brightRed = (content) => console[this.type](`\x1b[91m${content}\x1b[0m`);

  brightGreen = (content) => console[this.type](`\x1b[92m${content}\x1b[0m`);

  brightYellow = (content) => console[this.type](`\x1b[93m${content}\x1b[0m`);

  brightBlue = (content) => console[this.type](`\x1b[94m${content}\x1b[0m`);

  brightMagenta = (content) => console[this.type](`\x1b[95m${content}\x1b[0m`);

  brightCyan = (content) => console[this.type](`\x1b[96m${content}\x1b[0m`);

  brightWhite = (content) => console[this.type](`\x1b[97m${content}\x1b[0m`);
}

const ConsolePrintInstance = new ConsolePrint();

export default ConsolePrintInstance;
