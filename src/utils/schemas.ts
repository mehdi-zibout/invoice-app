import { Payment_Terms_Enum } from "../generated/graphql";
import { z } from "zod";

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

export const invoiceSchema = z.object({
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

export type InvoiceType = z.infer<typeof invoiceSchema>;
