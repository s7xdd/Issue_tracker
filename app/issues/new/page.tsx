'use client';
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form'

interface IssueForm{
  title: String, 
  description: String;
}


function NewIssuePage() {
  const { register, control } = useForm<IssueForm>();
  console.log(register)


  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" {...register('title')}/>
      <Controller
       name='description'
       control={control}
       render={({ field }) => <SimpleMDE placeholder="Description" />}
       />
      
      <Button>Submit New Issue</Button>
    </div>
  );
}

export default NewIssuePage;
