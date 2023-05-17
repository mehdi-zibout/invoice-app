import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  money: any;
  smallint: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** The address of a person (country, city, post code, street address) */
export type Address = {
  __typename?: 'address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  post_code?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "address" */
export type Address_Aggregate = {
  __typename?: 'address_aggregate';
  aggregate?: Maybe<Address_Aggregate_Fields>;
  nodes: Array<Address>;
};

/** aggregate fields of "address" */
export type Address_Aggregate_Fields = {
  __typename?: 'address_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Address_Max_Fields>;
  min?: Maybe<Address_Min_Fields>;
};


/** aggregate fields of "address" */
export type Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
export type Address_Bool_Exp = {
  _and?: InputMaybe<Array<Address_Bool_Exp>>;
  _not?: InputMaybe<Address_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post_code?: InputMaybe<String_Comparison_Exp>;
  street_address?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "address" */
export enum Address_Constraint {
  /** unique or primary key constraint on columns "id" */
  AddressPkey = 'address_pkey'
}

/** input type for inserting data into table "address" */
export type Address_Insert_Input = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  post_code?: InputMaybe<Scalars['String']>;
  street_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Address_Max_Fields = {
  __typename?: 'address_max_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_code?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Address_Min_Fields = {
  __typename?: 'address_min_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_code?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "address" */
export type Address_Mutation_Response = {
  __typename?: 'address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Address>;
};

/** input type for inserting object relation for remote table "address" */
export type Address_Obj_Rel_Insert_Input = {
  data: Address_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Address_On_Conflict>;
};

/** on_conflict condition type for table "address" */
export type Address_On_Conflict = {
  constraint: Address_Constraint;
  update_columns?: Array<Address_Update_Column>;
  where?: InputMaybe<Address_Bool_Exp>;
};

/** Ordering options when selecting data from "address". */
export type Address_Order_By = {
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_code?: InputMaybe<Order_By>;
  street_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: address */
export type Address_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "address" */
export enum Address_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostCode = 'post_code',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "address" */
export type Address_Set_Input = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  post_code?: InputMaybe<Scalars['String']>;
  street_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "address" */
export type Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Address_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  post_code?: InputMaybe<Scalars['String']>;
  street_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "address" */
export enum Address_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostCode = 'post_code',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Address_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Address_Set_Input>;
  /** filter the rows which have to be updated */
  where: Address_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "invoice" */
export type Invoice = {
  __typename?: 'invoice';
  /** An object relationship */
  bill_from: Address;
  bill_from_id: Scalars['uuid'];
  /** An object relationship */
  client_address?: Maybe<Address>;
  client_address_id: Scalars['uuid'];
  client_email: Scalars['String'];
  client_name?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  invoice_date: Scalars['date'];
  /** An array relationship */
  invoice_items: Array<Item>;
  /** An aggregate relationship */
  invoice_items_aggregate: Item_Aggregate;
  payment_terms: Payment_Terms_Enum;
  project_description?: Maybe<Scalars['String']>;
  status: Invoice_Status_Enum;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "invoice" */
export type InvoiceInvoice_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


/** columns and relationships of "invoice" */
export type InvoiceInvoice_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};

/** aggregated selection of "invoice" */
export type Invoice_Aggregate = {
  __typename?: 'invoice_aggregate';
  aggregate?: Maybe<Invoice_Aggregate_Fields>;
  nodes: Array<Invoice>;
};

/** aggregate fields of "invoice" */
export type Invoice_Aggregate_Fields = {
  __typename?: 'invoice_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invoice_Max_Fields>;
  min?: Maybe<Invoice_Min_Fields>;
};


/** aggregate fields of "invoice" */
export type Invoice_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invoice_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "invoice". All fields are combined with a logical 'AND'. */
export type Invoice_Bool_Exp = {
  _and?: InputMaybe<Array<Invoice_Bool_Exp>>;
  _not?: InputMaybe<Invoice_Bool_Exp>;
  _or?: InputMaybe<Array<Invoice_Bool_Exp>>;
  bill_from?: InputMaybe<Address_Bool_Exp>;
  bill_from_id?: InputMaybe<Uuid_Comparison_Exp>;
  client_address?: InputMaybe<Address_Bool_Exp>;
  client_address_id?: InputMaybe<Uuid_Comparison_Exp>;
  client_email?: InputMaybe<String_Comparison_Exp>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invoice_date?: InputMaybe<Date_Comparison_Exp>;
  invoice_items?: InputMaybe<Item_Bool_Exp>;
  invoice_items_aggregate?: InputMaybe<Item_Aggregate_Bool_Exp>;
  payment_terms?: InputMaybe<Payment_Terms_Enum_Comparison_Exp>;
  project_description?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Invoice_Status_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "invoice" */
export enum Invoice_Constraint {
  /** unique or primary key constraint on columns "id" */
  InvoicePkey = 'invoice_pkey'
}

/** input type for inserting data into table "invoice" */
export type Invoice_Insert_Input = {
  bill_from?: InputMaybe<Address_Obj_Rel_Insert_Input>;
  bill_from_id?: InputMaybe<Scalars['uuid']>;
  client_address?: InputMaybe<Address_Obj_Rel_Insert_Input>;
  client_address_id?: InputMaybe<Scalars['uuid']>;
  client_email?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invoice_date?: InputMaybe<Scalars['date']>;
  invoice_items?: InputMaybe<Item_Arr_Rel_Insert_Input>;
  payment_terms?: InputMaybe<Payment_Terms_Enum>;
  project_description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Invoice_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Invoice_Max_Fields = {
  __typename?: 'invoice_max_fields';
  bill_from_id?: Maybe<Scalars['uuid']>;
  client_address_id?: Maybe<Scalars['uuid']>;
  client_email?: Maybe<Scalars['String']>;
  client_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invoice_date?: Maybe<Scalars['date']>;
  project_description?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Invoice_Min_Fields = {
  __typename?: 'invoice_min_fields';
  bill_from_id?: Maybe<Scalars['uuid']>;
  client_address_id?: Maybe<Scalars['uuid']>;
  client_email?: Maybe<Scalars['String']>;
  client_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invoice_date?: Maybe<Scalars['date']>;
  project_description?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "invoice" */
export type Invoice_Mutation_Response = {
  __typename?: 'invoice_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invoice>;
};

/** on_conflict condition type for table "invoice" */
export type Invoice_On_Conflict = {
  constraint: Invoice_Constraint;
  update_columns?: Array<Invoice_Update_Column>;
  where?: InputMaybe<Invoice_Bool_Exp>;
};

/** Ordering options when selecting data from "invoice". */
export type Invoice_Order_By = {
  bill_from?: InputMaybe<Address_Order_By>;
  bill_from_id?: InputMaybe<Order_By>;
  client_address?: InputMaybe<Address_Order_By>;
  client_address_id?: InputMaybe<Order_By>;
  client_email?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_date?: InputMaybe<Order_By>;
  invoice_items_aggregate?: InputMaybe<Item_Aggregate_Order_By>;
  payment_terms?: InputMaybe<Order_By>;
  project_description?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invoice */
export type Invoice_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "invoice" */
export enum Invoice_Select_Column {
  /** column name */
  BillFromId = 'bill_from_id',
  /** column name */
  ClientAddressId = 'client_address_id',
  /** column name */
  ClientEmail = 'client_email',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceDate = 'invoice_date',
  /** column name */
  PaymentTerms = 'payment_terms',
  /** column name */
  ProjectDescription = 'project_description',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "invoice" */
export type Invoice_Set_Input = {
  bill_from_id?: InputMaybe<Scalars['uuid']>;
  client_address_id?: InputMaybe<Scalars['uuid']>;
  client_email?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invoice_date?: InputMaybe<Scalars['date']>;
  payment_terms?: InputMaybe<Payment_Terms_Enum>;
  project_description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Invoice_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** The status of an invoice can be paid, pending or draft. */
export type Invoice_Status = {
  __typename?: 'invoice_status';
  value: Scalars['String'];
};

/** aggregated selection of "invoice_status" */
export type Invoice_Status_Aggregate = {
  __typename?: 'invoice_status_aggregate';
  aggregate?: Maybe<Invoice_Status_Aggregate_Fields>;
  nodes: Array<Invoice_Status>;
};

/** aggregate fields of "invoice_status" */
export type Invoice_Status_Aggregate_Fields = {
  __typename?: 'invoice_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invoice_Status_Max_Fields>;
  min?: Maybe<Invoice_Status_Min_Fields>;
};


/** aggregate fields of "invoice_status" */
export type Invoice_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invoice_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "invoice_status". All fields are combined with a logical 'AND'. */
export type Invoice_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Invoice_Status_Bool_Exp>>;
  _not?: InputMaybe<Invoice_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Invoice_Status_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "invoice_status" */
export enum Invoice_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  InvoiceStatusPkey = 'invoice_status_pkey'
}

export enum Invoice_Status_Enum {
  Draft = 'DRAFT',
  Paid = 'PAID',
  Pending = 'PENDING'
}

/** Boolean expression to compare columns of type "invoice_status_enum". All fields are combined with logical 'AND'. */
export type Invoice_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Invoice_Status_Enum>;
  _in?: InputMaybe<Array<Invoice_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Invoice_Status_Enum>;
  _nin?: InputMaybe<Array<Invoice_Status_Enum>>;
};

/** input type for inserting data into table "invoice_status" */
export type Invoice_Status_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Invoice_Status_Max_Fields = {
  __typename?: 'invoice_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Invoice_Status_Min_Fields = {
  __typename?: 'invoice_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "invoice_status" */
export type Invoice_Status_Mutation_Response = {
  __typename?: 'invoice_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invoice_Status>;
};

/** on_conflict condition type for table "invoice_status" */
export type Invoice_Status_On_Conflict = {
  constraint: Invoice_Status_Constraint;
  update_columns?: Array<Invoice_Status_Update_Column>;
  where?: InputMaybe<Invoice_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "invoice_status". */
export type Invoice_Status_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invoice_status */
export type Invoice_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "invoice_status" */
export enum Invoice_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "invoice_status" */
export type Invoice_Status_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "invoice_status" */
export type Invoice_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Invoice_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Invoice_Status_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "invoice_status" */
export enum Invoice_Status_Update_Column {
  /** column name */
  Value = 'value'
}

export type Invoice_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Invoice_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Invoice_Status_Bool_Exp;
};

/** Streaming cursor of the table "invoice" */
export type Invoice_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Invoice_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Invoice_Stream_Cursor_Value_Input = {
  bill_from_id?: InputMaybe<Scalars['uuid']>;
  client_address_id?: InputMaybe<Scalars['uuid']>;
  client_email?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invoice_date?: InputMaybe<Scalars['date']>;
  payment_terms?: InputMaybe<Payment_Terms_Enum>;
  project_description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Invoice_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "invoice" */
export enum Invoice_Update_Column {
  /** column name */
  BillFromId = 'bill_from_id',
  /** column name */
  ClientAddressId = 'client_address_id',
  /** column name */
  ClientEmail = 'client_email',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceDate = 'invoice_date',
  /** column name */
  PaymentTerms = 'payment_terms',
  /** column name */
  ProjectDescription = 'project_description',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Invoice_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Invoice_Set_Input>;
  /** filter the rows which have to be updated */
  where: Invoice_Bool_Exp;
};

/** an item in the invoice (name, quantity and a price) */
export type Item = {
  __typename?: 'item';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  invoice_id: Scalars['uuid'];
  name: Scalars['String'];
  price: Scalars['money'];
  quantity: Scalars['smallint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "item" */
export type Item_Aggregate = {
  __typename?: 'item_aggregate';
  aggregate?: Maybe<Item_Aggregate_Fields>;
  nodes: Array<Item>;
};

export type Item_Aggregate_Bool_Exp = {
  count?: InputMaybe<Item_Aggregate_Bool_Exp_Count>;
};

export type Item_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Item_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "item" */
export type Item_Aggregate_Fields = {
  __typename?: 'item_aggregate_fields';
  avg?: Maybe<Item_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Item_Max_Fields>;
  min?: Maybe<Item_Min_Fields>;
  stddev?: Maybe<Item_Stddev_Fields>;
  stddev_pop?: Maybe<Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Item_Stddev_Samp_Fields>;
  sum?: Maybe<Item_Sum_Fields>;
  var_pop?: Maybe<Item_Var_Pop_Fields>;
  var_samp?: Maybe<Item_Var_Samp_Fields>;
  variance?: Maybe<Item_Variance_Fields>;
};


/** aggregate fields of "item" */
export type Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item" */
export type Item_Aggregate_Order_By = {
  avg?: InputMaybe<Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Item_Max_Order_By>;
  min?: InputMaybe<Item_Min_Order_By>;
  stddev?: InputMaybe<Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Item_Sum_Order_By>;
  var_pop?: InputMaybe<Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "item" */
export type Item_Arr_Rel_Insert_Input = {
  data: Array<Item_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Item_Avg_Fields = {
  __typename?: 'item_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item" */
export type Item_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type Item_Bool_Exp = {
  _and?: InputMaybe<Array<Item_Bool_Exp>>;
  _not?: InputMaybe<Item_Bool_Exp>;
  _or?: InputMaybe<Array<Item_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invoice_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  quantity?: InputMaybe<Smallint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "item" */
export enum Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItemPkey = 'Item_pkey'
}

/** input type for incrementing numeric columns in table "item" */
export type Item_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "item" */
export type Item_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invoice_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Item_Max_Fields = {
  __typename?: 'item_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invoice_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "item" */
export type Item_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Item_Min_Fields = {
  __typename?: 'item_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invoice_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "item" */
export type Item_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "item" */
export type Item_Mutation_Response = {
  __typename?: 'item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Item>;
};

/** on_conflict condition type for table "item" */
export type Item_On_Conflict = {
  constraint: Item_Constraint;
  update_columns?: Array<Item_Update_Column>;
  where?: InputMaybe<Item_Bool_Exp>;
};

/** Ordering options when selecting data from "item". */
export type Item_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: item */
export type Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "item" */
export enum Item_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceId = 'invoice_id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "item" */
export type Item_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invoice_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Item_Stddev_Fields = {
  __typename?: 'item_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item" */
export type Item_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Item_Stddev_Pop_Fields = {
  __typename?: 'item_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item" */
export type Item_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Item_Stddev_Samp_Fields = {
  __typename?: 'item_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item" */
export type Item_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "item" */
export type Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Item_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invoice_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Item_Sum_Fields = {
  __typename?: 'item_sum_fields';
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "item" */
export type Item_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "item" */
export enum Item_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceId = 'invoice_id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Item_Var_Pop_Fields = {
  __typename?: 'item_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item" */
export type Item_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Item_Var_Samp_Fields = {
  __typename?: 'item_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item" */
export type Item_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Item_Variance_Fields = {
  __typename?: 'item_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item" */
export type Item_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "address" */
  delete_address?: Maybe<Address_Mutation_Response>;
  /** delete single row from the table: "address" */
  delete_address_by_pk?: Maybe<Address>;
  /** delete data from the table: "invoice" */
  delete_invoice?: Maybe<Invoice_Mutation_Response>;
  /** delete single row from the table: "invoice" */
  delete_invoice_by_pk?: Maybe<Invoice>;
  /** delete data from the table: "invoice_status" */
  delete_invoice_status?: Maybe<Invoice_Status_Mutation_Response>;
  /** delete single row from the table: "invoice_status" */
  delete_invoice_status_by_pk?: Maybe<Invoice_Status>;
  /** delete data from the table: "item" */
  delete_item?: Maybe<Item_Mutation_Response>;
  /** delete single row from the table: "item" */
  delete_item_by_pk?: Maybe<Item>;
  /** delete data from the table: "payment_terms" */
  delete_payment_terms?: Maybe<Payment_Terms_Mutation_Response>;
  /** delete single row from the table: "payment_terms" */
  delete_payment_terms_by_pk?: Maybe<Payment_Terms>;
  /** insert data into the table: "address" */
  insert_address?: Maybe<Address_Mutation_Response>;
  /** insert a single row into the table: "address" */
  insert_address_one?: Maybe<Address>;
  /** insert data into the table: "invoice" */
  insert_invoice?: Maybe<Invoice_Mutation_Response>;
  /** insert a single row into the table: "invoice" */
  insert_invoice_one?: Maybe<Invoice>;
  /** insert data into the table: "invoice_status" */
  insert_invoice_status?: Maybe<Invoice_Status_Mutation_Response>;
  /** insert a single row into the table: "invoice_status" */
  insert_invoice_status_one?: Maybe<Invoice_Status>;
  /** insert data into the table: "item" */
  insert_item?: Maybe<Item_Mutation_Response>;
  /** insert a single row into the table: "item" */
  insert_item_one?: Maybe<Item>;
  /** insert data into the table: "payment_terms" */
  insert_payment_terms?: Maybe<Payment_Terms_Mutation_Response>;
  /** insert a single row into the table: "payment_terms" */
  insert_payment_terms_one?: Maybe<Payment_Terms>;
  /** update data of the table: "address" */
  update_address?: Maybe<Address_Mutation_Response>;
  /** update single row of the table: "address" */
  update_address_by_pk?: Maybe<Address>;
  /** update multiples rows of table: "address" */
  update_address_many?: Maybe<Array<Maybe<Address_Mutation_Response>>>;
  /** update data of the table: "invoice" */
  update_invoice?: Maybe<Invoice_Mutation_Response>;
  /** update single row of the table: "invoice" */
  update_invoice_by_pk?: Maybe<Invoice>;
  /** update multiples rows of table: "invoice" */
  update_invoice_many?: Maybe<Array<Maybe<Invoice_Mutation_Response>>>;
  /** update data of the table: "invoice_status" */
  update_invoice_status?: Maybe<Invoice_Status_Mutation_Response>;
  /** update single row of the table: "invoice_status" */
  update_invoice_status_by_pk?: Maybe<Invoice_Status>;
  /** update multiples rows of table: "invoice_status" */
  update_invoice_status_many?: Maybe<Array<Maybe<Invoice_Status_Mutation_Response>>>;
  /** update data of the table: "item" */
  update_item?: Maybe<Item_Mutation_Response>;
  /** update single row of the table: "item" */
  update_item_by_pk?: Maybe<Item>;
  /** update multiples rows of table: "item" */
  update_item_many?: Maybe<Array<Maybe<Item_Mutation_Response>>>;
  /** update data of the table: "payment_terms" */
  update_payment_terms?: Maybe<Payment_Terms_Mutation_Response>;
  /** update single row of the table: "payment_terms" */
  update_payment_terms_by_pk?: Maybe<Payment_Terms>;
  /** update multiples rows of table: "payment_terms" */
  update_payment_terms_many?: Maybe<Array<Maybe<Payment_Terms_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AddressArgs = {
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Address_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_InvoiceArgs = {
  where: Invoice_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invoice_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Invoice_StatusArgs = {
  where: Invoice_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invoice_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ItemArgs = {
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_TermsArgs = {
  where: Payment_Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Terms_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AddressArgs = {
  objects: Array<Address_Insert_Input>;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Address_OneArgs = {
  object: Address_Insert_Input;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvoiceArgs = {
  objects: Array<Invoice_Insert_Input>;
  on_conflict?: InputMaybe<Invoice_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invoice_OneArgs = {
  object: Invoice_Insert_Input;
  on_conflict?: InputMaybe<Invoice_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invoice_StatusArgs = {
  objects: Array<Invoice_Status_Insert_Input>;
  on_conflict?: InputMaybe<Invoice_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invoice_Status_OneArgs = {
  object: Invoice_Status_Insert_Input;
  on_conflict?: InputMaybe<Invoice_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemArgs = {
  objects: Array<Item_Insert_Input>;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_OneArgs = {
  object: Item_Insert_Input;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_TermsArgs = {
  objects: Array<Payment_Terms_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Terms_OneArgs = {
  object: Payment_Terms_Insert_Input;
  on_conflict?: InputMaybe<Payment_Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Address_By_PkArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  pk_columns: Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Address_ManyArgs = {
  updates: Array<Address_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InvoiceArgs = {
  _set?: InputMaybe<Invoice_Set_Input>;
  where: Invoice_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invoice_By_PkArgs = {
  _set?: InputMaybe<Invoice_Set_Input>;
  pk_columns: Invoice_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Invoice_ManyArgs = {
  updates: Array<Invoice_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Invoice_StatusArgs = {
  _set?: InputMaybe<Invoice_Status_Set_Input>;
  where: Invoice_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invoice_Status_By_PkArgs = {
  _set?: InputMaybe<Invoice_Status_Set_Input>;
  pk_columns: Invoice_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Invoice_Status_ManyArgs = {
  updates: Array<Invoice_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Item_By_PkArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  pk_columns: Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Item_ManyArgs = {
  updates: Array<Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_TermsArgs = {
  _set?: InputMaybe<Payment_Terms_Set_Input>;
  where: Payment_Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Terms_By_PkArgs = {
  _set?: InputMaybe<Payment_Terms_Set_Input>;
  pk_columns: Payment_Terms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Terms_ManyArgs = {
  updates: Array<Payment_Terms_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** The payment terms of an invoice enum 1, 7 ,14, 30 net days */
export type Payment_Terms = {
  __typename?: 'payment_terms';
  value: Scalars['String'];
};

/** aggregated selection of "payment_terms" */
export type Payment_Terms_Aggregate = {
  __typename?: 'payment_terms_aggregate';
  aggregate?: Maybe<Payment_Terms_Aggregate_Fields>;
  nodes: Array<Payment_Terms>;
};

/** aggregate fields of "payment_terms" */
export type Payment_Terms_Aggregate_Fields = {
  __typename?: 'payment_terms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Payment_Terms_Max_Fields>;
  min?: Maybe<Payment_Terms_Min_Fields>;
};


/** aggregate fields of "payment_terms" */
export type Payment_Terms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Terms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "payment_terms". All fields are combined with a logical 'AND'. */
export type Payment_Terms_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Terms_Bool_Exp>>;
  _not?: InputMaybe<Payment_Terms_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Terms_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_terms" */
export enum Payment_Terms_Constraint {
  /** unique or primary key constraint on columns "value" */
  PaymentTermsPkey = 'payment_terms_pkey'
}

export enum Payment_Terms_Enum {
  Net1 = 'NET1',
  Net7 = 'NET7',
  Net14 = 'NET14',
  Net30 = 'NET30'
}

/** Boolean expression to compare columns of type "payment_terms_enum". All fields are combined with logical 'AND'. */
export type Payment_Terms_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Terms_Enum>;
  _in?: InputMaybe<Array<Payment_Terms_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Payment_Terms_Enum>;
  _nin?: InputMaybe<Array<Payment_Terms_Enum>>;
};

/** input type for inserting data into table "payment_terms" */
export type Payment_Terms_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Payment_Terms_Max_Fields = {
  __typename?: 'payment_terms_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Payment_Terms_Min_Fields = {
  __typename?: 'payment_terms_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "payment_terms" */
export type Payment_Terms_Mutation_Response = {
  __typename?: 'payment_terms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Terms>;
};

/** on_conflict condition type for table "payment_terms" */
export type Payment_Terms_On_Conflict = {
  constraint: Payment_Terms_Constraint;
  update_columns?: Array<Payment_Terms_Update_Column>;
  where?: InputMaybe<Payment_Terms_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_terms". */
export type Payment_Terms_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_terms */
export type Payment_Terms_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "payment_terms" */
export enum Payment_Terms_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "payment_terms" */
export type Payment_Terms_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "payment_terms" */
export type Payment_Terms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Terms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Terms_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "payment_terms" */
export enum Payment_Terms_Update_Column {
  /** column name */
  Value = 'value'
}

export type Payment_Terms_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Terms_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_Terms_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table: "invoice" */
  invoice: Array<Invoice>;
  /** fetch aggregated fields from the table: "invoice" */
  invoice_aggregate: Invoice_Aggregate;
  /** fetch data from the table: "invoice" using primary key columns */
  invoice_by_pk?: Maybe<Invoice>;
  /** fetch data from the table: "invoice_status" */
  invoice_status: Array<Invoice_Status>;
  /** fetch aggregated fields from the table: "invoice_status" */
  invoice_status_aggregate: Invoice_Status_Aggregate;
  /** fetch data from the table: "invoice_status" using primary key columns */
  invoice_status_by_pk?: Maybe<Invoice_Status>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "payment_terms" */
  payment_terms: Array<Payment_Terms>;
  /** fetch aggregated fields from the table: "payment_terms" */
  payment_terms_aggregate: Payment_Terms_Aggregate;
  /** fetch data from the table: "payment_terms" using primary key columns */
  payment_terms_by_pk?: Maybe<Payment_Terms>;
};


export type Query_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInvoiceArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Order_By>>;
  where?: InputMaybe<Invoice_Bool_Exp>;
};


export type Query_RootInvoice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Order_By>>;
  where?: InputMaybe<Invoice_Bool_Exp>;
};


export type Query_RootInvoice_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInvoice_StatusArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Status_Order_By>>;
  where?: InputMaybe<Invoice_Status_Bool_Exp>;
};


export type Query_RootInvoice_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Status_Order_By>>;
  where?: InputMaybe<Invoice_Status_Bool_Exp>;
};


export type Query_RootInvoice_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPayment_TermsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Terms_Order_By>>;
  where?: InputMaybe<Payment_Terms_Bool_Exp>;
};


export type Query_RootPayment_Terms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Terms_Order_By>>;
  where?: InputMaybe<Payment_Terms_Bool_Exp>;
};


export type Query_RootPayment_Terms_By_PkArgs = {
  value: Scalars['String'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table in a streaming manner: "address" */
  address_stream: Array<Address>;
  /** fetch data from the table: "invoice" */
  invoice: Array<Invoice>;
  /** fetch aggregated fields from the table: "invoice" */
  invoice_aggregate: Invoice_Aggregate;
  /** fetch data from the table: "invoice" using primary key columns */
  invoice_by_pk?: Maybe<Invoice>;
  /** fetch data from the table: "invoice_status" */
  invoice_status: Array<Invoice_Status>;
  /** fetch aggregated fields from the table: "invoice_status" */
  invoice_status_aggregate: Invoice_Status_Aggregate;
  /** fetch data from the table: "invoice_status" using primary key columns */
  invoice_status_by_pk?: Maybe<Invoice_Status>;
  /** fetch data from the table in a streaming manner: "invoice_status" */
  invoice_status_stream: Array<Invoice_Status>;
  /** fetch data from the table in a streaming manner: "invoice" */
  invoice_stream: Array<Invoice>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table in a streaming manner: "item" */
  item_stream: Array<Item>;
  /** fetch data from the table: "payment_terms" */
  payment_terms: Array<Payment_Terms>;
  /** fetch aggregated fields from the table: "payment_terms" */
  payment_terms_aggregate: Payment_Terms_Aggregate;
  /** fetch data from the table: "payment_terms" using primary key columns */
  payment_terms_by_pk?: Maybe<Payment_Terms>;
  /** fetch data from the table in a streaming manner: "payment_terms" */
  payment_terms_stream: Array<Payment_Terms>;
};


export type Subscription_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAddress_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootInvoiceArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Order_By>>;
  where?: InputMaybe<Invoice_Bool_Exp>;
};


export type Subscription_RootInvoice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Order_By>>;
  where?: InputMaybe<Invoice_Bool_Exp>;
};


export type Subscription_RootInvoice_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInvoice_StatusArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Status_Order_By>>;
  where?: InputMaybe<Invoice_Status_Bool_Exp>;
};


export type Subscription_RootInvoice_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoice_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Status_Order_By>>;
  where?: InputMaybe<Invoice_Status_Bool_Exp>;
};


export type Subscription_RootInvoice_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootInvoice_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Invoice_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Invoice_Status_Bool_Exp>;
};


export type Subscription_RootInvoice_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Invoice_Stream_Cursor_Input>>;
  where?: InputMaybe<Invoice_Bool_Exp>;
};


export type Subscription_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootItem_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootPayment_TermsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Terms_Order_By>>;
  where?: InputMaybe<Payment_Terms_Bool_Exp>;
};


export type Subscription_RootPayment_Terms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Terms_Order_By>>;
  where?: InputMaybe<Payment_Terms_Bool_Exp>;
};


export type Subscription_RootPayment_Terms_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootPayment_Terms_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Payment_Terms_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Terms_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Address_FieldsFragment = { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null };

export type Invoice_FieldsFragment = { __typename?: 'invoice', id: any, client_name?: string | null, client_email: string, invoice_date: any, status: Invoice_Status_Enum, project_description?: string | null, payment_terms: Payment_Terms_Enum, client_address?: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null } | null, bill_from: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null }, invoice_items: Array<{ __typename?: 'item', id: any, name: string, quantity: any, price: any }> };

export type Item_FieldsFragment = { __typename?: 'item', id: any, name: string, quantity: any, price: any };

export type UpsertInvoiceMutationVariables = Exact<{
  object: Invoice_Insert_Input;
  on_conflict?: InputMaybe<Invoice_On_Conflict>;
}>;


export type UpsertInvoiceMutation = { __typename?: 'mutation_root', insert_invoice_one?: { __typename?: 'invoice', id: any, client_name?: string | null, client_email: string, invoice_date: any, status: Invoice_Status_Enum, project_description?: string | null, payment_terms: Payment_Terms_Enum, client_address?: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null } | null, bill_from: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null }, invoice_items: Array<{ __typename?: 'item', id: any, name: string, quantity: any, price: any }> } | null };

export type InvoicesQueryVariables = Exact<{
  where?: InputMaybe<Invoice_Bool_Exp>;
  order_by?: InputMaybe<Array<Invoice_Order_By> | Invoice_Order_By>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  distinct_on?: InputMaybe<Array<Invoice_Select_Column> | Invoice_Select_Column>;
}>;


export type InvoicesQuery = { __typename?: 'query_root', invoice: Array<{ __typename?: 'invoice', id: any, client_name?: string | null, client_email: string, invoice_date: any, status: Invoice_Status_Enum, project_description?: string | null, payment_terms: Payment_Terms_Enum, client_address?: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null } | null, bill_from: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null }, invoice_items: Array<{ __typename?: 'item', id: any, name: string, quantity: any, price: any }> }> };

export type InvoicesTotalQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Invoice_Select_Column> | Invoice_Select_Column>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoice_Order_By> | Invoice_Order_By>;
  where?: InputMaybe<Invoice_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type InvoicesTotalQuery = { __typename?: 'query_root', invoice_aggregate: { __typename?: 'invoice_aggregate', aggregate?: { __typename?: 'invoice_aggregate_fields', count: number } | null } };

export type InvoiceByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type InvoiceByIdQuery = { __typename?: 'query_root', invoice_by_pk?: { __typename?: 'invoice', id: any, client_name?: string | null, client_email: string, invoice_date: any, status: Invoice_Status_Enum, project_description?: string | null, payment_terms: Payment_Terms_Enum, client_address?: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null } | null, bill_from: { __typename?: 'address', id: any, street_address?: string | null, city?: string | null, post_code?: string | null, country?: string | null }, invoice_items: Array<{ __typename?: 'item', id: any, name: string, quantity: any, price: any }> } | null };

export const Address_FieldsFragmentDoc = gql`
    fragment ADDRESS_FIELDS on address {
  id
  street_address
  city
  post_code
  country
}
    `;
export const Item_FieldsFragmentDoc = gql`
    fragment ITEM_FIELDS on item {
  id
  name
  quantity
  price
}
    `;
export const Invoice_FieldsFragmentDoc = gql`
    fragment INVOICE_FIELDS on invoice {
  id
  client_name
  client_email
  invoice_date
  status
  project_description
  payment_terms
  client_address {
    ...ADDRESS_FIELDS
  }
  bill_from {
    ...ADDRESS_FIELDS
  }
  invoice_items {
    ...ITEM_FIELDS
  }
}
    ${Address_FieldsFragmentDoc}
${Item_FieldsFragmentDoc}`;
export const UpsertInvoiceDocument = gql`
    mutation UpsertInvoice($object: invoice_insert_input!, $on_conflict: invoice_on_conflict) {
  insert_invoice_one(object: $object, on_conflict: $on_conflict) {
    ...INVOICE_FIELDS
  }
}
    ${Invoice_FieldsFragmentDoc}`;
export type UpsertInvoiceMutationFn = Apollo.MutationFunction<UpsertInvoiceMutation, UpsertInvoiceMutationVariables>;

/**
 * __useUpsertInvoiceMutation__
 *
 * To run a mutation, you first call `useUpsertInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertInvoiceMutation, { data, loading, error }] = useUpsertInvoiceMutation({
 *   variables: {
 *      object: // value for 'object'
 *      on_conflict: // value for 'on_conflict'
 *   },
 * });
 */
export function useUpsertInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<UpsertInvoiceMutation, UpsertInvoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertInvoiceMutation, UpsertInvoiceMutationVariables>(UpsertInvoiceDocument, options);
      }
export type UpsertInvoiceMutationHookResult = ReturnType<typeof useUpsertInvoiceMutation>;
export type UpsertInvoiceMutationResult = Apollo.MutationResult<UpsertInvoiceMutation>;
export type UpsertInvoiceMutationOptions = Apollo.BaseMutationOptions<UpsertInvoiceMutation, UpsertInvoiceMutationVariables>;
export const InvoicesDocument = gql`
    query Invoices($where: invoice_bool_exp, $order_by: [invoice_order_by!], $offset: Int, $limit: Int, $distinct_on: [invoice_select_column!]) {
  invoice(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...INVOICE_FIELDS
  }
}
    ${Invoice_FieldsFragmentDoc}`;

/**
 * __useInvoicesQuery__
 *
 * To run a query within a React component, call `useInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvoicesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      distinct_on: // value for 'distinct_on'
 *   },
 * });
 */
export function useInvoicesQuery(baseOptions?: Apollo.QueryHookOptions<InvoicesQuery, InvoicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvoicesQuery, InvoicesQueryVariables>(InvoicesDocument, options);
      }
export function useInvoicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvoicesQuery, InvoicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvoicesQuery, InvoicesQueryVariables>(InvoicesDocument, options);
        }
export type InvoicesQueryHookResult = ReturnType<typeof useInvoicesQuery>;
export type InvoicesLazyQueryHookResult = ReturnType<typeof useInvoicesLazyQuery>;
export type InvoicesQueryResult = Apollo.QueryResult<InvoicesQuery, InvoicesQueryVariables>;
export const InvoicesTotalDocument = gql`
    query InvoicesTotal($distinct_on: [invoice_select_column!], $offset: Int, $order_by: [invoice_order_by!], $where: invoice_bool_exp, $limit: Int) {
  invoice_aggregate(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useInvoicesTotalQuery__
 *
 * To run a query within a React component, call `useInvoicesTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvoicesTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvoicesTotalQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useInvoicesTotalQuery(baseOptions?: Apollo.QueryHookOptions<InvoicesTotalQuery, InvoicesTotalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvoicesTotalQuery, InvoicesTotalQueryVariables>(InvoicesTotalDocument, options);
      }
export function useInvoicesTotalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvoicesTotalQuery, InvoicesTotalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvoicesTotalQuery, InvoicesTotalQueryVariables>(InvoicesTotalDocument, options);
        }
export type InvoicesTotalQueryHookResult = ReturnType<typeof useInvoicesTotalQuery>;
export type InvoicesTotalLazyQueryHookResult = ReturnType<typeof useInvoicesTotalLazyQuery>;
export type InvoicesTotalQueryResult = Apollo.QueryResult<InvoicesTotalQuery, InvoicesTotalQueryVariables>;
export const InvoiceByIdDocument = gql`
    query InvoiceById($id: uuid!) {
  invoice_by_pk(id: $id) {
    ...INVOICE_FIELDS
  }
}
    ${Invoice_FieldsFragmentDoc}`;

/**
 * __useInvoiceByIdQuery__
 *
 * To run a query within a React component, call `useInvoiceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvoiceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvoiceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInvoiceByIdQuery(baseOptions: Apollo.QueryHookOptions<InvoiceByIdQuery, InvoiceByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvoiceByIdQuery, InvoiceByIdQueryVariables>(InvoiceByIdDocument, options);
      }
export function useInvoiceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvoiceByIdQuery, InvoiceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvoiceByIdQuery, InvoiceByIdQueryVariables>(InvoiceByIdDocument, options);
        }
export type InvoiceByIdQueryHookResult = ReturnType<typeof useInvoiceByIdQuery>;
export type InvoiceByIdLazyQueryHookResult = ReturnType<typeof useInvoiceByIdLazyQuery>;
export type InvoiceByIdQueryResult = Apollo.QueryResult<InvoiceByIdQuery, InvoiceByIdQueryVariables>;