import { DynamicFormDataTable } from '@forge/ui/feature/form/form-data-table'
import type { FieldDef } from '../data-table/field-definitions'

interface Product {
	name: string
	price: number
	active: boolean
}

const productData: Product[] = [
	{ name: 'Widget A', price: 9.99, active: true },
	{ name: 'Widget B', price: 19.99, active: false },
]

const productFieldDefs: FieldDef<Product>[] = [
	{ field: 'name', header: 'Name', fieldType: 'text', placeholder: 'Enter name' },
	{ field: 'price', header: 'Price', fieldType: 'currency' },
	{ field: 'active', header: 'Active?', fieldType: 'checkbox' },
]

export function DynamicTable() {
	return <DynamicFormDataTable fieldDefs={productFieldDefs} data={productData} />
}
