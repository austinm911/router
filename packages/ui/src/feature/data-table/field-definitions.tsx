// fieldDefs.ts
export type FieldType = 'text' | 'longText' | 'number' | 'currency' | 'percent' | 'date' | 'checkbox' | 'select'
// etc.

export interface FieldDef<TData> {
	// the key in TData to bind to
	field: keyof TData

	// header text in the table
	header: string

	// which type of renderer to use (text, checkbox, etc.)
	fieldType: FieldType

	// optional extras (placeholder, options for select, etc.)
	placeholder?: string
	options?: string[] // maybe for select
	// etc...
}
