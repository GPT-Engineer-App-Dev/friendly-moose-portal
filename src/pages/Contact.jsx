import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Contact Us</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...register("name", { required: "Name is required" })} />
            </FormControl>
            <FormMessage>{errors.name && errors.name.message}</FormMessage>
          </FormItem>
        </FormField>
        <FormField>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...register("email", { required: "Email is required" })} />
            </FormControl>
            <FormMessage>{errors.email && errors.email.message}</FormMessage>
          </FormItem>
        </FormField>
        <FormField>
          <FormItem>
            <FormLabel>Subject</FormLabel>
            <FormControl>
              <Input {...register("subject", { required: "Subject is required" })} />
            </FormControl>
            <FormMessage>{errors.subject && errors.subject.message}</FormMessage>
          </FormItem>
        </FormField>
        <FormField>
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea {...register("message", { required: "Message is required" })} />
            </FormControl>
            <FormMessage>{errors.message && errors.message.message}</FormMessage>
          </FormItem>
        </FormField>
        <Button type="submit" className="mt-4">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;