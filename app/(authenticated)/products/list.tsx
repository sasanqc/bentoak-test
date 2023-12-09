"use client";
import Searchbar from "@/app/components/Searchbar";
import Product from "@/app/model/Product";
import { Table } from "@radix-ui/themes";
import React, { useState } from "react";
interface Props {
  list: Product[];
}
const ProductList = ({ list }: Props) => {
  return (
    <div className="mb-4">
      <div className="flex gap-4 flex-col md:flex-row mb-4">
        <h1 className="text-xl font-bold text-center ">List of Products</h1>
        <Searchbar />
      </div>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Brand</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:block">
              Discount
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {list.map((product: Product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.brand}</Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell className="hidden md:block">
                {product?.discountPercentage}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default ProductList;
