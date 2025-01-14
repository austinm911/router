import { Input } from '@forge/ui/components/ui/input'
import { Label } from '@forge/ui/components/ui/label'
import { cn } from '@forge/ui/lib/utils'
import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

/**
 * This file should contain a generic component to render a string form field
 *
 * - Then a 2nd component should be used that extends the StringRendererProps interface to allow unique form library specific props
 * - A 3rd component for a different form library could also be created and extend the base interface/component
 *
 * The goal is to standardize the way we render form fields for different form libraries.
 *
 * Form Libraries:
 * - react-hook-form with zod
 * - tanstack-form with zod
 */

interface StringRendererProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	name: string
	className?: string
}

/**
 * Reusable text input component for react-hook-form.
 *
 * @param {StringRendererProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
export function StringRenderer({ label, name, className, ...props }: StringRendererProps): JSX.Element {
	const { register } = useFormContext()

	return (
		<div className={cn('grid gap-2', className)}>
			<Label htmlFor={name}>{label}</Label>
			<Input id={name} {...register(name)} {...props} />
		</div>
	)
}
