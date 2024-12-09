'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { LabelInputContainer } from '../ui/label-input-conteiner';
import { BottomGradient } from '../ui/button-gradient';

interface FormMessage {
  name: string;
  email: string;
  message: string;
}

export default function OrderFormLayout(): React.JSX.Element {
  const [formData, setFormData] = useState<FormMessage>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=arizkymuhammad46@gmail.com&su=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.open(gmailLink, '_blank');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <LabelInputContainer className='w-full'>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Place your name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value })
            }}
            type="text"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className='w-full'>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
            }}
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className='w-full'>
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="What will we plan..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value })
            }}
            type="message"
            required
          />
        </LabelInputContainer>

        <button
          className="mt-3 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Les't get started &rarr;
          <BottomGradient />
        </button>
      </form>
    </>
  )
}