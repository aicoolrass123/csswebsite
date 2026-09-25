# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in Stratford, East London and the wider borough who need a solicitor, most often in a stressful, time-boxed situation: a visa or settlement application, a Home Office decision, a family breakdown, a police station call, an eviction notice, a dismissal. Many are first- or second-generation migrants, and some do not have English as a first language. They are deciding quickly whether this firm is competent, honest and reachable — usually on a phone, often after a search or a referral from someone they trust.

## Product Purpose

A marketing site for Church Street Solicitors Ltd, a six-discipline high-street practice established in Stratford in June 2015. It exists to turn a worried local visitor into a booked appointment or a phone call, by making the firm's offer legible in seconds: what it handles, what it costs, who will handle it, and how to make contact.

## Positioning

A full-service East London practice whose immigration work is the centre of gravity, where matters are run by a solicitor rather than passed down, fees are fixed in writing before work begins, and advice is given in plain English — including telling a client straight away when the firm cannot help.

## Operating Context

Real firm facts a visitor may act on: 12 Church Street, London E15 3HX; telephone 020 8221 0233; Mon–Fri 9:30–18:30, Saturday 11:00–14:00 by appointment. Practice areas: immigration, family, criminal defence, housing, employment, civil litigation. Enquiries arrive by phone and by web form, and are answered within one working day; payment by instalments is available.

## Capabilities and Constraints

Existing surfaces: home, about us, area of practice, our team, our fees, contact. The stack is Next.js 13 (app router) with Tailwind CSS. Factual claims are constrained to what the site already asserts — established 2015, SRA-regulated practice, confidentiality and GDPR handling, fixed fees agreed in writing, instalments, the three existing client testimonials, senior-led matters, a high success record in Home Office and appeal matters. No new statistics, ratings, accreditations, or testimonials may be invented. Forms are client-side only; there is no backend and the contact flows must not imply a live case-management integration.

## Brand Commitments

The name "Church Street Solicitors" and the existing logo asset (public/images/logo.png — tan and red mark with wordmark) are fixed. Voice: sober, credible, plain-English, never boastful and never gimmicky. The firm's own framing — "always on your side", "honest, reliable advice" — is the emotional register. Legal-advertising restraint applies.

## Evidence on Hand

public/images/ — four hero slides (slide1–slide4), office and team photography (Solicitors-East.png, testimonial.png, aboutus1.jpg, About-Us-2.png, Office.png, marianimage.jpg), the logo, and an area6.jpg background. public/plates/ — three derived duotone plates (lead.jpg from slide1.jpg, office.jpg from Office.png, client.png from testimonial.png), each carrying embedded provenance. Data.js holds the four hero slide records, the six practice-area blurbs, the wire tape and the four faces of the edition. Three real testimonials with attribution (Femi Sotonwa; two from "Lisa") live in components/Testimonial.jsx.

## Product Principles

1. Immigration first: every structural decision should serve a visitor with an urgent immigration matter, with the other disciplines as reinforcement rather than dilution.
2. Plain English over legal posturing; clarity is the credibility signal.
3. Fees and process are proof: fixed fees in writing and direct access to the handling solicitor are the firm's differentiators and should appear early.
4. Say only what is true; no invented proof, no borrowed authority.
5. Calm authority. The visitor is frightened; the surface should steady them, not pressure them.
