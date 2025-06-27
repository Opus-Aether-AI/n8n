export const BUTTON_STYLE_SECONDARY =
	'display:inline-block; text-decoration:none; background-color:#fff; color:#4a4a4a; padding:12px 24px; font-family: Arial,sans-serif; font-size:14px;font-weight:600; border:1px solid #d1d1d1; border-radius:6px; min-width:120px; margin: 12px 6px 0 6px;';
export const BUTTON_STYLE_PRIMARY =
	'display:inline-block; text-decoration:none; background-color:#ff6d5a; color: #fff; padding:12px 24px; font-family: Arial,sans-serif; font-size:14px;font-weight:600; border-radius:6px; min-width:120px; margin: 12px 2px 0 2px;';

export const ACTION_RECORDED_PAGE_WITHOUT_ATTRIBUTION = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Action Recorded</title>
		<style>
			body {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100vh;
				margin: 0;
				font-family: Arial, sans-serif;
				background-color: #f7f7f7;
			}
			.container {
				text-align: center;
			}
			.checkmark {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				display: block;
				margin: 0 auto 20px;
				stroke-width: 2;
				stroke: #4caf50;
				stroke-miterlimit: 10;
				box-shadow: inset 0px 0px 0px #4caf50;
				animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
			}
			.checkmark__circle {
				stroke-dasharray: 166;
				stroke-dashoffset: 166;
				stroke-width: 2;
				stroke-miterlimit: 10;
				stroke: #4caf50;
				fill: none;
				animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
			}
			.checkmark__check {
				transform-origin: 50% 50%;
				stroke-dasharray: 48;
				stroke-dashoffset: 48;
				animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
			}
			@keyframes stroke {
				100% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes scale {
				0%,
				100% {
					transform: none;
				}
				50% {
					transform: scale3d(1.1, 1.1, 1);
				}
			}
			@keyframes fill {
				100% {
					box-shadow: inset 0px 0px 0px 30px #4caf50;
				}
			}
		</style>
	</head>
	<body>
		<div class="container">
			<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
				<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
				<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
			</svg>
			<p>Your action has been recorded.</p>
		</div>
	</body>
</html>
`;

export const ACTION_RECORDED_PAGE_WITH_ATTRIBUTION = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Action Recorded</title>
		<style>
			body {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100vh;
				margin: 0;
				font-family: Arial, sans-serif;
				background-color: #f7f7f7;
			}
			.container {
				text-align: center;
			}
			.checkmark {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				display: block;
				margin: 0 auto 20px;
				stroke-width: 2;
				stroke: #4caf50;
				stroke-miterlimit: 10;
				box-shadow: inset 0px 0px 0px #4caf50;
				animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
			}
			.checkmark__circle {
				stroke-dasharray: 166;
				stroke-dashoffset: 166;
				stroke-width: 2;
				stroke-miterlimit: 10;
				stroke: #4caf50;
				fill: none;
				animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
			}
			.checkmark__check {
				transform-origin: 50% 50%;
				stroke-dasharray: 48;
				stroke-dashoffset: 48;
				animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
			}
			@keyframes stroke {
				100% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes scale {
				0%,
				100% {
					transform: none;
				}
				50% {
					transform: scale3d(1.1, 1.1, 1);
				}
			}
			@keyframes fill {
				100% {
					box-shadow: inset 0px 0px 0px 30px #4caf50;
				}
			}
			.n8n-attribution-link {
				color: #999;
				text-decoration: none;
				font-size: 12px;
				margin-top: 20px;
				display: inline-block;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
				<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
				<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
			</svg>
			<p>Your action has been recorded.</p>
			<a href="https://n8n.io/?utm_source=n8n_email" target="_blank" class="n8n-attribution-link">
				Automated with n8n
			</a>
		</div>
	</body>
</html>
`;

export function createEmailBody(
	message: string,
	buttons: string,
	withAttribution: boolean,
	instanceId?: string,
) {
	const utm_campaign = instanceId ? `&utm_campaign=${instanceId}` : '';
	const n8nWebsiteLink = `https://n8n.io/?utm_source=n8n-internal&utm_medium=send-and-wait${utm_campaign}`;

	const attribution = withAttribution
		? `
		<!-- Footer -->
		<table width="100%" cellpadding="0" cellspacing="0" border="0"
			style="text-align: center; color: #7e8186; font-family: Arial, sans-serif; font-size: 12px;">
			<tr>
				<td>
					<a href=${n8nWebsiteLink}
						target="_blank" style="color: #7e8186; text-decoration: none;">Automated with
						n8n</a>
				</td>
			</tr>
		</table>
`
		: '';

	return `
<!DOCTYPE html>
<html lang='en'>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My form</title>
</head>

<body
	style="font-family: Arial, sans-serif; font-size: 12px; background-color: #fbfcfe; margin: 0; padding: 0;">
	<table width="100%" cellpadding="0" cellspacing="0"
		style="background-color:#fbfcfe; border: 1px solid #dbdfe7; border-radius: 8px;">
		<tr>
			<td align="center" style="padding: 24px 0;">
				<table width="448" cellpadding="0" cellspacing="0" border="0"
					style="width: 100%; max-width: 448px; background-color: #ffffff; border: 1px solid #dbdfe7; border-radius: 8px; padding: 24px; box-shadow: 0px 4px 16px rgba(99, 77, 255, 0.06);">
					<tr>
						<td
							style="text-align: center; padding-top: 8px; font-family: Arial, sans-serif; font-size: 14px; color: #7e8186;">
							<p style="white-space: pre-line;">${message}</p>
						</td>
					</tr>
					<tr>
						<td align="center" style="padding-top: 12px;">
								${buttons}
						</td>
					</tr>
				</table>

				<!-- Divider -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
					<tr>
						<td style="border-top: 0px solid #dbdfe7;"></td>
					</tr>
				</table>
				${attribution}
			</td>
		</tr>
	</table>
</body>

</html>
	`;
}
