import DatePicker from "../../components/DatePicker";
import Input from "../../components/Input";
import { MyItem, MySelect } from "../../components/Select";
import { z } from "zod";
import {
  SubmitHandler,
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLocalTimeZone } from "@internationalized/date";
import Button from "../../components/Button";
import {
  Invoice_Constraint,
  Invoice_FieldsFragmentDoc,
  Invoice_Status_Enum,
  InvoicesDocument,
  Payment_Terms_Enum,
  useUpsertInvoiceMutation,
} from "../../generated/graphql";

const paymentTermsSchema = z.enum(["Net1", "Net7", "Net14", "Net30"]);
const invoiceSchema = z.object({
  street_address_from: z.string().min(1, "Street address is required"),
  city_from: z.string().min(1, "City is required"),
  post_code_from: z.string().min(1, "Post Code is required"),
  country_from: z.string().min(1, "Country is required"),
  client_name: z.string().min(1, "Client's name is required"),
  client_email: z.string().email("Invalid email").min(1, "Email is required"),
  street_address: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  post_code: z.string().min(1, "Post Code is required"),
  country: z.string().min(1, "Post Code is required"),
  project_description: z.string(),
  invoice_date: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  payment_terms: paymentTermsSchema,
  items: z.array(
    z.object({
      name: z.string().min(1, "Item's name is required"),
      quantity: z.number().min(1, "Quantity is required"),
      price: z.number().min(0, "Price is required"),
    })
  ),
});

type InvoiceType = z.infer<typeof invoiceSchema>;

const PAYMENT_TERMS = [
  { id: "Net1", name: "Net 1 Day" },
  { id: "Net7", name: "Net 7 Days" },
  { id: "Net14", name: "Net 14 Days" },
  { id: "Net30", name: "Net 30 Days" },
];

