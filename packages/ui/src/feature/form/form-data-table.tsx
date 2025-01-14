'use client'

import { buildColumns } from '@forge/ui/feature/data-table/columns'
import { DataTable } from '@forge/ui/feature/data-table/data-table'
import type { FieldDef } from '@forge/ui/feature/data-table/field-definitions'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

interface DynamicFormDataTableProps<TData> {
	fieldDefs: FieldDef<TData>[]
	data: TData[]
	// optional: pass in existing form methods or allow internal
	// creation of form methods
	onSubmit?: SubmitHandler<TData[]>
}

export function DynamicFormDataTable<TData>({ fieldDefs, data, onSubmit }: DynamicFormDataTableProps<TData>) {
	// If we want to treat the entire data array as our form data:
	const formMethods = useForm<TData[]>({
		defaultValues: data,
		// resolver: zodResolver(...), etc. if you want
	})

	// build the columns
	const columns = buildColumns<TData>(fieldDefs)

	// if no onSubmit is passed, just log:
	const handleSubmit: SubmitHandler<TData[]> = onSubmit ?? ((vals) => console.log('submit', vals))

	return (
		<FormProvider {...formMethods}>
			<form onSubmit={formMethods.handleSubmit(handleSubmit)}>
				<DataTable<TData, unknown> columns={columns} data={data} />

				<button type="submit" className="mt-4 px-4 py-2 border rounded">
					Submit
				</button>
			</form>
		</FormProvider>
	)
}
