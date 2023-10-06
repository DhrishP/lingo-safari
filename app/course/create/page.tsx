"use client";
import { Button } from "@/components/ui/button";
import Heading from "@/components/header";
import { Trash as TrashIcon } from "lucide-react";
import * as z from "zod";
import { Input } from "@/components/ui/input";
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
import { AlertModal } from "@/components/AlertModal";

const formSchema = z.object({
  Title: z.string().min(1),
  Image: z.object({ url: z.string() }).array().min(1),
  price: z.number().min(1),
});

const CourseFormPage = () => {
  const title = "Create a course";
  const description = "Add a new course";
  const buttontag = "Create";
  const toastMsg = "Added new course";

  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: "",
      Image: [],
      price: 0,
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setloading(true);
      const res = await axios.post(`/api/${params.StoreId}/courses`, values);

      toast.success(toastMsg);
      router.refresh();
      router.push(`/${params.StoreId}/courses`);
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      setloading(false);
    }
  };

  const Handledelete = async () => {
    try {
      setloading(true);
      await axios.delete(`/api/${params.StoreId}/courses/${params.courseId}`);
      toast.success("course successfully deleted");
      router.refresh();
      router.push(`/${params.StoreId}/courses`);
    } catch (err) {
      toast.error(
        "Please delete all the categories before deleting this first"
      );
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        loading={loading}
        onClose={() => {
          setOpen(false);
        }}
        onConfirm={Handledelete}
      />
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
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="Image"
                render={({ field }) => (
                  <FormItem className="">
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
            </div>
            <div>
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
            </div>

            <div>
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
            </div>
            <div>hi</div>
          </form>
          <div className={cn("flex mt-2 ")}>
            <Button
            variant={'ghost'}
            className="border border-purple-300 rounded-[6px]"
              disabled={loading}
              type="submit"
            >
              {buttontag}
            </Button>
          </div>
        </Form>
      </div>
      <div className="flex items-start">
        {" "}
        <div className="gradient1"></div>
      </div>
    </>
  );
};

export default CourseFormPage;
