# **App Name**: HealthVerse Portal

## Core Features:

- Unified Landing Page Display: A single, modern, and visually cohesive landing page to serve as a central hub for all three health-related web applications.
- Responsive Layout Management: Ensure the page layout and content adapt seamlessly across various devices, from mobile phones to desktops, using CSS Grid or Flexbox.
- Engaging Hero Section: A top-section displaying a compelling headline and sub-headline, accompanied by a subtle background element or animation, to quickly introduce the platform's purpose.
- Interactive Application Cards with AI Highlighting: Showcase HealthSense AI (emphasizing its professional-grade AI document analysis tool), HydraWeight, and BloodLink Kerala as equally prominent, interactive cards with their specific icons, one-sentence descriptions, and dedicated Call-to-Action buttons. Each card uses its assigned accent color for visual distinction.
- Dynamic Scroll Animations: Implement subtle fade-in and a slight upward motion for the application cards as the user scrolls down the page, enhancing user engagement.
- Intuitive Hover Effects: Provide visual feedback on hover for each application card, featuring a smooth lift-up effect with a shadow and a color fill transition for the Call-to-Action buttons.
- External Application Navigation: Enable seamless redirection to the respective live web applications (health-sense-ai-three.vercel.app, hydraweight.vercel.app, and bloodlink-gamma.vercel.app) through dedicated Call-to-Action buttons.

## Style Guidelines:

- Light color scheme, reflecting a modern, clean, trustworthy, and professional aesthetic.
- Primary color: A sophisticated and calming blue (#2D77DB), symbolizing trust and clarity, contrasting effectively with a light background.
- Background color: A very subtle and light sky-blue tint (#E6F1FF), maintaining a clean and spacious feel across the landing page.
- Accent color: A vibrant, clear aqua (#7EF3F3), used sparingly for visual pop and dynamic elements.
- Application Card Accents: Specific accent colors for each card to maintain brand identity: deep teal or soft blue for HealthSense AI, vibrant green or sky blue for HydraWeight, and urgent red (#DC2626) for BloodLink Kerala, used for icons and CTA button hovers.
- Overall font: 'Inter' (sans-serif) for both headlines and body text, ensuring high readability, a modern feel, and strong contrast with the background.
- Consistent use of simple, line-art icons from a library like Heroicons, including a document/file-scan icon for HealthSense AI, a water droplet/weight scale icon for HydraWeight, and a blood drop/medical cross icon for BloodLink Kerala.
- A single, vertically scrolling page structure with a hero section at the top, followed by three equally prominent application cards displayed side-by-side on desktop and stacked vertically on mobile, leveraging CSS Grid or Flexbox for responsiveness.
- Subtle, slow-moving gradient or background element in the hero section. Application cards will implement a graceful fade-in and slight upward motion on scroll using the Intersection Observer API. Hover effects on cards will include a smooth lift-up (raise effect with shadow) and CTA button color fills via CSS transitions.