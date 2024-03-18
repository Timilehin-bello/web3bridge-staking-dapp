import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";

const useCreatePool = (rewardRate) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getContract(signer);

    // const rewardContract = getRewardContract(signer);

    try {
      // const approveTransaction = await rewardContract.approve(
      //   import.meta.env.VITE_contract_address,
      //   10
      // );
      // await approveTransaction.wait();
      const transaction = await contract.createPool(rewardRate);

      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success("Create Pool successful!");
      }

      toast.error("Create Pool failed!");
    } catch (error) {
      console.error("error: ", error);
    }
  }, [rewardRate, chainId, walletProvider]);
};

export default useCreatePool;
