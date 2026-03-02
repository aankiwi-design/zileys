"use strict'
const chalk = require("chalk");
const gradient = require("gradient-string");

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();
console.log(
  `
> Zileys | WhatsApp API
> Thanks for using this Zileys Modified Baileys!
`
console.log();
console.log(
  chalk.bold(
    gradient(['magenta', 'cyan'])('> Modifed developer by. Sazyy <')
  )
);
console.log();
    .split('\n')
    .map(line =>
      line
        .split('')
        .map((ch, i, arr) => {
          const t = i / (arr.length - 1 || 1)
          const r = Math.round(0 + (0 - 0) * t)
          const g = Math.round(120 + (255 - 120) * t)
          const b = Math.round(255 + (120 - 255) * t)
          return `\x1b[38;2;${r};${g};${b}m${ch}`
        })
        .join('') + '\x1b[0m'
    )
    .join('\n')
)

const __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k

        let desc = Object.getOwnPropertyDescriptor(m, k)

        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            }
          }
        }

        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
