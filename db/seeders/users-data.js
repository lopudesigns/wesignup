const moment = require('moment');
const twoWeeksAgo = moment().subtract(14, 'days').format("YYYY-MM-DD HH:mm:ss");

module.exports = {
  up: queryInterface => (
    queryInterface.bulkInsert('users', [
      {
        email: 'fabien@ezira.io',
        email_is_verified: true,
        last_attempt_verify_email: new Date(),
        phone_number: '+66102030405',
        phone_number_is_verified: false,
        phone_code_attempts: 1,
        phone_code: '84576',
        last_attempt_verify_phone_number: new Date(),
        ip: '100.1.2.300.4',
        account_is_created: false,
        created_at: new Date(),
        updated_at: new Date(),
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        status: null,
        username: 'fabien2017',
        username_booked_at: new Date(),
        metadata: JSON.stringify({ query: { uid: '12345' } }),
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
      },
      // Approved user with last attempt to verify email before fix in #246
      {
        email: 'xxx@xxx.com',
        email_is_verified: false,
        // Date before fix refs #246
        last_attempt_verify_email: new Date('2018-03-01T03:24:00'),
        phone_number: '+13136139172',
        phone_number_is_verified: false,
        phone_code_attempts: 1,
        phone_code: '111',
        last_attempt_verify_phone_number: new Date(),
        ip: '100.1.2.300.4',
        account_is_created: false,
        created_at: new Date(),
        updated_at: new Date(),
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        status: 'approved',
        username: '111',
        username_booked_at: new Date(),
        metadata: JSON.stringify({ query: { uid: '111' } }),
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
      },
      // Approved user, who has not created an account and will be sent reminder email.
      {
        email: 'bbbzzz@xxx.com',
        email_is_verified: true,
        last_attempt_verify_email: new Date('2018-04-01T03:24:00'),
        phone_number: '+13136139172',
        phone_number_is_verified: true,
        phone_code_attempts: 1,
        phone_code: '111',
        last_attempt_verify_phone_number: new Date(),
        ip: '100.1.2.300.4',
        account_is_created: false,
        created_at: new Date(),
        updated_at: moment().subtract(8, 'days').toDate(),
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        status: 'approved',
        username: 'LeRat',
        username_booked_at: new Date(),
        metadata: JSON.stringify({ query: { uid: '111' } }),
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
      },
      // Approved user, no attempt to verify email, no attempt to verify phone.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: 'approved',
        last_attempt_verify_email: null,
        username:	'sssPPP',
        username_booked_at:	'2018-03-12T21:17:14',
        email:	'ppp@gmail.com',
        phone_number:	'+17376669535',
        phone_number_is_verified: false,
        phone_code_attempts: 0,
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
        metadata: JSON.stringify({ query: { uid: 'sss' } }),
        account_is_created: false,
        email_is_verified: false,
      },
      // Approved user with verified phone but no last attempt to verify email.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: 'approved',
        last_attempt_verify_email: null,
        username:	'222',
        username_booked_at:	'2018-03-12T21:17:14',
        email:	'222@gmail.com',
        phone_number:	'+17376669535',
        phone_number_is_verified: true,
        last_attempt_verify_phone_number: new Date(),
        phone_code_attempts: 1,
        phone_code:	'46664',
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
        metadata: JSON.stringify({ query: { uid: '222' } }),
        account_is_created: false,
        email_is_verified: false,
      },
      // Phone verified, no phone verification attempts.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: 'approved',
        last_attempt_verify_email: null,
        username:	'cccc',
        username_booked_at:	'2018-03-12T21:17:14',
        email:	'vvvvv@gmail.com',
        phone_number:	'+17376669535',
        last_attempt_verify_phone_number: new Date(),
        phone_number_is_verified: true,
        phone_code_attempts: 0,
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
        metadata: JSON.stringify({ query: { uid: '222' } }),
        account_is_created: false,
        email_is_verified: false,
      },
      // Stopped at step 0 - User entered username and did not proceed.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: null,
        last_attempt_verify_email: null,
        username:	'0000',
        username_booked_at:	'2018-03-12T21:17:14',
        email: '',
        phone_number:	null,
        phone_number_is_verified: false,
        last_attempt_verify_phone_number: null,
        phone_code_attempts: 0,
        phone_code:	null,
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: null,
        metadata: JSON.stringify({ query: { uid: '000' } }),
        account_is_created: false,
        email_is_verified: false,
      },
      // Stopped at step 1 - User was sent validation email but has not verified within 14 days.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: 'manual_review',
        last_attempt_verify_email: twoWeeksAgo,
        username:	'333',
        username_booked_at:	'2018-03-12T21:17:14',
        email:	'333@gggm.com',
        phone_number:	null,
        phone_number_is_verified: false,
        last_attempt_verify_phone_number: null,
        phone_code_attempts: 0,
        phone_code:	null,
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
        metadata: JSON.stringify({ query: { uid: '333' } }),
        account_is_created: false,
        email_is_verified: false,
      },
      // Stopped at step 2 - User validated email but never submitted a phone number.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: null,
        last_attempt_verify_email: new Date(),
        username:	'444',
        username_booked_at:	'2018-03-12T21:17:14',
        email:	'444@ccc.com',
        phone_number:	null,
        phone_number_is_verified: false,
        last_attempt_verify_phone_number: null,
        phone_code_attempts: 0,
        phone_code:	null,
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
        metadata: JSON.stringify({ query: { uid: '444' } }),
        account_is_created: false,
        email_is_verified: true,
      },
      // Stopped at step 2i - User validated email, submitted a phone number but never verified it.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: null,
        last_attempt_verify_email: new Date(),
        username:	'555',
        username_booked_at:	'2018-03-12T21:17:14',
        email:	'555@ccc.com',
        phone_number:	'+13136138172',
        phone_number_is_verified: false,
        last_attempt_verify_phone_number: new Date(),
        phone_code_attempts: 0,
        phone_code:	'5555',
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
        metadata: JSON.stringify({ query: { uid: '555' } }),
        account_is_created: false,
        email_is_verified: true,
      },
      // Stopped at step 3 - User validated email, validated phone number but never completed.
      {
        created_at:	'2018-03-12T21:17:14',
        updated_at: '2018-03-15T18:57:46',
        status: null,
        last_attempt_verify_email: new Date(),
        username:	'666',
        username_booked_at:	'2018-03-12T21:17:14',
        email:	'666@ccc.com',
        phone_number:	'+13136138172',
        phone_number_is_verified: true,
        last_attempt_verify_phone_number: new Date(),
        phone_code_attempts: 1,
        phone_code:	'66666',
        ip: '75.662.77.122',
        fingerprint: '{"date": "Fri Sep 15 2017 10:38:36 GMT+0200 (Paris, Madrid (heure d’été)", "device": {"renderer": "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)", "vendor": "Google Inc."}, "lang": "fr-FR,fr,en-US,en,ms", "ref": "https://jsfiddle.net/", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"}',
        creation_hash: '5a234b0a964be4a73c0bf78df675038e1e297c4726cd7340bfeeaf036ceeb885',
        metadata: JSON.stringify({ query: { uid: '666' } }),
        account_is_created: false,
        email_is_verified: true,
      }
    ], {})
  ),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
