import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useStake from "../hooks/useStake";

const StakeComponent = ({ poolId }) => {
  const [amount, setAmount] = useState(0);

  const handleStake = useStake(poolId, amount);

  return (
    <Dialog.Root className="bg-white text-black">
      <Dialog.Trigger>
        <Button className="bg-green-600">Stake</Button>
      </Dialog.Trigger>

      <Dialog.Content
        style={{ maxWidth: 450, color: "black", backgroundColor: "white" }}
      >
        <Dialog.Title>Stake</Dialog.Title>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Enter stake value
            </Text>
            <TextField.Input
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter stake value"
              className="bg-white text-black"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button className="bg-blue-600" onClick={handleStake}>
            Stake
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default StakeComponent;
