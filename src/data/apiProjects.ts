import type { ApiProject } from '@/types';

export const apiProjects = [
	{
		id: 'activity-tracker-api',
		title: 'Activity Tracker API',
		description:
			'A CRUD REST API for recording activities such as running, cycling, walking, jump rope and strength training.',
		technologies: [
			'Java 21',
			'Spring Boot',
			'Spring Web MVC',
			'Spring Data JPA',
			'H2',
			'MockMvc',
		],
		engineeringHighlights: [
			'Request and response DTOs keep the HTTP contract separate from JPA entities.',
			'Controller, service and repository layers separate application responsibilities.',
			'Bean Validation and MockMvc tests cover CRUD, validation and not-found behaviour.',
		],
		diagram: {
			src: '/projects/apis/activity-tracker/activity-tracker-request-flow.png',
			alt: 'Activity Tracker API request flow from the client through the controller, validation, service and repository to the H2 database.',
			width: 2407,
			height: 1264,
		},
		githubLink: 'https://github.com/aejmcclelland/activity-tracker',
	},
	{
		id: 'subscription-pricing-api',
		title: 'Subscription Pricing API',
		description:
			'A focused REST API that calculates monthly and annual subscription costs for tiered plans, with GBP as the explicit supported currency.',
		technologies: [
			'Java 21',
			'Spring Boot',
			'Spring Web MVC',
			'Bean Validation',
			'JUnit',
			'MockMvc',
		],
		engineeringHighlights: [
			'Request and response DTOs separate the HTTP contract from pricing logic.',
			'Enums model subscription plans, billing cycles and the supported currency.',
			'Global exception handling returns structured validation and currency errors.',
		],
		diagram: {
			src: '/projects/apis/subscription-pricing/subscription-pricing-flow.png',
			alt: 'Subscription Pricing API flow showing request validation, pricing calculation, structured errors and the JSON response.',
			width: 1800,
			height: 2046,
		},
		githubLink:
			'https://github.com/aejmcclelland/subscription-pricing-api',
	},
	{
		id: 'parking-calculator-api',
		title: 'Parking Calculator API',
		description:
			'A compact REST API that calculates parking charges using interchangeable hourly, flat-rate and all-day tariff strategies.',
		technologies: [
			'Java 21',
			'Spring Boot',
			'Spring Web MVC',
			'Bean Validation',
			'JUnit',
			'Maven',
		],
		engineeringHighlights: [
			'A strategy interface and polymorphic implementations isolate tariff calculations.',
			'The service selects a pricing strategy without coupling the controller to tariff implementations.',
			'Structured bad-request responses and unit tests cover strategy and service behaviour.',
		],
		diagram: {
			src: '/projects/apis/parking-calculator/parking-calculator-flow.png',
			alt: 'Parking Calculator API flow showing the controller, service and interchangeable parking charge strategies.',
			width: 1624,
			height: 2309,
		},
		githubLink:
			'https://github.com/aejmcclelland/java-parking-calculator',
	},
] satisfies readonly ApiProject[];
