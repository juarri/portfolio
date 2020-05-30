import React from "react"
import { useForm } from "react-hook-form"

import { Wrapper, InputDiv, Label, TextInput, TextArea, Submit } from "./styles"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...e }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <Wrapper
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <InputDiv>
        <Label htmlFor="name">Name</Label>
        <TextInput
          type="text"
          id="name"
          name="name"
          ref={register({ required: true })}
        />
      </InputDiv>

      <InputDiv>
        <Label htmlFor="email">Email</Label>
        <TextInput
          type="email"
          id="email"
          name="email"
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

      <Submit type="submit">Submit</Submit>
    </Wrapper>
  )
}

export { Form }
