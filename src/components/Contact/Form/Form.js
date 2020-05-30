import React from "react"
import { useForm } from "react-hook-form"

import { Wrapper, InputDiv, Label, TextInput, TextArea, Submit } from "./styles"

const Form = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <Label htmlFor="name">Name</Label>
        <TextInput
          type="text"
          name="name"
          id="name"
          ref={register({ required: true })}
        />
      </InputDiv>

      <InputDiv>
        <Label htmlFor="email">Email</Label>
        <TextInput
          type="email"
          id="email"
          name="name"
          ref={register({ required: true })}
        />
      </InputDiv>

      <InputDiv>
        <Label htmlFor="discuss">Tell Me What You'd Like To Discuss</Label>
        <TextArea
          name="discuss"
          id="discuss"
          rows="5"
          cols="25"
          ref={register({ required: true })}
        />
      </InputDiv>

      <Submit type="submit" name="submit" value="Submit" />
    </Wrapper>
  )
}

export { Form }
