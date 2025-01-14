import { Input } from '@forge/ui/components/ui/input'
import { Label } from '@forge/ui/components/ui/label'
import { cn } from '@forge/ui/lib/utils'
import type { ComponentPropsWithRef } from 'react'

/**
 * The base interface, used by both form-libraries.
 * (No library-specific props here.)
 */
export interface BaseStringRendererProps extends ComponentPropsWithRef<typeof Input> {
	label: string
	name: string
	className?: string
}

/**
 * A purely presentational string renderer.
 * This does NOT tie into any form library.
 */
export function StringRendererBase({ label, name, className, ...props }: BaseStringRendererProps): JSX.Element {
	return (
		<div className={cn('grid gap-2', className)}>
			<Label htmlFor={name}>{label}</Label>
			<Input id={name} {...props} />
		</div>
	)
}
