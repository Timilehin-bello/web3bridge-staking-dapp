import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";

const CreatePoolComponent = () => {
  const [value, setValue] = useState(0);

  const handleCreatePool = useCreatePool(value);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Flex justify="start">
          <Button className="bg-green-600">Create a Pool</Button>
        </Flex>
      </Dialog.Trigger>

      <Dialog.Content
        style={{ maxWidth: 450, color: "black", backgroundColor: "white" }}
      >
        <Dialog.Title>Create a Pool</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Create a Pool
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Enter reward value
            </Text>
            <TextField.Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter Voter's value"
              className="bg-white text-black"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="around">
          <Dialog.Close>
            <Button variant="soft" color="gray" mr="4">
              Cancel
            </Button>
          </Dialog.Close>
          <Button className="bg-blue-600" onClick={handleCreatePool}>
            Create a Pool
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CreatePoolComponent;
