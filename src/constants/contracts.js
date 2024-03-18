import { ethers } from "ethers";
import Abi from "./stakeAbi.json";
import tokenAbi from "./token.json";

export const getContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_contract_address,
    Abi,
    providerOrSigner
  );

export const getStakeContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_stake_address,
    tokenAbi,
    providerOrSigner
  );

export const getRewardContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_reward_address,
    tokenAbi,
    providerOrSigner
  );
