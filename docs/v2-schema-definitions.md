# V2 Schema Definitions

## profiles
- id
- email
- role (admin, partner, prospect)
- created_at

## partner_accounts
- id
- profile_id
- status
- activation_score
- created_at

## offers
- id
- name
- category
- description
- requirements
- payout_notes
- affiliate_link
- created_at

## training_modules
- id
- title
- category
- level
- content_url
- required (boolean)

## playbooks
- id
- title
- persona
- content
- related_offers

## resources
- id
- title
- category
- file_url

## performance_snapshots
- id
- partner_id
- clicks
- applications
- funded
- commissions
- created_at

## activity_log
- id
- partner_id
- action
- metadata
- created_at
