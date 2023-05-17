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
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import Button from "../../components/Button";
import {
  Address_Constraint,
  Address_Update_Column,
  InvoiceByIdDocument,
  Invoice_Constraint,
  Invoice_Status_Enum,
  Invoice_Update_Column,
  InvoicesDocument,
  InvoicesTotalDocument,
  Item_Constraint,
  Item_FieldsFragment,
  Item_Update_Column,
  Payment_Terms_Enum,
  useDeleteItemMutation,
  useUpsertInvoiceMutation,
} from "../../generated/graphql";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const paymentTermsSchema = z.nativeEnum(Payment_Terms_Enum);

const addressSchema = z.object({
  id: z.string().uuid().optional(),
  street_address: z.string().min(1, " "),
  city: z.string().min(1, " "),
  post_code: z.string().min(1, " "),
  country: z.string().min(1, " "),
});

const itemSchema = z.object({
  itemId: z.string().uuid().optional(),
  name: z.string().min(1, " "),
  quantity: z.number().min(1, " "),
  price: z.number().min(0, " "),
});

const invoiceSchema = z.object({
  id: z.string().uuid().optional(),
  client_name: z.string().min(1, " "),
  client_email: z.string().min(1, " ").email("Invalid email"),
  project_description: z.string().min(1, " "),
  payment_terms: paymentTermsSchema,
  date: z.date({
    required_error: " ",
    invalid_type_error: "That's not a date!",
  }),
  items: z.array(itemSchema).nonempty({ message: "- An item must be added" }),
  bill_from_address: addressSchema,
  client_address: addressSchema,
});

type InvoiceType = z.infer<typeof invoiceSchema>;

const PAYMENT_TERMS = [
  { id: Payment_Terms_Enum.Net1, name: "Net 1 Day" },
  { id: Payment_Terms_Enum.Net7, name: "Net 7 Days" },
  { id: Payment_Terms_Enum.Net14, name: "Net 14 Days" },
  { id: Payment_Terms_Enum.Net30, name: "Net 30 Days" },
];

