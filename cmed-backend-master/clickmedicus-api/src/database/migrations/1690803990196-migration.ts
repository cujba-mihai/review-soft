import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1690803990196 implements MigrationInterface {
	name = 'Migration1690803990196';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD \`consultationImage\` varchar(500) NULL COMMENT 'Consultation image path.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_message_from_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_message_to_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of the message.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`subject\` \`subject\` varchar(1000) NULL COMMENT 'Subject of the message.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL COMMENT 'Date and time when the record is created.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`from\` \`from\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`to\` \`to\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`country\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`country\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`state\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`state\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_comment_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_comment_post\``
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`message\` \`message\` varchar(1000) NULL COMMENT 'message replay to a post '`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`createdDate\` \`createdDate\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`post_id\` \`post_id\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_like_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_like_post\``
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` CHANGE \`post_id\` \`post_id\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_post_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_945114492f8f53bf77a223ff2a9\``
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of the media-post.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`created_date\` \`created_date\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`image\` \`image\` varchar(255) NULL COMMENT 'Image of the media-post.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`video\` \`video\` varchar(255) NULL COMMENT 'Video of the media-post.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`articleArticleId\` \`articleArticleId\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` DROP FOREIGN KEY \`FK_professional-info_professionalExperience\``
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` CHANGE \`speciality\` \`speciality\` varchar(255) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` CHANGE \`professional_info_id\` \`professional_info_id\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-info\` DROP FOREIGN KEY \`FK_professional_info_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-info\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` DROP FOREIGN KEY \`FK_forum_comment_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`ref_comment_id\` \`ref_comment_id\` bigint NULL COMMENT 'Self refrenece to article_comment_id in case of reply to the comment.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`is_blocked\` \`is_blocked\` tinyint NULL COMMENT 'Comment is blocked or not.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`reason_for_block\` \`reason_for_block\` varchar(500) NULL COMMENT 'Reason of blocking the commnet.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`description\` \`description\` varchar(1000) NULL COMMENT 'Description of the question.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`no_of_likes\` \`no_of_likes\` int NULL COMMENT 'No of likes on the forum.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`no_of_comments\` \`no_of_comments\` int NULL COMMENT 'No of comments on the forum.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`no_of_views\` \`no_of_views\` int NULL COMMENT 'No of views on the forum.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` DROP FOREIGN KEY \`FK_account_consultation_price_language\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` DROP FOREIGN KEY \`FK_account_consultation_price_account\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` CHANGE \`end_date\` \`end_date\` datetime NULL COMMENT 'Date and time after which this price will no longer effect.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` CHANGE \`language_id\` \`language_id\` int NULL COMMENT 'FK to the language table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`language\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`language\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_question_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_question_speciality\``
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_question_language\``
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`title\` \`title\` varchar(1000) NULL COMMENT 'Title of question'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of question'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`image\` \`image\` varchar(1000) NULL COMMENT 'Image of question'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`created_at\` \`created_at\` datetime NOT NULL COMMENT 'Date and time when the question is published.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`speciality_id\` \`speciality_id\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`language_id\` \`language_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` DROP FOREIGN KEY \`FK_specialities_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` DROP FOREIGN KEY \`FK_professional-info_specialities\``
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`speciality_name\` \`speciality_name\` varchar(1000) NULL COMMENT 'Speciality name.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`speciality_image\` \`speciality_image\` varchar(500) NULL COMMENT 'Speciality image path.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`professional_info_id\` \`professional_info_id\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` DROP FOREIGN KEY \`FK_medical_record_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`gender\` \`gender\` varchar(255) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`operations\` \`operations\` text NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`breaks\` \`breaks\` text NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`allergies\` \`allergies\` text NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`diseases\` \`diseases\` text NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`medicaments\` \`medicaments\` text NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`document_type\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`document_type\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_document\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_document\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_price\` CHANGE \`doctors_fee\` \`doctors_fee\` decimal(18,2) NULL COMMENT 'Per hour payment to doctors in local currency.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`wallet_offers\` CHANGE \`offer_end_date\` \`offer_end_date\` datetime NULL COMMENT 'Offer end date.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`coin_conversion_rate\` CHANGE \`end_date\` \`end_date\` datetime NULL COMMENT 'Rate effective till.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`currency\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`currency\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`payment_mode\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`payment_mode\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` DROP FOREIGN KEY \`FK_account_wallet_transaction_wallet_offers\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`amount\` \`amount\` decimal(18,2) NULL COMMENT 'Amount.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`wallet_offers_id\` \`wallet_offers_id\` int NULL COMMENT 'FK to wallet_offers table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet\` DROP FOREIGN KEY \`FK_account_wallet_account\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` DROP FOREIGN KEY \`FK_activity_program_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` DROP COLUMN \`slots\``
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` ADD \`slots\` json NOT NULL COMMENT 'listed slots'`
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_patient_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_doctor_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_1ca2e7b4e9f82787586ade2f911\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_cancelled_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_session_account2\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`end_time\` \`end_time\` varchar(255) NULL COMMENT 'End date and time of the consultation.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`rating\` \`rating\` decimal(3,2) NULL COMMENT 'Rating from the patient.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`feedback\` \`feedback\` varchar(500) NULL COMMENT 'Feedback from the patient.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`reason_for_cancellation\` \`reason_for_cancellation\` varchar(500) NULL COMMENT 'Reason for the cancellation of the appointment'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`translator_id\` \`translator_id\` bigint NULL COMMENT 'FK to account table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`treatment_plan\` \`treatment_plan\` varchar(500) NULL COMMENT 'Treatment Plan of the consultation.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`comments\` \`comments\` varchar(500) NULL COMMENT 'Comment of the consultation.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`patient_id\` \`patient_id\` int NULL COMMENT 'FK to account table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`doctor_id\` \`doctor_id\` int NULL COMMENT 'FK to account table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`contact\` \`contact\` text NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`translator_consultation_price\` \`translator_consultation_price\` decimal(18,2) NULL COMMENT 'Price of the consultation for translator.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`is_interpretation\` \`is_interpretation\` tinyint NULL COMMENT 'Is interpretation or consultation?'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`activity_id\` \`activity_id\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`user_cancelled\` \`user_cancelled\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` DROP FOREIGN KEY \`FK_favorite_doctor_created_by\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` DROP FOREIGN KEY \`FK_favorite_doctor_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` CHANGE \`created_date\` \`created_date\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` CHANGE \`user\` \`user\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` DROP FOREIGN KEY \`FK_notification_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` DROP FOREIGN KEY \`FK_notification_created_by\``
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` CHANGE \`user\` \`user\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` CHANGE \`created_by\` \`created_by\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`survey_question_group\` CHANGE \`description\` \`description\` varchar(500) NULL COMMENT 'Description about the group.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`survey_question_group\` CHANGE \`serial\` \`serial\` int NULL COMMENT 'Serial number for ordering of question groups.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` DROP FOREIGN KEY \`FK_patient_survey_question_survey_question_group\``
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`survey_question_group_id\` \`survey_question_group_id\` int NULL COMMENT 'FK to the survey_question_group table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`is_active\` \`is_active\` tinyint NULL COMMENT 'Question is active or not'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`ask_document\` \`ask_document\` tinyint NULL COMMENT 'Show document attachment control'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`serial\` \`serial\` int NULL COMMENT 'Serial number for ordering of questions.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` DROP FOREIGN KEY \`FK_patient_anamnesis_account\``
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` CHANGE \`is_public\` \`is_public\` tinyint NULL COMMENT 'Allow doctors to view history.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`city\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`city\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_account_city\``
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_account_country\``
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_account_state\``
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`gender\` \`gender\` char(1) NULL COMMENT 'Gender. M = Male, F = Female, O = Other'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`address\` \`address\` varchar(500) NULL COMMENT 'Address of the user.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`date_of_birth\` \`date_of_birth\` date NULL COMMENT 'Date of birth to calculate the age.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`profileimage\` \`profileimage\` varchar(500) NULL COMMENT 'Profile image path.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`description\` \`description\` varchar(255) NULL COMMENT 'Description '`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`city_id\` \`city_id\` int NULL COMMENT 'FK to city table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`country_id\` \`country_id\` smallint NULL COMMENT 'FK to country table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`state_id\` \`state_id\` int NULL COMMENT 'FK to state table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`postal_code\` \`postal_code\` varchar(10) NULL COMMENT 'Postal code.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`parent_account_id\` \`parent_account_id\` bigint NULL COMMENT 'This will be used only for assistant doctor. It will be doctor''s id who have added the assistant doctor.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`is_translator\` \`is_translator\` tinyint NULL COMMENT 'Is the user is translator or not?'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`is_verified\` \`is_verified\` tinyint NULL COMMENT 'The identity of the doctor is verified / not by the portal.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`terms_and_condition_accepted\` \`terms_and_condition_accepted\` tinyint NULL COMMENT 'Whether the doctor has accepted the terms and conditions of the portal.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` DROP FOREIGN KEY \`FK_favorite_article_created_by\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` DROP FOREIGN KEY \`FK_favorite_article\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` CHANGE \`created_date\` \`created_date\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` CHANGE \`article\` \`article\` bigint NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` DROP FOREIGN KEY \`FK_article_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of the article.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`articleImage\` \`articleImage\` varchar(500) NULL COMMENT 'Article image path.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature_group\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature_group\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`remarks\` \`remarks\` varchar(255) NULL COMMENT 'Name of the feature.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`featureimage\` \`featureimage\` varchar(500) NULL COMMENT 'Feature image path.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_test_type\` CHANGE \`description\` \`description\` varchar(500) NULL COMMENT 'Description of the medical test.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_test_type\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_test_type\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`account_type_id\` \`account_type_id\` tinyint NULL COMMENT 'FK to account_type table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`session_id\` \`session_id\` varchar(500) NULL COMMENT 'Unique session id generate by uuid.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`refresh_token\` \`refresh_token\` text NULL COMMENT 'Refresh token.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`expirytime\` \`expirytime\` bigint NULL COMMENT 'Expiry time of the refresh token.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`device\` \`device\` varchar(500) NULL COMMENT 'Device details like manufacturar name, model name etc.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`operating_system\` \`operating_system\` varchar(500) NULL COMMENT 'Operating system details like OS name, version etc.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`browser\` \`browser\` varchar(500) NULL COMMENT 'Browser details like broeser name, version etc.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`location\` \`location\` varchar(500) NULL COMMENT 'Location details like latitude, longitude, address details etc.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`ip_address\` \`ip_address\` varchar(50) NULL COMMENT 'IP address of the device.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`wallet_offers\` CHANGE \`offer_end_date\` \`offer_end_date\` datetime NULL COMMENT 'Offer end date.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`amount\` \`amount\` decimal(18,2) NULL COMMENT 'Amount.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`wallet_offers_id\` \`wallet_offers_id\` int NULL COMMENT 'FK to wallet_offers table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_message_from_user\` FOREIGN KEY (\`from\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_message_to_user\` FOREIGN KEY (\`to\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_comment_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_comment_post\` FOREIGN KEY (\`post_id\`) REFERENCES \`post\`(\`post_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_like_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_like_post\` FOREIGN KEY (\`post_id\`) REFERENCES \`post\`(\`post_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_post_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_945114492f8f53bf77a223ff2a9\` FOREIGN KEY (\`articleArticleId\`) REFERENCES \`article\`(\`article_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` ADD CONSTRAINT \`FK_professional-info_professionalExperience\` FOREIGN KEY (\`professional_info_id\`) REFERENCES \`professional-info\`(\`professional_info_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-info\` ADD CONSTRAINT \`FK_professional_info_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` ADD CONSTRAINT \`FK_forum_comment_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` ADD CONSTRAINT \`FK_account_consultation_price_language\` FOREIGN KEY (\`language_id\`) REFERENCES \`language\`(\`language_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` ADD CONSTRAINT \`FK_account_consultation_price_account\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_question_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_question_speciality\` FOREIGN KEY (\`speciality_id\`) REFERENCES \`speciality\`(\`speciality_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_question_language\` FOREIGN KEY (\`language_id\`) REFERENCES \`language\`(\`language_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` ADD CONSTRAINT \`FK_specialities_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` ADD CONSTRAINT \`FK_professional-info_specialities\` FOREIGN KEY (\`professional_info_id\`) REFERENCES \`professional-info\`(\`professional_info_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` ADD CONSTRAINT \`FK_medical_record_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` ADD CONSTRAINT \`FK_account_wallet_transaction_wallet_offers\` FOREIGN KEY (\`wallet_offers_id\`) REFERENCES \`wallet_offers\`(\`wallet_offers_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet\` ADD CONSTRAINT \`FK_account_wallet_account\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` ADD CONSTRAINT \`FK_activity_program_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_1ca2e7b4e9f82787586ade2f911\` FOREIGN KEY (\`activity_id\`) REFERENCES \`activity_program\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_patient_user\` FOREIGN KEY (\`patient_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_doctor_user\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_cancelled_user\` FOREIGN KEY (\`user_cancelled\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_session_account2\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` ADD CONSTRAINT \`FK_favorite_doctor_created_by\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` ADD CONSTRAINT \`FK_favorite_doctor_user\` FOREIGN KEY (\`user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` ADD CONSTRAINT \`FK_notification_user\` FOREIGN KEY (\`user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` ADD CONSTRAINT \`FK_notification_created_by\` FOREIGN KEY (\`created_by\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` ADD CONSTRAINT \`FK_patient_survey_question_survey_question_group\` FOREIGN KEY (\`survey_question_group_id\`) REFERENCES \`survey_question_group\`(\`survey_question_group_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` ADD CONSTRAINT \`FK_patient_anamnesis_account\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_account_city\` FOREIGN KEY (\`city_id\`) REFERENCES \`city\`(\`city_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_account_state\` FOREIGN KEY (\`state_id\`) REFERENCES \`state\`(\`state_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_account_country\` FOREIGN KEY (\`country_id\`) REFERENCES \`country\`(\`country_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` ADD CONSTRAINT \`FK_favorite_article_created_by\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` ADD CONSTRAINT \`FK_favorite_article\` FOREIGN KEY (\`article\`) REFERENCES \`article\`(\`article_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` ADD CONSTRAINT \`FK_article_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`article\` DROP FOREIGN KEY \`FK_article_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` DROP FOREIGN KEY \`FK_favorite_article\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` DROP FOREIGN KEY \`FK_favorite_article_created_by\``
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_account_country\``
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_account_state\``
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_account_city\``
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` DROP FOREIGN KEY \`FK_patient_anamnesis_account\``
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` DROP FOREIGN KEY \`FK_patient_survey_question_survey_question_group\``
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` DROP FOREIGN KEY \`FK_notification_created_by\``
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` DROP FOREIGN KEY \`FK_notification_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` DROP FOREIGN KEY \`FK_favorite_doctor_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` DROP FOREIGN KEY \`FK_favorite_doctor_created_by\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_session_account2\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_cancelled_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_doctor_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_consultation_patient_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP FOREIGN KEY \`FK_1ca2e7b4e9f82787586ade2f911\``
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` DROP FOREIGN KEY \`FK_activity_program_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet\` DROP FOREIGN KEY \`FK_account_wallet_account\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` DROP FOREIGN KEY \`FK_account_wallet_transaction_wallet_offers\``
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` DROP FOREIGN KEY \`FK_medical_record_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` DROP FOREIGN KEY \`FK_professional-info_specialities\``
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` DROP FOREIGN KEY \`FK_specialities_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_question_language\``
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_question_speciality\``
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_question_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` DROP FOREIGN KEY \`FK_account_consultation_price_account\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` DROP FOREIGN KEY \`FK_account_consultation_price_language\``
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` DROP FOREIGN KEY \`FK_forum_comment_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-info\` DROP FOREIGN KEY \`FK_professional_info_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` DROP FOREIGN KEY \`FK_professional-info_professionalExperience\``
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_945114492f8f53bf77a223ff2a9\``
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_post_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_like_post\``
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_like_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_comment_post\``
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_comment_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_message_to_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_message_from_user\``
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`wallet_offers_id\` \`wallet_offers_id\` int NULL COMMENT 'FK to wallet_offers table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`amount\` \`amount\` decimal(18,2) NULL COMMENT 'Amount.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`wallet_offers\` CHANGE \`offer_end_date\` \`offer_end_date\` datetime NULL COMMENT 'Offer end date.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`ip_address\` \`ip_address\` varchar(50) NULL COMMENT 'IP address of the device.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`location\` \`location\` varchar(500) NULL COMMENT 'Location details like latitude, longitude, address details etc.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`browser\` \`browser\` varchar(500) NULL COMMENT 'Browser details like broeser name, version etc.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`operating_system\` \`operating_system\` varchar(500) NULL COMMENT 'Operating system details like OS name, version etc.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`device\` \`device\` varchar(500) NULL COMMENT 'Device details like manufacturar name, model name etc.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`expirytime\` \`expirytime\` bigint NULL COMMENT 'Expiry time of the refresh token.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`refresh_token\` \`refresh_token\` text NULL COMMENT 'Refresh token.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user_session\` CHANGE \`session_id\` \`session_id\` varchar(500) NULL COMMENT 'Unique session id generate by uuid.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`account_type_id\` \`account_type_id\` tinyint NULL COMMENT 'FK to account_type table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_test_type\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_test_type\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_test_type\` CHANGE \`description\` \`description\` varchar(500) NULL COMMENT 'Description of the medical test.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`featureimage\` \`featureimage\` varchar(500) NULL COMMENT 'Feature image path.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`remarks\` \`remarks\` varchar(255) NULL COMMENT 'Name of the feature.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature_group\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`feature_group\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`articleImage\` \`articleImage\` varchar(500) NULL COMMENT 'Article image path.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of the article.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`article\` ADD CONSTRAINT \`FK_article_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` CHANGE \`article\` \`article\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` CHANGE \`created_date\` \`created_date\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` ADD CONSTRAINT \`FK_favorite_article\` FOREIGN KEY (\`article\`) REFERENCES \`article\`(\`article_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_article\` ADD CONSTRAINT \`FK_favorite_article_created_by\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`modifieddate\` \`modifieddate\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`modifiedby\` \`modifiedby\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`terms_and_condition_accepted\` \`terms_and_condition_accepted\` tinyint NULL COMMENT 'Whether the doctor has accepted the terms and conditions of the portal.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`is_verified\` \`is_verified\` tinyint NULL COMMENT 'The identity of the doctor is verified / not by the portal.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`is_translator\` \`is_translator\` tinyint NULL COMMENT 'Is the user is translator or not?' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`parent_account_id\` \`parent_account_id\` bigint NULL COMMENT 'This will be used only for assistant doctor. It will be doctor''s id who have added the assistant doctor.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`postal_code\` \`postal_code\` varchar(10) NULL COMMENT 'Postal code.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`state_id\` \`state_id\` int NULL COMMENT 'FK to state table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`country_id\` \`country_id\` smallint NULL COMMENT 'FK to country table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`city_id\` \`city_id\` int NULL COMMENT 'FK to city table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`description\` \`description\` varchar(255) NULL COMMENT 'Description ' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`profileimage\` \`profileimage\` varchar(500) NULL COMMENT 'Profile image path.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`date_of_birth\` \`date_of_birth\` date NULL COMMENT 'Date of birth to calculate the age.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`address\` \`address\` varchar(500) NULL COMMENT 'Address of the user.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` CHANGE \`gender\` \`gender\` char(1) NULL COMMENT 'Gender. M = Male, F = Female, O = Other' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_account_state\` FOREIGN KEY (\`state_id\`) REFERENCES \`state\`(\`state_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_account_country\` FOREIGN KEY (\`country_id\`) REFERENCES \`country\`(\`country_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_account_city\` FOREIGN KEY (\`city_id\`) REFERENCES \`city\`(\`city_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`city\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`city\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` CHANGE \`is_public\` \`is_public\` tinyint NULL COMMENT 'Allow doctors to view history.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_anamnesis\` ADD CONSTRAINT \`FK_patient_anamnesis_account\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`serial\` \`serial\` int NULL COMMENT 'Serial number for ordering of questions.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`ask_document\` \`ask_document\` tinyint NULL COMMENT 'Show document attachment control' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`is_active\` \`is_active\` tinyint NULL COMMENT 'Question is active or not' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` CHANGE \`survey_question_group_id\` \`survey_question_group_id\` int NULL COMMENT 'FK to the survey_question_group table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`patient_survey_question\` ADD CONSTRAINT \`FK_patient_survey_question_survey_question_group\` FOREIGN KEY (\`survey_question_group_id\`) REFERENCES \`survey_question_group\`(\`survey_question_group_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`survey_question_group\` CHANGE \`serial\` \`serial\` int NULL COMMENT 'Serial number for ordering of question groups.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`survey_question_group\` CHANGE \`description\` \`description\` varchar(500) NULL COMMENT 'Description about the group.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` CHANGE \`created_by\` \`created_by\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` CHANGE \`user\` \`user\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` ADD CONSTRAINT \`FK_notification_created_by\` FOREIGN KEY (\`created_by\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`notification\` ADD CONSTRAINT \`FK_notification_user\` FOREIGN KEY (\`user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` CHANGE \`user\` \`user\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` CHANGE \`created_date\` \`created_date\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` ADD CONSTRAINT \`FK_favorite_doctor_user\` FOREIGN KEY (\`user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`favorite_doctor\` ADD CONSTRAINT \`FK_favorite_doctor_created_by\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`user_cancelled\` \`user_cancelled\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`activity_id\` \`activity_id\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`is_interpretation\` \`is_interpretation\` tinyint NULL COMMENT 'Is interpretation or consultation?' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`translator_consultation_price\` \`translator_consultation_price\` decimal(18,2) NULL COMMENT 'Price of the consultation for translator.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`contact\` \`contact\` text NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`doctor_id\` \`doctor_id\` int NULL COMMENT 'FK to account table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`patient_id\` \`patient_id\` int NULL COMMENT 'FK to account table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`comments\` \`comments\` varchar(500) NULL COMMENT 'Comment of the consultation.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`treatment_plan\` \`treatment_plan\` varchar(500) NULL COMMENT 'Treatment Plan of the consultation.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`translator_id\` \`translator_id\` bigint NULL COMMENT 'FK to account table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`reason_for_cancellation\` \`reason_for_cancellation\` varchar(500) NULL COMMENT 'Reason for the cancellation of the appointment' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`feedback\` \`feedback\` varchar(500) NULL COMMENT 'Feedback from the patient.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`rating\` \`rating\` decimal(3,2) NULL COMMENT 'Rating from the patient.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` CHANGE \`end_time\` \`end_time\` varchar(255) NULL COMMENT 'End date and time of the consultation.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_session_account2\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_cancelled_user\` FOREIGN KEY (\`user_cancelled\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_1ca2e7b4e9f82787586ade2f911\` FOREIGN KEY (\`activity_id\`) REFERENCES \`activity_program\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_doctor_user\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` ADD CONSTRAINT \`FK_consultation_patient_user\` FOREIGN KEY (\`patient_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` DROP COLUMN \`slots\``
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` ADD \`slots\` longtext COLLATE "utf8mb4_bin" NOT NULL COMMENT 'listed slots'`
		);
		await queryRunner.query(
			`ALTER TABLE \`activity_program\` ADD CONSTRAINT \`FK_activity_program_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet\` CHANGE \`user_id\` \`user_id\` int NOT NULL COMMENT 'FK to account table.'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet\` ADD CONSTRAINT \`FK_account_wallet_account\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`wallet_offers_id\` \`wallet_offers_id\` int NULL COMMENT 'FK to wallet_offers table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` CHANGE \`amount\` \`amount\` decimal(18,2) NULL COMMENT 'Amount.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_wallet_transaction\` ADD CONSTRAINT \`FK_account_wallet_transaction_wallet_offers\` FOREIGN KEY (\`wallet_offers_id\`) REFERENCES \`wallet_offers\`(\`wallet_offers_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`payment_mode\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`payment_mode\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`currency\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`currency\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`coin_conversion_rate\` CHANGE \`end_date\` \`end_date\` datetime NULL COMMENT 'Rate effective till.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`wallet_offers\` CHANGE \`offer_end_date\` \`offer_end_date\` datetime NULL COMMENT 'Offer end date.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_price\` CHANGE \`doctors_fee\` \`doctors_fee\` decimal(18,2) NULL COMMENT 'Per hour payment to doctors in local currency.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_document\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_document\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`document_type\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`document_type\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`medicaments\` \`medicaments\` text NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`diseases\` \`diseases\` text NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`allergies\` \`allergies\` text NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`breaks\` \`breaks\` text NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`operations\` \`operations\` text NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` CHANGE \`gender\` \`gender\` varchar(255) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`medical_record\` ADD CONSTRAINT \`FK_medical_record_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`professional_info_id\` \`professional_info_id\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`speciality_image\` \`speciality_image\` varchar(500) NULL COMMENT 'Speciality image path.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` CHANGE \`speciality_name\` \`speciality_name\` varchar(1000) NULL COMMENT 'Speciality name.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` ADD CONSTRAINT \`FK_professional-info_specialities\` FOREIGN KEY (\`professional_info_id\`) REFERENCES \`professional-info\`(\`professional_info_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`speciality\` ADD CONSTRAINT \`FK_specialities_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`language_id\` \`language_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`speciality_id\` \`speciality_id\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`created_at\` \`created_at\` datetime NOT NULL COMMENT 'Date and time when the question is published.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`image\` \`image\` varchar(1000) NULL COMMENT 'Image of question' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of question' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` CHANGE \`title\` \`title\` varchar(1000) NULL COMMENT 'Title of question' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_question_language\` FOREIGN KEY (\`language_id\`) REFERENCES \`language\`(\`language_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_question_speciality\` FOREIGN KEY (\`speciality_id\`) REFERENCES \`speciality\`(\`speciality_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_question_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`language\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`language\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` CHANGE \`language_id\` \`language_id\` int NULL COMMENT 'FK to the language table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` CHANGE \`end_date\` \`end_date\` datetime NULL COMMENT 'Date and time after which this price will no longer effect.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` ADD CONSTRAINT \`FK_account_consultation_price_account\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`account_consultation_price\` ADD CONSTRAINT \`FK_account_consultation_price_language\` FOREIGN KEY (\`language_id\`) REFERENCES \`language\`(\`language_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`no_of_views\` \`no_of_views\` int NULL COMMENT 'No of views on the forum.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`no_of_comments\` \`no_of_comments\` int NULL COMMENT 'No of comments on the forum.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`no_of_likes\` \`no_of_likes\` int NULL COMMENT 'No of likes on the forum.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum\` CHANGE \`description\` \`description\` varchar(1000) NULL COMMENT 'Description of the question.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`reason_for_block\` \`reason_for_block\` varchar(500) NULL COMMENT 'Reason of blocking the commnet.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`is_blocked\` \`is_blocked\` tinyint NULL COMMENT 'Comment is blocked or not.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` CHANGE \`ref_comment_id\` \`ref_comment_id\` bigint NULL COMMENT 'Self refrenece to article_comment_id in case of reply to the comment.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`forum_comment\` ADD CONSTRAINT \`FK_forum_comment_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-info\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-info\` ADD CONSTRAINT \`FK_professional_info_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` CHANGE \`professional_info_id\` \`professional_info_id\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` CHANGE \`speciality\` \`speciality\` varchar(255) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`professional-experience\` ADD CONSTRAINT \`FK_professional-info_professionalExperience\` FOREIGN KEY (\`professional_info_id\`) REFERENCES \`professional-info\`(\`professional_info_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`articleArticleId\` \`articleArticleId\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`video\` \`video\` varchar(255) NULL COMMENT 'Video of the media-post.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`image\` \`image\` varchar(255) NULL COMMENT 'Image of the media-post.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`created_date\` \`created_date\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of the media-post.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_945114492f8f53bf77a223ff2a9\` FOREIGN KEY (\`articleArticleId\`) REFERENCES \`article\`(\`article_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_post_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` CHANGE \`post_id\` \`post_id\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_like_post\` FOREIGN KEY (\`post_id\`) REFERENCES \`post\`(\`post_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_like_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`post_id\` \`post_id\` bigint NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`user_id\` \`user_id\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`createdDate\` \`createdDate\` datetime NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` CHANGE \`message\` \`message\` varchar(1000) NULL COMMENT 'message replay to a post ' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_comment_post\` FOREIGN KEY (\`post_id\`) REFERENCES \`post\`(\`post_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_comment_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`state\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`state\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`country\` CHANGE \`modified_date\` \`modified_date\` datetime NULL COMMENT 'Date and time when the record is modified.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`country\` CHANGE \`modified_by\` \`modified_by\` int NULL COMMENT 'User id of a user who modified the record.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`to\` \`to\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`from\` \`from\` int NULL COMMENT 'PK of the table.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL COMMENT 'Date and time when the record is created.' DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`subject\` \`subject\` varchar(1000) NULL COMMENT 'Subject of the message.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` CHANGE \`content\` \`content\` varchar(1000) NULL COMMENT 'Content of the message.' DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_message_to_user\` FOREIGN KEY (\`to\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_message_from_user\` FOREIGN KEY (\`from\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`consultation_session\` DROP COLUMN \`consultationImage\``
		);
	}
}
