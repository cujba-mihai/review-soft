import {
	Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne
} from 'typeorm';
// import { AccountTypeEntity } from '../../../shared/account-type/entities/account-type.entity';
import { UserAccountEntity } from '../../user-account/entities/user-account.entity';

/**
 * An entity class for item_category table in the database.
 */
@Entity('role')
export class RoleEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'role_id',
		type: 'smallint',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	roleId: number;

	/**
	 * Name of the role.
	 */
	@Column({
		name: 'role_name',
		type: 'nvarchar',
		length: 50,
		comment: 'Name of the role.',
		nullable: false,
		unique: true
	})
	roleName: string;

	/**
	 * Name to display for the role.
	 */
	@Column({
		name: 'display_name',
		type: 'nvarchar',
		length: 50,
		comment: 'Name to display for the role.',
		nullable: false
	})
	displayName: string;

	/**
	 * User id of a user who created the record.
	 */
	@Column({
		name: 'createdby',
		type: 'int',
		comment: 'User id of a user who created the record.',
		nullable: false
	})
	createdBy: number;

	/**
	 * Date and time when the record is created.
	 */
	@Column({
		name: 'createddate',
		type: 'datetime',
		comment: 'Date and time when the record is created.',
		nullable: false
	})
	createdDate: Date;

	/**
	 * User id of a user who modified the record.
	 */
	@Column({
		name: 'modifiedby',
		type: 'int',
		comment: 'User id of a user who modified the record.',
		nullable: true
	})
	modifiedBy: number;

	/**
	 * Date and time when the record is modified.
	 */
	@Column({
		name: 'modifieddate',
		type: 'datetime',
		comment: 'Date and time when the record is modified.',
		nullable: true
	})
	modifiedDate: Date;

	/**
	 * Is generated by the system.
	 */
	@Column({
		name: 'issystem',
		type: 'boolean',
		comment: 'Is generated by the system.',
		nullable: false
	})
	isSystem: boolean;

	/**
	 * Need to display on signup or not.
	 */
	@Column({
		name: 'is_for_signup',
		type: 'boolean',
		comment: 'Need to display on signup or not.',
		nullable: false
	})
	isForSignup: boolean;

	/**
	 * Is default.
	 */
	@Column({
		name: 'isDefault',
		type: 'boolean',
		comment: 'Is default role or not.',
		nullable: true,
		default: false
	})
	isDefault: boolean;

	// @ManyToMany(() => UserAccountEntity, user => user.roles)
	// @JoinTable({
	// 	name: 'user_role',
	// 	joinColumn: {
	// 		name: 'role_id',
	// 		referencedColumnName: 'roleId'
	// 	},
	// 	inverseJoinColumn: {
	// 		name: 'user_id',
	// 		referencedColumnName: 'userId'
	// 	}
	// })
	// users: UserAccountEntity[];

	// @ManyToOne(() => AccountTypeEntity, accountType => accountType.roles)
	// @JoinColumn({
	// 	foreignKeyConstraintName: 'FK_role_account_type',
	// 	name: 'account_type_id',
	// 	referencedColumnName: 'accountTypeId'
	// })
	// accountType: AccountTypeEntity;

	/**
	 * Is default.
	 */
	@Column({
		name: 'account_type_id',
		type: 'tinyint',
		comment: 'FK to account_type table.',
		nullable: true
	})
	accountTypeId: number;
}
