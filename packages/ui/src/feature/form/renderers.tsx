// formRenderers.ts
import type { FieldPath, FieldValues } from 'react-hook-form'
// import { NumberRendererReactHookForm } from './number/number-rhf'
import { StringRendererReactHookForm } from './string/string-rhf'
// import { StringRendererTanStackForm } from './string/string-tanstack'

// For demonstration, we define two keys:
export type FormLibraryType = 'reactHookForm' | 'tanStack'

// We define the shape of the prop objects for each library
// (some might overlap, some might differ).
type RHFRendererProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = React.ComponentProps<
	typeof StringRendererReactHookForm<TFieldValues, TName>
>

// type NumberRHFRendererProps<
// 	TFieldValues extends FieldValues,
// 	TName extends FieldPath<TFieldValues>,
// > = React.ComponentProps<typeof NumberRendererReactHookForm<TFieldValues, TName>>

// type TanStackRendererProps = React.ComponentProps<typeof StringRendererTanStackForm>

// Then define a map where each key is a library type and
// the value is a function that returns the correct element.
export const stringRenderers = {
	reactHookForm: <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
		props: RHFRendererProps<TFieldValues, TName>,
	) => <StringRendererReactHookForm {...props} />,

	// @ts-expect-error TODO: implement tanstack renderer
	tanStack: (props: TanStackRendererProps) => null,
}

// export const numberRenderers = {
// 	reactHookForm: <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
// 		props: NumberRHFRendererProps<TFieldValues, TName>,
// 	) => <NumberRendererReactHookForm {...props} />,
// }

export const renderers = {
	string: stringRenderers,
	// number: numberRenderers,
	// other types here
	// date: dateRenderers,
	// select: selectRenderers,
	// etc
}

// SwitchableStringRenderer.tsx
interface SwitchableStringRendererProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> {
	library: FormLibraryType
	// Common props that *both* renderers share
	label: string
	name: TName
	description?: string
	placeholder?: string

	// Optionally, pass any library-specific props. For example:
	// For React Hook Form we might pass `control`, `rules`, etc.
	[key: string]: unknown
}

/**
 * This component picks the correct renderer based on `props.library`.
 */
export function SwitchableStringRenderer<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
	library,
	...props
}: SwitchableStringRendererProps<TFieldValues, TName>) {
	// We pick the correct renderer from our map:
	const Renderer = library === 'reactHookForm' ? stringRenderers.reactHookForm : stringRenderers.tanStack

	// Return the library-specific component
	// by passing along all props. It's up to you
	// to ensure the necessary props exist for each library.
	return <Renderer {...props} />
}

export const switchableRendererMap = {
	string: SwitchableStringRenderer,
}
