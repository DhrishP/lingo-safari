"use client";
import { Button } from "@/components/ui/button";
import Heading from "@/components/header";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import TextareaAutosize from "react-textarea-autosize";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import ImageUpload from "@/components/ui/Imageupload";

const formSchema = z.object({
  Title: z.string().min(1),
  Image: z.object({ url: z.string() }).array().min(1),
  price: z.string().min(1),
  descriptionn: z.string().min(1),
});

const CourseFormPage = () => {
  const title = "Create a course";
  const description = "Add a new course";
  const buttontag = "Create";
  const toastMsg = "Added new course";

  const [loading, setloading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: "",
      Image: [],
      price: "",
      descriptionn: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        console.log("hi")
      console.log(values);
      setloading(true);
      //   const res = await axios.post(`/api/${params.StoreId}/courses`, values);

      //   toast.success(toastMsg);
      //   router.refresh();
      //   router.push(`/${params.StoreId}/courses`);
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className="flex  items-center justify-between pt-6 px-6">
        <div>
          <Heading title={title} description={description} />
        </div>
      </div>
      <div className="pl-6 w-full  mt-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 grid grid-cols-2 gap-x-2"
          >
         
              <FormField 
                control={form.control}
                name="Image"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <ImageUpload
                        values={field.value.map((image) => image.url)}
                        disabled={loading}
                        onChange={(url) =>
                          field.onChange([...field.value, { url }])
                        }
                        onRemove={(url) =>
                          field.onChange([
                            ...field.value.filter(
                              (current) => current.url !== url
                            ),
                          ])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
           
           
              {" "}
              <FormField
                control={form.control}
                name="Title"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="font-bold text-primary ">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="course text.."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
    

  
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={loading}
                        placeholder="9.99"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
       
       
              <FormField
                control={form.control}
                name="descriptionn"
                render={({ field }) => (
                  <FormItem className="flex items-start  justify-start flex-col">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <TextareaAutosize
                        className="bg-black text-white rounded-lg"
                        cols={30}
                        placeholder="tell  us something about the features of your course.."
                        minRows={10}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
        

            <Button
              variant={"ghost"}
              className="border border-purple-300 inline-block w-1/5  col-span-2 mt-2 rounded-[6px]"
              disabled={loading}
              type="submit"
            >
              {buttontag}
            </Button>
          </form>
        </Form>
      </div>
        <div className="gradient1"></div>
   
    </>
  );
};

export default CourseFormPage;
