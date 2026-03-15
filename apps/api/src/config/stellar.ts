import { Server, Networks } from "stellar-sdk";

const STELLAR_NETWORK = process.env.STELLAR_NETWORK || "testnet";

const HORIZON_URL =
  process.env.STELLAR_HORIZON_URL ||
  "https://horizon-testnet.stellar.org";

export const stellarConfig = {
  network: STELLAR_NETWORK,
  horizonUrl: HORIZON_URL,
  networkPassphrase:
    STELLAR_NETWORK === "mainnet"
      ? Networks.PUBLIC
      : Networks.TESTNET,
};

export const stellarServer = new Server(stellarConfig.horizonUrl);
