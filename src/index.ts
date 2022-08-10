import "./styles.css";

type IoPrintButton = HTMLElement & { assetUrl: string };

const SCRIPT_URL = process.env.SCRIPT_URL ?? "";
const ASSET_URL = process.env.ASSET_URL ?? "";

const script = document.createElement("script");
script.type = "text/javascript";
script.src = SCRIPT_URL;

const head = document.getElementsByTagName("head")[0];
head.appendChild(script);

const body = document.getElementsByTagName("body")[0];
const printButton = document.createElement("io-print-button") as IoPrintButton;
printButton.assetUrl = ASSET_URL;

body.appendChild(printButton);
