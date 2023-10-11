export enum DIToken {
	USER_ACCOUNT_REPOSITORY_INTERFACE = 'UserAccountRepositoryInterface',
	USER_ACCOUNT_SERVICE_INTERFACE = 'UserAccountServiceInterface',
	AUTH_REPOSITORY_INTERFACE = 'AuthRepositoryInterface',
	AUTH_SERVICE_INTERFACE = 'AuthServiceInterface',
	USER_SESSION_REPOSITORY_INTERFACE = 'UserSessionRepositoryInterface',
	USER_SESSION_SERVICE_INTERFACE = 'UserSessionServiceInterface',
	// USER_ROLE_REPOSITORY_INTERFACE = 'UserRoleRepositoryInterface',
	// USER_ROLE_SERVICE_INTERFACE = 'UserRoleServiceInterface',
	ROLE_REPOSITORY_INTERFACE = 'RoleRepositoryInterface',
	ROLE_SERVICE_INTERFACE = 'RoleServiceInterface',
	ROLE_FEATURE_REPOSITORY_INTERFACE = 'RoleFeatureRepositoryInterface',
	ROLE_FEATURE_SERVICE_INTERFACE = 'RoleFeatureServiceInterface',
	FEATURE_REPOSITORY_INTERFACE = 'FeatureRepositoryInterface',
	FEATURE_SERVICE_INTERFACE = 'FeatureServiceInterface',
	FEATURE_GROUP_REPOSITORY_INTERFACE = 'FeatureGroupRepositoryInterface',
	FEATURE_GROUP_SERVICE_INTERFACE = 'FeatureGroupServiceInterface',
	ACCOUNT_SERVICE_INTERFACE = 'AccountServiceInterface',
	ACCOUNT_REPOSITORY_INTERFACE = 'AccountRepositoryInterface',
	COUNTRY_SERVICE_INTERFACE = 'CountryServiceInterface',
	COUNTRY_REPOSITORY_INTERFACE = 'CountryRepositoryInterface',
	STATE_SERVICE_INTERFACE = 'StateServiceInterface',
	STATE_REPOSITORY_INTERFACE = 'StateRepositoryInterface',
	CITY_SERVICE_INTERFACE = 'CityServiceInterface',
	CITY_REPOSITORY_INTERFACE = 'CityRepositoryInterface',
	ACCOUNT_TYPE_SERVICE_INTERFACE = 'AccountTypeServiceInterface',
	ACCOUNT_TYPE_REPOSITORY_INTERFACE = 'AccountTypeRepositoryInterface',
	DOCUMENT_TYPE_SERVICE_INTERFACE = 'DocumentTypeServiceInterface',
	DOCUMENT_TYPE_REPOSITORY_INTERFACE = 'DocumentTypeRepositoryInterface',
	ACCOUNT_DOCUMENT_SERVICE_INTERFACE = 'AccountDocumentServiceInterface',
	ACCOUNT_DOCUMENT_REPOSITORY_INTERFACE = 'AccountDocumentRepositoryInterface',
	CONSULTATION_PRICE_SERVICE_INTERFACE = 'ConsultationPriceServiceInterface',
	CONSULTATION_PRICE_REPOSITORY_INTERFACE = 'ConsultationPriceRepositoryInterface',
	CONSULTATION_SESSION_SERVICE_INTERFACE = 'ConsultationSessionServiceInterface',
	CONSULTATION_SESSION_REPOSITORY_INTERFACE = 'ConsultationSessionRepositoryInterface',
	CONSULTATION_SESSION_DETAIL_SERVICE_INTERFACE = 'ConsultationSessionDetailServiceInterface',
	CONSULTATION_SESSION_DETAIL_REPOSITORY_INTERFACE = 'ConsultationSessionDetailRepositoryInterface',
	CONSULTATION_STATUS_SERVICE_INTERFACE = 'ConsultationStatusServiceInterface',
	CONSULTATION_STATUS_REPOSITORY_INTERFACE = 'ConsultationStatusRepositoryInterface',
	CONSULTATION_OUTCOME_SERVICE_INTERFACE = 'ConsultationOutcomeServiceInterface',
	CONSULTATION_OUTCOME_REPOSITORY_INTERFACE = 'ConsultationOutcomeRepositoryInterface',
	INTERPRETATION_DOCUMENT_SERVICE_INTERFACE = 'InterpretationDocumentServiceInterface',
	INTERPRETATION_DOCUMENT_REPOSITORY_INTERFACE = 'InterpretationDocumentRepositoryInterface',
	ACCOUNT_AVAILABILITY_SERVICE_INTERFACE = 'AccountAvailabilityServiceInterface',
	ACCOUNT_AVAILABILITY_REPOSITORY_INTERFACE = 'AccountAvailabilityRepositoryInterface',
	ACCOUNT_WALLET_SERVICE_INTERFACE = 'AccountWalletServiceInterface',
	ACCOUNT_WALLET_REPOSITORY_INTERFACE = 'AccountWalletRepositoryInterface',
	ACCOUNT_WALLET_TRANSACTION_SERVICE_INTERFACE = 'AccountWalletTransactionServiceInterface',
	ACCOUNT_WALLET_TRANSACTION_REPOSITORY_INTERFACE = 'AccountWalletTransactionRepositoryInterface',
	WALLET_OFFERS_SERVICE_INTERFACE = 'WalletOffersServiceInterface',
	WALLET_OFFERS_REPOSITORY_INTERFACE = 'WalletOffersRepositoryInterface',
	WALLET_OFFERS_DETAIL_SERVICE_INTERFACE = 'WalletOffersDetailServiceInterface',
	WALLET_OFFERS_DETAIL_REPOSITORY_INTERFACE = 'WalletOffersDetailRepositoryInterface',
	PAYMENT_MODE_SERVICE_INTERFACE = 'PaymentModeServiceInterface',
	PAYMENT_MODE_REPOSITORY_INTERFACE = 'PaymentModeRepositoryInterface',
	CURRENCY_SERVICE_INTERFACE = 'CurrencyServiceInterface',
	CURRENCY_REPOSITORY_INTERFACE = 'CurrencyRepositoryInterface',
	COIN_CONVERSION_RATE_SERVICE_INTERFACE = 'CoinConversionRateServiceInterface',
	COIN_CONVERSION_RATE_REPOSITORY_INTERFACE = 'CoinConversionRateRepositoryInterface',
	ACCOUNT_CONSULTATION_PRICE_SERVICE_INTERFACE = 'AccountConsultationPriceServiceInterface',
	ACCOUNT_CONSULTATION_PRICE_REPOSITORY_INTERFACE = 'AccountConsultationPriceRepositoryInterface',
	PATIENT_ANAMNESIS_SERVICE_INTERFACE = 'PatientAnamnesisServiceInterface',
	PATIENT_ANAMNESIS_REPOSITORY_INTERFACE = 'PatientAnamnesisRepositoryInterface',
	PATIENT_ANAMNESIS_HISTORY_SERVICE_INTERFACE = 'PatientAnamnesisHistoryServiceInterface',
	PATIENT_ANAMNESIS_HISTORY_REPOSITORY_INTERFACE = 'PatientAnamnesisHistoryRepositoryInterface',
	PATIENT_ANAMNESIS_DOCUMENT_SERVICE_INTERFACE = 'PatientAnamnesisDocumentServiceInterface',
	PATIENT_ANAMNESIS_DOCUMENT_REPOSITORY_INTERFACE = 'PatientAnamnesisDocumentRepositoryInterface',
	PATIENT_SURVEY_QUESTION_SERVICE_INTERFACE = 'PatientSurveyQuestionServiceInterface',
	PATIENT_SURVEY_QUESTION_REPOSITORY_INTERFACE = 'PatientSurveyQuestionRepositoryInterface',
	SURVEY_QUESTION_GROUP_SERVICE_INTERFACE = 'SurveyQuestionGroupServiceInterface',
	SURVEY_QUESTION_GROUP_REPOSITORY_INTERFACE = 'SurveyQuestionGroupRepositoryInterface',
	SPECIALITIES_SERVICE_INTERFACE = 'SpecialitiesServiceInterface',
	SPECIALITIES_REPOSITORY_INTERFACE = 'SpecialitiesRepositoryInterface',
	MEDICAL_TEST_TYPE_SERVICE_INTERFACE = 'MedicalTestTypeServiceInterface',
	MEDICAL_TEST_TYPE_REPOSITORY_INTERFACE = 'MedicalTestTypeRepositoryInterface',
	FORUM_SERVICE_INTERFACE = 'ForumServiceInterface',
	FORUM_REPOSITORY_INTERFACE = 'ForumRepositoryInterface',
	FORUM_COMMENT_SERVICE_INTERFACE = 'ForumCommentServiceInterface',
	FORUM_COMMENT_REPOSITORY_INTERFACE = 'ForumCommentRepositoryInterface',
	ACTIVITY_PROGRAM_REPOSITORY_INTERFACE = 'ActivityProgramRepositoryInterface',
	LANGUAGE_SERVICE_INTERFACE = 'LanguageServiceInterface',
	LANGUAGE_REPOSITORY_INTERFACE = 'LanguageRepositoryInterface',
	CONSULTATION_OUTCOME_DOCUMENT_SERVICE_INTERFACE = 'ConsultationOutcomeDocumentServiceInterface',
	CONSULTATION_OUTCOME_DOCUMENT_REPOSITORY_INTERFACE = 'ConsultationOutcomeDocumentRepositoryInterface',
	PATIENT_FAVORITE_DOCTOR_SERVICE_INTERFACE = 'PatientFavoriteDoctorServiceInterface',
	PATIENT_FAVORITE_DOCTOR_REPOSITORY_INTERFACE = 'PatientFavoriteDoctorRepositoryInterface',
	POST_REPOSITORY_INTERFACE = 'PostRepositoryInterface',
	POST_SERVICE_INTERFACE = 'PostServiceInterface',
	ARTICLE_REPOSITORY_INTERFACE = 'AtricleRepositoryInterface',
	ARTICLE_SERVICE_INTERFACE = 'ArticleServiceInterface',
	NOTIFICATIONS_REPOSITORY_INTERFACE = 'NotificationsRepositoryInterface',
	NOTIFICATIONS_SERVICE_INTERFACE = 'NotificationsServiceInterface',
	CATEGORY_REPOSITORY_INTERFACE = 'CategoryRepositoryInterface',
	CATEGORY_SERVICE_INTERFACE = 'CategoryServiceInterface',
	PROFESSIONAL_EXPERIENCE_REPOSITORY_INTERFACE = 'ProfessionalExperienceRepositoryInterface',
	PROFESSIONAL_INFO_REPOSITORY_INTERFACE = 'ProfessionalInfoRepositoryInterface',
	MESSAGES_REPOSITORY_INTERFACE = 'MessagesRepositoryInterface',
	MESSAGES_SERVICE_INTERFACE = 'MessagesServiceInterface',
	MEDICAL_RECORD_REPOSITORY_INTERFACE = 'MedicalRecordRepositoryInterface',
	QUESTIONS_SERVICE_INTERFACE = 'QuestionsServiceInterface',
	QUESTIONS_REPOSITORY_INTERFACE = 'QuestionsRepositoryInterface',
	CONSULTATIONS_REPOSITORY_INTERFACE = 'ConsultationsRepositoryInterface',
	CONSULTATIONS_SERVICE_INTERFACE = 'ConsultationsServiceInterface',
	FAVORITE_DOCTORS_SERVICE_INTERFACE = 'FavoriteDoctorsServiceInterface',
	FAVORITE_DOCTORS_REPOSITORY_INTERFACE = 'FavoriteDoctorsRepositoryInterface',
	FAVORITE_ARTICLES_REPOSITORY_INTERFACE = 'FavoriteArticlesRepositoryInterface',
	FAVORITE_ARTICLES_SERVICE_INTERFACE = 'FavoriteArticlesServiceInterface',
	LIKE_SERVICE_INTERFACE = 'LikeServiceInterface',
	LIKE_REPOSITORY_INTERFACE = 'LikeRepositoryInterface',
	COMMENT_SERVICE_INTERFACE = 'CommentsServiceInterface',
	COMMENT_REPOSITORY_INTERFACE = 'CommentsRepositoryInterface'
}