export default function CreateEditInvoice({
  editInvoice,
  setLoading,
  close,
}: {
  editInvoice?: InvoiceType & { id: string };
  close: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [deletedItemsId, setDeletedItemsId] = useState<string[]>([]);
  const [deleteItem, { loading: deleteLoading }] = useDeleteItemMutation({
    update: (cache, { data: deletedItems }) => {
      cache.updateQuery(
        {
          query: InvoiceByIdDocument,
          variables: {
            id: editInvoice?.id,
          },
        },
        (data) => {
          ({
            invoice_by_pk: {
              ...data.invoice_by_pk,
              items: data.invoice_by_pk.items.filter(
                (item: Item_FieldsFragment) =>
                  !deletedItems?.delete_item?.returning.find(
                    (deletedItem) => deletedItem.id === item.id
                  )
              ),
            },
          });
        }
      );
    },
  });
  const [upsertInvoice, { loading: upsertLoading }] = useUpsertInvoiceMutation({
    refetchQueries: [InvoicesDocument, InvoicesTotalDocument],
    onCompleted: (data) => {
      if (!editInvoice) navigate(`/invoice/${data.insert_invoice_one?.id}`);
      close();
    },
  });
  const {
    getValues,
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InvoiceType>({
    defaultValues: editInvoice
      ? {
          ...editInvoice,
          date: editInvoice?.date
            ? new Date(editInvoice?.date as unknown as string)
            : undefined,
        }
      : {
          payment_terms: Payment_Terms_Enum.Net30,
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
    client_address,
    bill_from_address,
    items,
    ...data
  }) => {
    upsertInvoice({
      variables: {
        object: {
          ...data,
          client_address: {
            data: client_address,
            on_conflict: {
              constraint: Address_Constraint.AddressPkey,
              update_columns: [
                Address_Update_Column.City,
                Address_Update_Column.Country,
                Address_Update_Column.PostCode,
                Address_Update_Column.StreetAddress,
              ],
            },
          },
          bill_from_address: {
            data: bill_from_address,
            on_conflict: {
              constraint: Address_Constraint.AddressPkey,
              update_columns: [
                Address_Update_Column.City,
                Address_Update_Column.Country,
                Address_Update_Column.PostCode,
                Address_Update_Column.StreetAddress,
              ],
            },
          },
          items: {
            data: items.map((item) => ({
              id: item.itemId,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
            })),
            on_conflict: {
              constraint: Item_Constraint.ItemPkey,
              update_columns: [
                Item_Update_Column.Name,
                Item_Update_Column.Price,
                Item_Update_Column.Quantity,
              ],
            },
          },
          status: Invoice_Status_Enum.Pending,
        },
        on_conflict: {
          constraint: Invoice_Constraint.InvoicePkey,
          update_columns: [
            Invoice_Update_Column.ClientName,
            Invoice_Update_Column.ClientEmail,
            Invoice_Update_Column.Date,
            Invoice_Update_Column.ProjectDescription,
            Invoice_Update_Column.PaymentTerms,
            Invoice_Update_Column.Status,
          ],
        },
      },
    }).then(() => {
      if (deletedItemsId.length > 0)
        deleteItem({
          variables: {
            where: {
              id: { _in: deletedItemsId },
            },
          },
        });
    });
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    setLoading(deleteLoading || upsertLoading);
  }, [upsertLoading, deleteLoading, setLoading]);

  return (
    <div className="py-14 pl-14 pr-6 relative z-10 ">
      <h2 className="text-hm text-purple-800 dark:text-white mb-11">
        {editInvoice ? (
          <>
            Edit <span className="text-purple-100">#</span>
            {editInvoice.id.slice(0, 6).toUpperCase()}
          </>
        ) : (
          "New Invoice"
        )}
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
            {...register("bill_from_address.street_address")}
            error={errors.bill_from_address?.street_address?.message}
          />
          <div className="grid grid-cols-3 gap-x-6 mt-5">
            <Input
              label="City"
              className="w-full "
              {...register("bill_from_address.city")}
              error={errors.bill_from_address?.city?.message}
            />
            <Input
              label="Post Code"
              className="w-full "
              {...register("bill_from_address.post_code")}
              error={errors.bill_from_address?.post_code?.message}
            />
            <Input
              label="Country"
              className="w-full "
              {...register("bill_from_address.country")}
              error={errors.bill_from_address?.country?.message}
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
            placeholder="e.g. email@example.com"
            className="w-full "
            {...register("client_email")}
            error={errors.client_email?.message}
          />
          <Input
            label="Street Address"
            className="w-full "
            {...register("client_address.street_address")}
            error={errors.client_address?.street_address?.message}
          />

          <div className="grid grid-cols-3 gap-x-6">
            <Input
              label="City"
              className="w-full "
              {...register("client_address.city")}
              error={errors?.client_address?.city?.message}
            />
            <Input
              label="Post Code"
              className="w-full "
              {...register("client_address.post_code")}
              error={errors.client_address?.post_code?.message}
            />
            <Input
              label="Country"
              className="w-full "
              {...register("client_address.country")}
              error={errors.client_address?.country?.message}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <Controller
              control={control}
              name="date"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <DatePicker
                  defaultValue={
                    value &&
                    (typeof value === "string"
                      ? parseDate(value)
                      : parseDate(value.toISOString().slice(0, 10)))
                  }
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
                render={({ field: { onChange, value } }) => (
                  <MySelect
                    defaultSelectedKey={value}
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
            placeholder="e.g. Graphic Design Service"
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
                  <Input
                    label="Item Name"
                    hiddenLabel
                    error={errors?.items?.[index]?.name?.message}
                    {...register(`items.${index}.name` as const)}
                    containerClassname={`col-span-5`}
                    className="w-full"
                  />
                  <Input
                    label="Qty."
                    hiddenLabel
                    type="number"
                    {...register(`items.${index}.quantity` as const, {
                      valueAsNumber: true,
                    })}
                    error={errors.items?.[index]?.quantity?.message}
                    containerClassname={`col-span-2`}
                    className="w-full"
                  />
                  <Input
                    label="Price"
                    error={errors.items?.[index]?.price?.message}
                    hiddenLabel
                    type="number"
                    {...register(`items.${index}.price` as const, {
                      valueAsNumber: true,
                    })}
                    containerClassname={`col-span-3`}
                    className="w-full"
                  />
                  <p className="col-span-1 text-hsv text-purple-100 text-center">
                    {isNaN(total) ? "-" : total}
                  </p>
                  <button
                    className="col-span-1 group"
                    onClick={() => {
                      remove(index);
                      if (editInvoice && field.itemId) {
                        setDeletedItemsId(deletedItemsId.concat(field.itemId));
                      }
                    }}
                  >
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
                        className="fill-[#888EB0] group-hover:fill-red-200 transition duration-300"
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
          <ul className="mt-8 mb-2 text-red-200 text-bodyv ">
            <li className="">{errors && "- All fields must be added"}</li>
            <li className="">{errors.items?.message}</li>
          </ul>
        </section>
      </form>
      <form
        id="draft-form"
        onSubmit={(e) => {
          e.preventDefault();
          const { bill_from_address, client_address, items, ...data } =
            getValues();
          upsertInvoice({
            variables: {
              object: {
                ...data,
                bill_from_address: {
                  data: bill_from_address,
                },
                client_address: {
                  data: client_address,
                },
                items: {
                  data: items,
                },
              },
              on_conflict: {
                constraint: Invoice_Constraint.InvoicePkey,
                update_columns: [],
              },
            },
          });
        }}
        className="hidden"
      ></form>
    </div>
  );
}
