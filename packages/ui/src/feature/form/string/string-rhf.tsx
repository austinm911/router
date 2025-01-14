'use client'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@forge/ui/components/ui/form'
import { Input } from '@forge/ui/components/ui/input'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'

/**
 * Props specifically for our string renderer.
 * This extends from ControllerProps because we’re tying into
 * React Hook Form’s <Controller/> logic behind the scenes.
 */
export interface StringRendererReactHookFormProps<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'> {
	label: string
	description?: string
	placeholder?: string
}

/**
 * A React Hook Form-based string renderer using your custom form components.
 */
export function StringRendererReactHookForm<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
	label,
	description,
	placeholder,
	...controllerProps
}: StringRendererReactHookFormProps<TFieldValues, TName>) {
	return (
		<FormField
			{...controllerProps}
			// We'll use the "render" pattern from React Hook Form’s Controller
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input {...field} placeholder={placeholder} />
					</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
