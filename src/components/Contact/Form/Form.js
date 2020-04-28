import React from "react"
import { useForm } from "react-hook-form"

import { Wrapper, InputDiv, Label, TextInput, TextArea, Submit } from "./styles"

const Form = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <Label for="name">Name</Label>
        <TextInput
          type="text"
          name="name"
          id="name"
          ref={register({ required: true })}
        />
      </InputDiv>

      <InputDiv>
        <Label for="email">Email</Label>
        <TextInput
          type="email"
          id="email"
          name="name"
          ref={register({ required: true })}
        />
      </InputDiv>

      <InputDiv>
        <Label for="discuss">Tell Me What You'd Like To Discuss</Label>
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
