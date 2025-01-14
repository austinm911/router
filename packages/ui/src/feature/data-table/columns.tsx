// buildColumns.tsx
import type { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { DynamicField } from './dynamicRenderers'
import type { FieldDef } from './field-definitions'

// TData is the shape of each row (e.g., { id: number, name: string, ... })
export function buildColumns<TData>(fieldDefs: FieldDef<TData>[]): ColumnDef<TData>[] {
	return fieldDefs.map<ColumnDef<TData>>((fieldDef) => ({
		accessorKey: String(fieldDef.field), // "price", "active", etc.
		header: fieldDef.header,
		cell: ({ row }) => {
			const { control } = useFormContext()

			// row.index tells us which row it is, so for e.g. if we have
			// an array of data, you might do `name={[row.index].${fieldDef.field}}`
			// or if the data is flat, you might do just `name={fieldDef.field}`
			// That depends on how you structured your form. Let’s assume an array:
			const fieldName = `${row.index}.${fieldDef.field}`

			return (
				<Controller
					name={fieldName}
					control={control}
					render={({ field }) => (
						<DynamicField
							fieldType={fieldDef.fieldType}
							fieldProps={field}
							placeholder={fieldDef.placeholder}
							options={fieldDef.options}
						/>
					)}
				/>
			)
		},
	}))
}
