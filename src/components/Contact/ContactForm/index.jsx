import Input from "@/components/Input";
import Button from "@/components/Button";

export default function ContactForm() {
  return (
    <form
      netlify
      name="contact"
      action="/contact-me-success"
      className="mx-auto flex h-full w-[372px] flex-col justify-center gap-6"
    >
      <Input type="text" label="name">
        _name:
      </Input>
      <Input type="email" label="email">
        _email:
      </Input>
      <Input type="textarea" label="message">
        _message:
      </Input>
      <Button as="button" type="submit">
        submit-message
      </Button>
    </form>
  );
}