export default function CreateEditInvoice() {
  const [upsertInvoice] = useUpsertInvoiceMutation({
    update: (cache, { data }) => {
      const newInvoiceRef = cache.writeFragment({
        data: data?.insert_invoice_one,
        fragment: Invoice_FieldsFragmentDoc,
        fragmentName: "INVOICE_FIELDS",
      });
      const query = cache.readQuery({
        query: InvoicesDocument,
      });
      console.log(query);
    },
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<InvoiceType>({
    defaultValues: {
      items: [
        {
          name: "",
          quantity: "" as unknown as number,
          price: "" as unknown as number,
        },
      ],
    },
    resolver: zodResolver(invoiceSchema),
  });
  const onSubmit: SubmitHandler<InvoiceType> = ({
    client_name,
    client_email,
    city,
    city_from,
    country,
    country_from,
    invoice_date,
    items,
    payment_terms,
    post_code,
    post_code_from,
    project_description,
    street_address,
    street_address_from,
  }) => {
    upsertInvoice({
      variables: {
        object: {
          status: Invoice_Status_Enum.Pending,
          client_name,
          client_email,
          project_description,
          invoice_date,
          payment_terms: Payment_Terms_Enum[payment_terms],
          client_address: {
            data: {
              city,
              country,
              post_code,
              street_address,
            },
          },
          bill_from: {
            data: {
              city: city_from,
              country: country_from,
              post_code: post_code_from,
              street_address: street_address_from,
            },
          },
          invoice_items: {
            data: items,
          },
        },
        on_conflict: {
          constraint: Invoice_Constraint.InvoicePkey,
          update_columns: [],
        },
      },
    });
  };

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "items",
    }
  );

  return (
    <div className="py-14 pl-14 pr-6 relative z-10 ">
      <h2 className="text-hm text-purple-800 dark:text-white mb-11">
        New Invoice
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="invoice-form"
        className="overflow-y-auto h-[calc(100vh-7rem-110px)] pr-8 pb-8"
      >
        <section className="">
          <h3 className="text-hsv text-purple-400 mb-6">Bill From</h3>
          <Input
            label="Street Address"
            className="w-full "
            {...register("street_address_from")}
            error={errors.street_address_from?.message}
          />
          <div className="grid grid-cols-3 gap-x-6 mt-5">
            <Input
              label="City"
              className="w-full "
              {...register("city_from")}
              error={errors.city_from?.message}
            />
            <Input
              label="Post Code"
              className="w-full "
              {...register("post_code_from")}
              error={errors.post_code_from?.message}
            />
            <Input
              label="Country"
              className="w-full "
              {...register("country_from")}
              error={errors.country_from?.message}
            />
          </div>
        </section>
        <section className="mt-12 space-y-5">
          <h3 className="text-hsv text-purple-400 mb-6">Bill To</h3>
          <Input
            label="Client's Name"
            className="w-full "
            {...register("client_name")}
            error={errors.client_name?.message}
          />
          <Input
            label="Client's Email"
            className="w-full "
            {...register("client_email")}
            error={errors.client_email?.message}
          />
          <Input
            label="Street Address"
            className="w-full "
            {...register("street_address")}
            error={errors.street_address?.message}
          />

          <div className="grid grid-cols-3 gap-x-6">
            <Input
              label="City"
              className="w-full "
              {...register("city")}
              error={errors.city?.message}
            />
            <Input
              label="Post Code"
              className="w-full "
              {...register("post_code")}
              error={errors.post_code?.message}
            />
            <Input
              label="Country"
              className="w-full "
              {...register("country")}
              error={errors.country?.message}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <Controller
              control={control}
              name="invoice_date"
              render={({ field: { onChange }, fieldState: { error } }) => (
                <DatePicker
                  label="Invoice Date"
                  error={error?.message}
                  onChange={(value) =>
                    onChange(value?.toDate(getLocalTimeZone()))
                  }
                />
              )}
            />
            <div className="">
              <div className="flex items-center justify-between">
                <label
                  className={`text-bodyv ${
                    errors.payment_terms?.message
                      ? "text-red-200"
                      : "text-purple-200 dark:text-gray-200"
                  } mb-2`}
                >
                  Payment Terms
                </label>
                <p className="text-bodyv text-red-200 text-[10px]">
                  {errors.payment_terms?.message}
                </p>
              </div>
              <Controller
                name="payment_terms"
                render={({ field: { onChange } }) => (
                  <MySelect
                    defaultSelectedKey="NET1"
                    onSelectionChange={(key) => {
                      onChange(key);
                    }}
                    items={PAYMENT_TERMS}
                  >
                    {(item) => <MyItem>{item.name}</MyItem>}
                  </MySelect>
                )}
                control={control}
              />
            </div>
          </div>
          <Input
            label="Project Description"
            className="w-full "
            {...register("project_description")}
            error={errors.project_description?.message}
          />
        </section>
        <section className="">
          <h3 className="font-bold leading-8 text-lg tracking-tight text-[#777F98] mt-9 mb-6">
            Item List
          </h3>
          <div className="grid grid-cols-12 gap-x-4 mt-5 w-full">
            <p
              className={`text-bodyv mb-2   text-purple-200 dark:text-gray-200 col-span-5`}
            >
              Item Name
            </p>
            <p
              className={`text-bodyv mb-2   text-purple-200 dark:text-gray-200 col-span-2`}
            >
              Qty.
            </p>
            <p
              className={`text-bodyv mb-2  text-purple-200 dark:text-gray-200 col-span-3`}
            >
              Price
            </p>
            <p
              className={`text-bodyv mb-2  text-purple-200 dark:text-gray-200 col-span-1`}
            >
              Total
            </p>
            <p
              className={`text-bodyv mb-2  text-purple-200 dark:text-gray-200 col-span-1`}
            ></p>
            {fields.map((field, index) => {
              const total =
                watch().items[index].quantity * watch().items[index].price;
              return (
                <section
                  id={field.id}
                  key={field.id}
                  className="grid grid-cols-12 col-span-12 gap-x-4 items-center my-2 "
                >
                  <input
                    {...register(`items.${index}.name` as const)}
                    className={`col-span-5
                  px-5 py-3 outline-none dark:bg-purple-600 bg-white  border rounded-[4px] ${
                    errors.items?.[index]?.name
                      ? "border-red-200"
                      : "border-gray-200 dark:border-purple-500 active:border-purple-300 hover:border-purple-300 focus-within:border-purple-300"
                  }
                  `}
                  />
                  <input
                    type="number"
                    {...register(`items.${index}.quantity` as const, {
                      valueAsNumber: true,
                    })}
                    className={`col-span-2
                  text-center px-5 py-3 outline-none dark:bg-purple-600 bg-white  border rounded-[4px] ${
                    errors.items?.[index]?.quantity
                      ? "border-red-200"
                      : "border-gray-200 dark:border-purple-500 active:border-purple-300 hover:border-purple-300 focus-within:border-purple-300"
                  }
                  `}
                  />
                  <input
                    type="number"
                    {...register(`items.${index}.price` as const, {
                      valueAsNumber: true,
                    })}
                    className={`col-span-3
                  px-5 py-3 outline-none dark:bg-purple-600 bg-white  border rounded-[4px] ${
                    errors.items?.[index]?.price
                      ? "border-red-200"
                      : "border-gray-200 dark:border-purple-500 active:border-purple-300 hover:border-purple-300 focus-within:border-purple-300"
                  }
                  `}
                  />
                  <p className="col-span-1 text-hsv text-purple-100 text-center">
                    {isNaN(total) ? "-" : total}
                  </p>
                  <button className="col-span-1" onClick={() => remove(index)}>
                    <svg
                      aria-hidden="true"
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"
                        fill="#888EB0"
                      />
                    </svg>
                  </button>
                </section>
              );
            })}
          </div>
          <Button
            className="w-full mt-1"
            variant="secondary"
            type="button"
            onPress={() =>
              append({
                name: "",
                quantity: "" as unknown as number,
                price: "" as unknown as number,
              })
            }
          >
            + Add New Item
          </Button>
        </section>
      </form>
    </div>
  );
}
