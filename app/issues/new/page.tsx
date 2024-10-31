import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function NewIssuePage() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Description"></TextArea>
      <Button>Submit New Issue</Button>
    </div>
  );
}

export default NewIssuePage;
