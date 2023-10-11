import { Transform, TransformFnParams } from 'class-transformer';
import {
	IsBoolean,
	IsDateString,
	IsDefined,
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsPositive,
	Length, MaxLength, MinLength
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

/**
 * A DTO class for Role.
 */
export class CreateRoleDto {
	/**
	 * Name of the role.
	 */
	@IsDefined({ message: i18nValidationMessage('translation.NOT_DEFINED') })
	@IsNotEmpty({ message: i18nValidationMessage('translation.NOT_EMPTY') })
	@MinLength(2, { message: i18nValidationMessage('translation.MIN') })
	@MaxLength(100, { message: i18nValidationMessage('translation.MAX') })
	@Transform(({ value }: TransformFnParams) => value.trim())
	roleName: string;

	/**
	 * Name to display for the role.
	 */
	@IsDefined()
	@IsNotEmpty()
	@Length(2, 100)
	@Transform(({ value }: TransformFnParams) => value.trim())
	displayName: string;

	/**
	 * User id of a user who created the record.
	 */
	@IsOptional()
	@IsInt()
	@IsPositive()
	createdBy: number;

	/**
	 * Date and time when the record is created.
	 */
	@IsOptional()
	@IsDateString()
	createdDate: string = new Date().toISOString();

	/**
	 * Is generated by the system.
	 */
	@IsDefined()
	@IsBoolean()
	isSystem: boolean;

	/**
	 * Need to display on signup or not.
	 */
	@IsDefined()
	@IsBoolean()
	isForSignup: boolean;

	/**
	 * Is default.
	 */
	@IsOptional()
	@IsBoolean()
	isDefault?: boolean = false;

	/**
	 * Account type id.
	 */
	// @IsOptional()
	// @IsInt()
	// @IsPositive()
	// accountTypeId?: number;
}